import { User } from './user';

export type Post = {
  id: number;
  caption: string;
  image: string;
  likes: number;
  tags: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  liked: boolean;
};

type Pagination = {
  total: number;
  page: string;
  limit: string;
};

export type GetAllPostResponse = {
  success: string;
  message: string;
  data: Post[];
  pagination: Pagination;
};

export type GetPostByIdResponse = {
  success: string;
  message: string;
  data: Post;
};
