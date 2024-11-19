import { User } from "@prisma/client";
import UsersEntity from "../entities/users.entity";

export default abstract class IUserRepository {
  abstract create(props: UsersEntity): Promise<User>;
  abstract findBySpecificId(id: string): Promise<User>;
  abstract findByField(
    field: keyof UsersEntity,
    value: string
  ): Promise<User | null>;
}
