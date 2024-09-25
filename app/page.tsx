import MultiStepForm from '@/components/auth/multi-step-form/multi-step-form';

export default async function Home() {
  return (
    <div>
      <div className='flex min-h-screen'>
        <div className='sticky top-0 h-screen w-1/3 bg-blue-400 bg-formImage bg-cover'></div>
        <MultiStepForm />
      </div>
    </div>
  );
}
