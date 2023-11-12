import { AxiosError } from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AuthBtn from '../components/AuthBtn';
import Input from '../components/Input';
import FileInput from '../components/FileInput';
import useGuard from '../hooks/useGuard';
import { register } from '../utils/auth';
import { createErrorToast, createSuccessToast } from '../utils/toast';
import { validate } from '../utils/validate';
import { ErrorData } from '../types/error';
import 'react-toastify/dist/ReactToastify.min.css';

const RegisterPage = () => {
  useGuard(true);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleRegisterFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const name = validate(event.currentTarget.children[1], setNameError);
    const username = validate(
      event.currentTarget.children[2],
      setUsernameError
    );
    const email = validate(event.currentTarget.children[3], setEmailError);
    const password = validate(
      event.currentTarget.children[4],
      setPasswordError
    );
    // const confirmPassword = validate(
    //   event.currentTarget.children[5],
    //   setConfirmPasswordError
    // );

    const photo = `https://devfortest.my.id/uploads/${new Date().getTime()}.png`;

    try {
      setLoading(true);

      await register({
        name,
        username,
        email,
        password,
        photo
      });

      navigate('/login');
      setTimeout(() => {
        createSuccessToast('Successfully created new user!');
      }, 1);
    } catch (err) {
      if (err) {
        const axiosError = err as AxiosError;
        if (axiosError.response) {
          const axiosErrorData = axiosError.response.data as ErrorData;
          createErrorToast(axiosErrorData.message.split(', ')[0]);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative'>
      <ToastContainer />
      {loading && (
        <div className='absolute left-0 top-0 bg-blue-700 h-2 loading'></div>
      )}
      <main className='flex justify-center items-center py-8'>
        <form
          onSubmit={event => handleRegisterFormSubmit(event)}
          className='w-[50vw] flex flex-col justify-center items-center border border-blue-700 rounded p-10 gap-y-8'
        >
          <p className='text-xl'>Register</p>
          <Input
            error={nameError}
            setError={setNameError}
            type='text'
            field='name'
          />
          <Input
            error={usernameError}
            setError={setUsernameError}
            type='text'
            field='username'
          />
          <Input
            error={emailError}
            setError={setEmailError}
            type='email'
            field='email'
          />
          <Input
            error={passwordError}
            setError={setPasswordError}
            type='password'
            field='password'
          />
          <Input
            error={confirmPasswordError}
            setError={setConfirmPasswordError}
            type='password'
            field='confirm password'
          />
          <FileInput />
          <div className='flex flex-col w-full justify-center items-center gap-y-4'>
            <AuthBtn
              type='submit'
              text='Register'
            />
            <Link
              to='/login'
              className='hover:underline text-blue-700 outline-blue-700 p-1 rounded'
            >
              Login
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default RegisterPage;
