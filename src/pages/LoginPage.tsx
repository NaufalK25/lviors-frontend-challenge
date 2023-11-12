import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthBtn from '../components/AuthBtn';
import Input from '../components/Input';
import useGuard from '../hooks/useGuard';
import { login } from '../utils/auth';
import { validate } from '../utils/validate';
import { LoggedInUser } from '../types/user';
import 'react-toastify/dist/ReactToastify.min.css';

const LoginPage = () => {
  useGuard(true);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLoginFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const username = validate(
      event.currentTarget.children[1],
      setUsernameError
    );
    const password = validate(
      event.currentTarget.children[2],
      setPasswordError
    );

    try {
      setLoading(true);

      const responseData = (await login(username, password)) as LoggedInUser;
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
    <div className='relative'>
      {loading && (
        <div className='absolute left-0 top-0 bg-blue-700 h-2 loading'></div>
      )}
      <main className='flex justify-center items-center h-screen'>
        <form
          onSubmit={event => handleLoginFormSubmit(event)}
          className='w-[50vw] flex flex-col justify-center items-center border border-blue-700 rounded p-10 gap-y-8'
        >
          <p className='text-xl'>Login</p>
          <Input
            error={usernameError}
            setError={setUsernameError}
            type='text'
            field='username'
          />
          <Input
            error={passwordError}
            setError={setPasswordError}
            type='password'
            field='password'
          />
          <div className='flex flex-col w-full justify-center items-center gap-y-4'>
            <AuthBtn
              type='submit'
              text='Login'
            />
            <Link
              to='/register'
              className='hover:underline text-blue-700 outline-blue-700 p-1 rounded'
            >
              Register
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
