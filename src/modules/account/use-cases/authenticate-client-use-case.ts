import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUseCase {
  private prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }
  async execute({ username, password }: IAuthenticateClient) {
    const clientExists = await this.prismaClient.clients.findUnique({
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
