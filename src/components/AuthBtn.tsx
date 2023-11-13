import { FC } from 'react';
import { Button } from 'flowbite-react';

type AuthBtnProps = {
  text: string;
  disabled?: boolean;
  handleClick?: () => void;
  type: 'submit' | 'button' | 'reset' | undefined;
};

const AuthBtn: FC<AuthBtnProps> = ({ text, disabled, handleClick, type }) => {
  return (
    <Button
      type={type}
      color='blue'
      pill
      className='rounded-btn hover:bg-blue-800 focus:ring-4 px-5 py-1.5 dark:hover:bg-blue-700 disabled:hover:bg-blue-700'
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default AuthBtn;
