import { $Enums } from "@prisma/client";

export default interface UsersEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  type: $Enums.UserTypes;
}
