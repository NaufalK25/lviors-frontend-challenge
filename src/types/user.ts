export type User = {
  name?: string;
  username?: string;
  email?: string;
  photo?: string;
};

export type RegisteredUser = User & {
  password?: string;
};

export type LoggedInUser = {
  data: {
    token: string;
  };
};
