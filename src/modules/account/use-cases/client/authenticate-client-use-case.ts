import { compare } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { prisma } from "../../../../database/prisma-client";
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
    const token = jsonwebtoken.sign(
      { username },
      "671a0da0ba061c98de801409dbc57d7e",
      {
        subject: clientExists.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}