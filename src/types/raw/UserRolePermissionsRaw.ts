import { UserRoleRaw } from './UserRoleRaw';

export type UserRolePermissionsRaw = {
  id: number;
  role_id: string;
  model: string;
  post: boolean;
  get: boolean;
  patch: boolean;
  delete: boolean;
  update_all: boolean;
  delete_all: boolean;
  role?: UserRoleRaw;
};
