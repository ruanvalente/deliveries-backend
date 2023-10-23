import { prisma } from "../../../../database/prisma-client";
import { IUseCases } from "../../../../shared/implements/use-cases/use-cases";

interface ICreateDelivery {
  id_client: string;
  item_name: string;
}

export class CreateDeliveryUseCase implements IUseCases {
  async execute({ id_client, item_name }: ICreateDelivery) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });
    return delivery;
  }
}
