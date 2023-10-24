import { hash } from "bcrypt";
import { prisma } from "../../../../database/prisma-client";
import { IUseCases } from "../../../../shared/implements/use-cases/use-cases";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase implements IUseCases {
  async execute({ username, password }: ICreateClient) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
        },
      },
    });

    if (clientExists) {
      throw new Error(`Client ${username} already exists`);
    }

    const hasPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hasPassword,
      },
    });

    return client;
  }
}
