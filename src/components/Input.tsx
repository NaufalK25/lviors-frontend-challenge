import { useState } from 'react';

const Input = ({
  error,
  setError,
  type,
  field
}: {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  field: string;
}) => {
  const [showError, setShowError] = useState(false);
  const [data, setData] = useState<string | null>(null);

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
    <div
      className='flex flex-col items-center w-full'
      id={`input-containe-${field}`}
    >
      <input
        type={type}
        placeholder={field
          .split(' ')
          .map(
            char => char.charAt(0).toUpperCase() + char.slice(1, char.length)
          )
          .join(' ')}
        className='input'
        value={data || ''}
        onChange={event => handleInputChange(event)}
      />
      {showError && (
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
      )}
      {error && (
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
      )}
    </div>
  );
};

export default Input;
