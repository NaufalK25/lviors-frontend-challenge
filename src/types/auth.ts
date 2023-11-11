export type LoginError = {
  username?: string;
  password?: string;
};

export type RegisterError = LoginError & {
  name?: string;
  email?: string;
  confirmPassword?: string;
  photo?: string;
};

export type User = {
  data: {
    token: string;
  };
};
