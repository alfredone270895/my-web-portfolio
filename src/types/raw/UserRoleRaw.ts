import { UserRolePermissionsRaw } from './UserRolePermissionsRaw';
import { AppUserRaw } from './AppUserRaw';

export type UserRoleRaw = {
  id: string;
  name: string;
  user_role_permissions?: UserRolePermissionsRaw[];
  app_users?: AppUserRaw[];
};
