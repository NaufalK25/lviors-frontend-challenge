import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <main className='flex justify-center items-center h-screen'>
      <form
        action=''
        className='w-[50vw] flex flex-col justify-center items-center border border-primary rounded p-10 gap-y-8'
      >
        <p className='text-xl'>Login</p>
        <input
          type='text'
          placeholder='Username'
          className='input'
        />
        <input
          type='password'
          placeholder='Password'
          className='input'
        />
        <div className='flex flex-col w-full justify-center items-center gap-y-4'>
          <button className='w-2/3 bg-primary rounded-l-3xl rounded-r-3xl px-4 py-2 uppercase'>
            Login
          </button>
          <Link
            to='/register'
            className='hover:underline text-primary'
          >
            Register
          </Link>
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
