import { hash } from "bcrypt";
import { prisma } from "../../../database/prisma-client";
import { IUseCases } from "../../../shared/implements/use-cases/use-cases";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase implements IUseCases {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: { username: username.toLowerCase() },
    });

    console.log(deliverymanExists);

    if (deliverymanExists) {
      throw new Error(`Deliveryman ${username} already exists`);
    }
    const deliverymanPasswordHas = await hash(password, 10);

    const deliveryman = await prisma.deliveryman.create({
      data: {
        username,
        password: deliverymanPasswordHas,
      },
    });

    return deliveryman;
  }
}
