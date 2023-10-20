import { compare } from "bcrypt";
import { prisma } from "../../../../database/prisma-client";
import { IUseCases } from "../../../../shared/implements/use-cases/use-cases";

import jsonwebtoken from "jsonwebtoken";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase implements IUseCases {
  async execute({
    username,
    password,
  }: IAuthenticateDeliveryman): Promise<string> {
    const deliverymanExist = await prisma.deliveryman.findUnique({
      where: { username },
    });

    if (!deliverymanExist) {
      throw new Error("Deliveryman not found");
    }

    const deliverymanPasswordMath = await compare(
      password,
      deliverymanExist.password
    );

    if (!deliverymanPasswordMath) {
      throw new Error("Deliveryman password is not correct");
    }

    const token = jsonwebtoken.sign(
      { username },
      "671a0da0ba061c98de801409dbc89d7e",
      {
        subject: deliverymanExist.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}
