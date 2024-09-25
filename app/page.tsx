import { auth } from '@/server/auth';
import { redirect } from 'next/navigation';
import LogoutButton from '@/components/auth/logout-button';
import MultiStepForm from '@/components/auth/multi-step-form/multi-step-form';

export default async function Home() {
  // const session = await auth();

  // if (!session) {
  //   redirect("/login");
  // }
  return (
    <div>
      {/* <h1>Authenticated</h1>
      <LogoutButton /> */}
      <div className='flex min-h-screen'>
        <div className='sticky top-0 h-screen w-1/3 bg-blue-400 bg-formImage bg-cover'></div>
        <MultiStepForm />
      </div>
    </div>
  );
}
