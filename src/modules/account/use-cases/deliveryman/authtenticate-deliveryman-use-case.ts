import { compare } from "bcrypt";
import { prisma } from "../../../../config/database/prisma/prisma-client";
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
    const DELIVERYMAN_SECRET_TOKEN = process.env
      .DELIVERYMAN_SECRET_TOKEN as string;
    const token = jsonwebtoken.sign({ username }, DELIVERYMAN_SECRET_TOKEN, {
      subject: deliverymanExist.id,
      expiresIn: "1d",
    });

    return token;
  }
}
