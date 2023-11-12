import axios from 'axios';
import { RegisteredUser } from '../types/user';

const API_URL = 'https://devfortest.my.id/auth';

export const register = async (newUser: RegisteredUser) => {
  const response = await axios.post(`${API_URL}/register`, newUser);

  return response;
};

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, {
    username,
    password
  });

  return response;
};

export const logout = async () => {
  const response = await axios.post(
    `${API_URL}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('user')}`
      }
    }
  );

  return response;
};
