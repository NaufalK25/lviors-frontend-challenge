import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthBtn from '../components/AuthBtn';
import Input from '../components/Input';
import useGuard from '../hooks/useGuard';
import { login } from '../utils/auth';
import { LoginError, User } from '../types/auth';
import 'react-toastify/dist/ReactToastify.min.css';

const LoginPage = () => {
  useGuard(true);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<LoginError>({});

  const handleLoginFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const usernameInputDiv = event.currentTarget.children[1] as HTMLDivElement;
    const usernameInput = usernameInputDiv.children[0] as HTMLInputElement;
    const username = usernameInput.value;

    if (!username.length) {
      setError(prevState => {
        if (Object.keys(prevState).includes('username')) {
          prevState.username = 'Username harus diisi';

          return prevState;
        } else {
          return {
            ...prevState,
            username: 'Username harus diisi'
          };
        }
      });
    } else {
      setError(prevState => {
        prevState.username = undefined;
        return prevState;
      });
    }

    const passwordInputDiv = event.currentTarget.children[2] as HTMLDivElement;
    const passwordInput = passwordInputDiv.children[0] as HTMLInputElement;
    const password = passwordInput.value;

    if (!password.length) {
      setError(prevState => {
        if (Object.keys(prevState).includes('password')) {
          prevState.password = 'Password harus diisi';

          return prevState;
        } else {
          return {
            ...prevState,
            password: 'Password harus diisi'
          };
        }
      });
    } else {
      setError(prevState => {
        prevState.password = undefined;
        return prevState;
      });
    }

    try {
      setLoading(true);
      const response = await login(username, password);
      const responseData: User = response.data;
      const user = responseData.data.token;

      window.localStorage.setItem('user', user);
      navigate('/');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <div className='bg-primary h-2 loading'></div>}
      <main className='flex justify-center items-center h-screen'>
        <form
          onSubmit={event => handleLoginFormSubmit(event)}
          className='w-[50vw] flex flex-col justify-center items-center border border-primary rounded p-10 gap-y-8'
        >
          <p className='text-xl'>Login</p>
          <Input
            error={error}
            type='text'
            field='username'
          />
          <Input
            error={error}
            type='password'
            field='password'
          />
          <div className='flex flex-col w-full justify-center items-center gap-y-4'>
            <AuthBtn text='Login' />
            <Link
              to='/register'
              className='hover:underline text-primary outline-primary p-1 rounded'
            >
              Register
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
