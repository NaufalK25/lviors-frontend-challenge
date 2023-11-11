import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useGuard = (isLoggedIn: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = window.localStorage.getItem('user');

    if (!isLoggedIn) {
      if (!user) {
        navigate('/login');
      }
    }

    if (isLoggedIn) {
      if (user) {
        navigate('/');
      }
    }
  }, [isLoggedIn, navigate]);
};

export default useGuard;
