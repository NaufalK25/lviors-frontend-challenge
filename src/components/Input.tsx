import { useState } from 'react';

const Input = ({
  error,
  type,
  field
}: {
  error: any;
  type: string;
  field: string;
}) => {
  const [data, setData] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent) => {
    const dataInput = event.currentTarget as HTMLInputElement;
    setData(dataInput.value);
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <input
        type={type}
        placeholder={field
          .split(' ')
          .map(
            char => char.charAt(0).toUpperCase() + char.slice(1, char.length)
          ).join(' ')}
        className='input'
        value={data || ''}
        onChange={event => handleInputChange(event)}
      />
      {!data && error[field] && (
        <small className='text-red-500'>*{error[field]}</small>
      )}
    </div>
  );
};

export default Input;
