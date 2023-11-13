import { FC, useState } from 'react';
import { TextInput } from 'flowbite-react';

type InputProps = {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  field: string;
  value?: any;
  disabled?: boolean;
};

const Input: FC<InputProps> = ({
  error,
  setError,
  type,
  field,
  value,
  disabled
}) => {
  PaymentRequest;
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState<string | null>(value || null);

  const handleInputChange = (event: React.ChangeEvent) => {
    const dataInput = event.currentTarget as HTMLInputElement;
    if (!dataInput.value) {
      setData('');
      setShowError(true);
    } else {
      setData(dataInput.value);

      setShowError(false);
      setError(false);
    }
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <TextInput
        color='blue'
        className='bg-gray-50 disabled:bg-gray-100 w-full'
        type={type}
        placeholder={field
          .split(' ')
          .map(
            char => char.charAt(0).toUpperCase() + char.slice(1, char.length)
          )
          .join(' ')}
        value={data || ''}
        disabled={disabled}
        autoComplete={`${type !== 'password'}`}
        onChange={event => handleInputChange(event)}
      />

      {showError && <ErrorMessage field={field} />}

      {!showError && error && <ErrorMessage field={field} />}
    </div>
  );
};

type ErrorMessageProps = {
  field: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ field }) => {
  return (
    <small className='text-red-500'>
      *
      {field
        .split(' ')
        .map(
          word =>
            word.charAt(0).toUpperCase() +
            word.slice(1, word.length).toLowerCase()
        )
        .join('')}{' '}
      harus diisi
    </small>
  );
};

export default Input;
