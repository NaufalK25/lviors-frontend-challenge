import axios from 'axios';

const API_URL = 'https://devfortest.my.id/post';

export const getAllPost = async (currentPage: number) => {
  const response = await axios.get(`${API_URL}?page=${currentPage}&limit=8`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('user')}`
    }
  });

  return response.data;
};

export const getPostById = async (postId: number) => {
  const response = await axios.get(`${API_URL}/${postId}`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('user')}`
    }
  });

  return response.data;
};

export const getPostByUser = async (userId: number) => {
  const response = await axios.get(`${API_URL}/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('user')}`
    }
  });

  return response.data;
};

export const likePost = async (postId: number) => {
  const response = await axios.put(
    `${API_URL}/like/${postId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('user')}`
      }
    }
  );

  return response.data;
};

export const unlikePost = async (postId: number) => {
  const response = await axios.put(
    `${API_URL}/unlike/${postId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('user')}`
      }
    }
  );

  return response.data;
};
