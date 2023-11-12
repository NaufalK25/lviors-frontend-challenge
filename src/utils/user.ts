import axios from 'axios';
import { PasswordData, UpdatedUser } from '../types/user';

const API_URL = 'https://devfortest.my.id/user';

export const getProfile = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('user')}`
    }
  });

  return response.data;
};

export const updateProfile = async (updatedUser: UpdatedUser) => {
  const response = await axios.put(API_URL, updatedUser, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('user')}`
    }
  });

  return response.data;
};

export const changePassword = async (passwordData: PasswordData) => {
  const response = await axios.put(`${API_URL}/change-password`, passwordData, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('user')}`
    }
  });

  return response.data;
};
