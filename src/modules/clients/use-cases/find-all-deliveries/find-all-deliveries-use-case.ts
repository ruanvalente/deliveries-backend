import { prisma } from "../../../../config/database/prisma/prisma-client";
import { IUseCases } from "../../../../shared/implements/use-cases/use-cases";

export class FindAllDeliveriesUseCase implements IUseCases {
  async execute(id_client: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client,
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
