import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthBtn from '../components/AuthBtn';
import Input from '../components/Input';
import FileInput from '../components/FileInput';
import useGuard from '../hooks/useGuard';
import { RegisterError, User } from '../types/auth';

const RegisterPage = () => {
  useGuard(true);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<RegisterError>({});

  return (
    <>
      {loading && <div className='bg-primary h-2 loading'></div>}
      <main className='flex justify-center items-center py-8'>
        <form
          className='w-[50vw] flex flex-col justify-center items-center border border-primary rounded p-10 gap-y-8'
          encType='multipart/form-data'
        >
          <p className='text-xl'>Register</p>
          <Input
            error={error}
            type='text'
            field='name'
          />
          <Input
            error={error}
            type='text'
            field='username'
          />
          <Input
            error={error}
            type='email'
            field='email'
          />
          <Input
            error={error}
            type='password'
            field='password'
          />
          <Input
            error={error}
            type='password'
            field='confirm password'
          />
          <FileInput />
          <div className='flex flex-col w-full justify-center items-center gap-y-4'>
            <AuthBtn text='Register' />
            <Link
              to='/login'
              className='hover:underline text-primary outline-primary p-1 rounded'
            >
              Login
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default RegisterPage;
