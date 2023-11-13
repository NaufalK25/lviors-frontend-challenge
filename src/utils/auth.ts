import axios from 'axios';
import { RegisteredUser } from '../types/user';

const API_URL = 'https://devfortest.my.id/auth';

export const register = async (newUser: RegisteredUser) => {
  const response = await axios.post(`${API_URL}/register`, newUser);

  return response.data;
};

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, {
    username,
    password
  });

  return response.data;
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

  return response.data;
};

export const upload = async (photo: File) => {
  const formData = new FormData();
  formData.set('photo', photo);

  const response = await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${window.localStorage.getItem('user')}`
    }
  });

  return response.data;
};
