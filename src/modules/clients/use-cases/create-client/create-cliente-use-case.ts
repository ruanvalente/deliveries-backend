import { hash } from "bcrypt";
import { prisma } from "../../../../database/prisma-client";

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExists = await prisma.clients.findFirst({
      where: { username: username.toLowerCase() },
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
