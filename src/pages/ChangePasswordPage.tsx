import { AxiosError } from 'axios';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import AuthBtn from '../components/AuthBtn';
import Input from '../components/Input';
import { OutletContext } from '../components/Layout';
import useGuard from '../hooks/useGuard';
import { createErrorToast, createSuccessToast } from '../utils/toast';
import { changePassword } from '../utils/user';
import { validate } from '../utils/validate';
import { ErrorData } from '../types/error';

const ChangePasswordPage = () => {
  useGuard(false);

  const setLoading = useOutletContext<OutletContext>();

  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState(false);

  const handleChangePasswordFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const oldPassword = validate(
      event.currentTarget.children[1],
      setOldPasswordError
    );

    const newPassword = validate(
      event.currentTarget.children[2],
      setNewPasswordError
    );

    const confirmNewPassword = validate(
      event.currentTarget.children[3],
      setConfirmNewPasswordError
    );

    try {
      setLoading(true);

      await changePassword({
        oldPassword,
        newPassword,
        confirmNewPassword
      });

      createSuccessToast('Successfully change password!');

      setTimeout(() => {
        window.location.reload();
      }, 1500);
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
    <form
      onSubmit={event => handleChangePasswordFormSubmit(event)}
      className='md:w-[50vw] flex flex-col justify-center items-center p-10 gap-y-8'
    >
      <p className='text-xl'>Detail User</p>
      <Input
        error={oldPasswordError}
        setError={setOldPasswordError}
        type='password'
        field='old password'
      />
      <Input
        error={newPasswordError}
        setError={setNewPasswordError}
        type='password'
        field='new password'
      />
      <Input
        error={confirmNewPasswordError}
        setError={setConfirmNewPasswordError}
        type='password'
        field='confirm new password'
      />
      <AuthBtn
        type='submit'
        text='Update'
      />
    </form>
  );
};

export default ChangePasswordPage;
