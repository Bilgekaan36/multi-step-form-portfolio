import Success from '@/components/auth/success';

const page = () => {
  return (
    <div>
      <div className='flex min-h-screen  md:flex-row flex-col'>
        <div className='md:h-screen h-96 w-full md:w-1/2 bg-blue-400 bg-formImage bg-cover bg-center'></div>
        <Success />
      </div>
    </div>
  );
};

export default page;
