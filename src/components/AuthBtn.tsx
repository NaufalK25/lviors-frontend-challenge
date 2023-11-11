const AuthBtn = ({ text }: { text: string }) => {
  return (
    <>
      <button className='w-2/3 bg-primary rounded-l-3xl rounded-r-3xl px-4 py-2 uppercase outline-none hover:bg-teal-500'>
        {text}
      </button>
    </>
  );
};

export default AuthBtn;
