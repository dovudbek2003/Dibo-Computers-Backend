import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/common/consts/const';
import { Role } from 'src/common/enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log(2);
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log('requiredRoles =>', requiredRoles);
    if (!requiredRoles) {
      return true;
    }
    console.log(3);

    console.log('requiredRoles =>', requiredRoles);
    const { user } = context.switchToHttp().getRequest();
    console.log('user =>', user);
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
