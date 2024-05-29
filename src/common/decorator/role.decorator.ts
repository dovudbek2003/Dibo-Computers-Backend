import { SetMetadata } from "@nestjs/common";
import { Role } from "../enums/role.enum";
import { ROLES_KEY } from "../consts/const";

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles)