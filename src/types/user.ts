export type User = {
  name?: string;
  username?: string;
  email?: string;
  photo?: string;
};

export type UserProfile = User & {
  createdAt: string;
  updatedAt: string;
};

export type RegisteredUser = User & {
  password?: string;
};

export type UpdatedUser = User;

export type PasswordData = {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type LoggedInUser = {
  data: {
    token: string;
  };
};
