import { prisma } from "../../../../config/database/prisma/prisma-client";
import { IUseCases } from "../../../../shared/implements/use-cases/use-cases";

interface IUpdateEndDase {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateUseCase implements IUseCases {
  async execute({ id_delivery, id_deliveryman }: IUpdateEndDase) {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });

    return delivery;
  }
}
