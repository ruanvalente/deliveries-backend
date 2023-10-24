import { prisma } from "../../../../database/prisma-client";
import { IUseCases } from "../../../../shared/implements/use-cases/use-cases";

export class FindAllAvailableUseCase implements IUseCases {
  async execute() {
    const deliveries = await prisma.deliveries.findMany({
      where: { end_at: null, id_deliveryman: null },
    });

    return deliveries;
  }
}
