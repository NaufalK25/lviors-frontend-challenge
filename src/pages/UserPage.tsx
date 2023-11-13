import { AxiosError } from 'axios';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Button } from 'flowbite-react';
import AuthBtn from '../components/AuthBtn';
import FileInput from '../components/FileInput';
import Input from '../components/Input';
import { OutletContext } from '../components/Layout';
import useGuard from '../hooks/useGuard';
import useUserProfile from '../hooks/useUserProfile';
import {
  createErrorToast,
  createInfoToast,
  createSuccessToast
} from '../utils/toast';
import { updateProfile } from '../utils/user';
import { validate } from '../utils/validate';
import { ErrorData } from '../types/error';

const UserPage = () => {
  useGuard(false);

  const setLoading = useOutletContext<OutletContext>();
  const userProfile = useUserProfile(setLoading);

  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formDisabled, setFormDisabled] = useState(true);
  const [editBtn, setEditBtn] = useState<'Edit' | 'Cancel'>('Edit');

  const handleEditBtnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setEditBtn(formDisabled ? 'Cancel' : 'Edit');
    setFormDisabled(prevState => !prevState);
  };

  const handleUpdateProfileFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const name = validate(event.currentTarget.children[1], setNameError);
    const username = validate(
      event.currentTarget.children[2],
      setUsernameError
    );
    const email = validate(event.currentTarget.children[3], setEmailError);

    if (
      userProfile &&
      name === userProfile.name &&
      username === userProfile.username &&
      email === userProfile.email
    ) {
      createInfoToast('No data change!');
      setFormDisabled(true);
      setEditBtn('Edit');
      return;
    }

    try {
      setLoading(true);

      await updateProfile({
        name,
        username,
        email,
        photo: userProfile ? userProfile.photo : ''
      });
      createSuccessToast('Successfully update user!');
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
      setFormDisabled(true);
      setEditBtn('Edit');
    }
  };

  return (
    userProfile !== null && (
      <form
        onSubmit={event => handleUpdateProfileFormSubmit(event)}
        className='md:w-[50vw] flex flex-col justify-center items-center p-10 gap-y-8'
      >
        <p className='text-xl'>Detail User</p>
        <Input
          error={nameError}
          setError={setNameError}
          field='name'
          type='text'
          value={userProfile.name}
          disabled={formDisabled}
        />
        <Input
          error={usernameError}
          setError={setUsernameError}
          field='username'
          type='text'
          value={userProfile.username}
          disabled={formDisabled}
        />
        <Input
          error={emailError}
          setError={setEmailError}
          field='email'
          type='text'
          value={userProfile.email}
          disabled={formDisabled}
        />
        <FileInput
          src={userProfile.photo}
          disabled={formDisabled}
        />
        <div className='flex gap-x-4'>
          <Button
            pill
            onClick={event => handleEditBtnClick(event)}
            className='rounded-btn text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 px-5 py-1.5 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'
          >
            {editBtn}
          </Button>
          <AuthBtn
            type='submit'
            text='Submit'
            disabled={formDisabled}
          />
        </div>
      </form>
    )
  );
};

export default UserPage;
