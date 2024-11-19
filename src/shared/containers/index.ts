import IUserRepository from "@/app/repositories/users.repository";
import { IUserRepositoryPrismaImpl } from "@/infra";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>(
  "IUserRepositoryPrismaImpl",
  IUserRepositoryPrismaImpl
);
