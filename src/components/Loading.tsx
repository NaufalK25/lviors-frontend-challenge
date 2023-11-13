import { FC } from 'react';

type LoadingProps = {
  isLoading: boolean;
};

const Loading: FC<LoadingProps> = ({ isLoading }) => {
  return (
    isLoading && (
      <div className='absolute left-0 top-0 bg-blue-700 h-2 loading z-50'></div>
    )
  );
};

export default Loading;
