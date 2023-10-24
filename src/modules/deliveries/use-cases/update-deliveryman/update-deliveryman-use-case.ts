import { prisma } from "../../../../database/prisma-client";
import { IUseCases } from "../../../../shared/implements/use-cases/use-cases";

interface IUpdateDeliverman {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUseCase implements IUseCases {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliverman) {
    const delivery = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });

    return delivery;
  }
}
