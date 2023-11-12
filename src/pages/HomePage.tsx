import useGuard from '../hooks/useGuard';

const HomePage = () => {
  useGuard(false);

  return <main></main>;
};

export default HomePage;
