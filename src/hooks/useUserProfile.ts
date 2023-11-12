import { AxiosError, HttpStatusCode } from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types/user';
import { getProfile } from '../utils/user';

const useUserProfile = (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        setLoading(true);
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
        setLoading(false);
      }
    };

    getProfileData();
  }, [setLoading, navigate]);

  return userProfile;
};

export default useUserProfile;
