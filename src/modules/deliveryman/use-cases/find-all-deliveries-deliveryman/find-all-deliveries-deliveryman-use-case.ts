import { prisma } from "../../../../database/prisma-client";
import { IUseCases } from "../../../../shared/implements/use-cases/use-cases";

export class FindAllDeliveriesDeliverymanUseCase implements IUseCases {
  async execute(id_deliveryman: string): Promise<any> {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}
