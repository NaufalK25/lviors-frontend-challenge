import { Button } from 'flowbite-react';

const AuthBtn = ({
  text,
  disabled,
  handleClick,
  type
}: {
  text: string;
  disabled?: boolean;
  handleClick?: () => void;
  type: 'submit' | 'button' | 'reset' | undefined;
}) => {
  return (
    <Button
      type={type}
      color='blue'
      pill
      className='hover:bg-blue-800 focus:ring-4 px-5 py-1.5 dark:hover:bg-blue-700 disabled:hover:bg-blue-700'
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default AuthBtn;
