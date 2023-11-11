import { Link } from 'react-router-dom';
import FileInput from '../components/FileInput';

const RegisterPage = () => {
  return (
    <main className='flex justify-center items-center py-8'>
      <form
        action=''
        className='w-[50vw] flex flex-col justify-center items-center border border-primary rounded p-10 gap-y-8'
        encType='multipart/form-data'
      >
        <p className='text-xl'>Register</p>
        <input
          type='text'
          placeholder='Name'
          className='input'
        />
        <input
          type='text'
          placeholder='Username'
          className='input'
        />
        <input
          type='email'
          placeholder='Email'
          className='input'
        />
        <input
          type='password'
          placeholder='Password'
          className='input'
        />
        <input
          type='password'
          placeholder='Confirm Password'
          className='input'
        />
        <FileInput />
        <div className='flex flex-col w-full justify-center items-center gap-y-4'>
          <button className='w-2/3 bg-primary rounded-l-3xl rounded-r-3xl px-4 py-2 uppercase'>
            Register
          </button>
          <Link
            to='/login'
            className='hover:underline text-primary'
          >
            Login
          </Link>
        </div>
      </form>
    </main>
  );
};

export default RegisterPage;
