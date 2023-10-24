import { compare } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { prisma } from "../../../../config/database/prisma/prisma-client";
import { IUseCases } from "../../../../shared/implements/use-cases/use-cases";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase implements IUseCases {
  async execute({ username, password }: IAuthenticateClient) {
    const clientExists = await prisma.clients.findUnique({
      where: { username },
    });
    if (!clientExists) {
      throw new Error("username not found");
    }
    const clientPasswordMatch = await compare(password, clientExists.password);

    if (!clientPasswordMatch) {
      throw new Error("password is not correct");
    }
    const CLIENT_SECRET_TOKEN = process.env.CLIENT_SECRET_TOKEN as string;

    const token = jsonwebtoken.sign({ username }, CLIENT_SECRET_TOKEN, {
      subject: clientExists.id,
      expiresIn: "1d",
    });

    return token;
  }
}
