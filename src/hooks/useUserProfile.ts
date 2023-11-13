import { AxiosError, HttpStatusCode } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types/user';
import { getProfile } from '../utils/user';

const useUserProfile = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        setIsLoading(true);
        const profileData = await getProfile();
        setUserProfile(profileData.data);
      } catch (err) {
        setUserProfile(null);

        if (err) {
          const axiosError = err as AxiosError;

          if (axiosError.response?.status === HttpStatusCode.Unauthorized) {
            window.localStorage.removeItem('user');
            navigate('/login');
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    getProfileData();
  }, [setIsLoading, navigate]);

  return userProfile;
};

export default useUserProfile;
