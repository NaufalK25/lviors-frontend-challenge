import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthBtn from '../components/AuthBtn';
import Input from '../components/Input';
import FileInput from '../components/FileInput';
import useGuard from '../hooks/useGuard';
import { register } from '../utils/auth';
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

    const nameInputDiv = event.currentTarget.children[1] as HTMLDivElement;
    const nameInput = nameInputDiv.children[0] as HTMLInputElement;
    const name = nameInput.value;

    if (!name.length) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    const usernameInputDiv = event.currentTarget.children[2] as HTMLDivElement;
    const usernameInput = usernameInputDiv.children[0] as HTMLInputElement;
    const username = usernameInput.value;

    if (!username.length) {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    const emailInputDiv = event.currentTarget.children[3] as HTMLDivElement;
    const emailInput = emailInputDiv.children[0] as HTMLInputElement;
    const email = emailInput.value;

    if (!email.length) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    const passwordInputDiv = event.currentTarget.children[4] as HTMLDivElement;
    const passwordInput = passwordInputDiv.children[0] as HTMLInputElement;
    const password = passwordInput.value;

    if (!password.length) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    const confirmPasswordInputDiv = event.currentTarget
      .children[5] as HTMLDivElement;
    const confirmPasswordInput = confirmPasswordInputDiv
      .children[0] as HTMLInputElement;
    const confirmPassword = confirmPasswordInput.value;

    if (!confirmPassword.length) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }

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
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <div className='bg-teal-300 h-2 loading'></div>}
      <main className='flex justify-center items-center py-8'>
        <form
          onSubmit={event => handleRegisterFormSubmit(event)}
          className='w-[50vw] flex flex-col justify-center items-center border border-teal-300 rounded p-10 gap-y-8'
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
            <AuthBtn text='Register' />
            <Link
              to='/login'
              className='hover:underline text-teal-300 outline-teal-300 p-1 rounded'
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
