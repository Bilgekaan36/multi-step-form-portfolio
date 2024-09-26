'use client';

import { useState } from 'react';

import StepOne from './step-one';
import { Progress } from '@/components/ui/progress';
import StepTwo from './step-two';
import StepThree from './step-three';
import { useAction } from 'next-safe-action/hooks';
import { RegisterAccount } from '@/server/actions/register';
import toast from 'react-hot-toast';
import { RegisterSchema } from '@/types/register-schema';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import StepFour from './step-four';
import StepFive from './step-five';
import StepSix from './step-six';
import StepSeven from './step-seven';
import StepZero from './step-zero';
import StepEight from './step-eight';

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    description: '',
    deadline: '',
    name: '',
    contactLink: '',
    email: '',
  });

  const handleNextStep = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const progressValue = (currentStep / 8) * 100;

  const router = useRouter();

  const { execute } = useAction(RegisterAccount, {
    onSuccess(data) {
      if (data.data?.error) {
        toast.error(data.data.error);
        // router.push('/login');
      } else if (data.data?.success) {
        toast.success(data.data?.success);
        router.push('/success');
      }
    },
  });
  const finalSubmit = (values: z.infer<typeof RegisterSchema>) => {
    execute(values);
  };

  return (
    <div className='w-full md:w-1/2 p-8 flex flex-col'>
      <div className='mb-8'>
        <Progress value={progressValue} className='h-2' />
      </div>

      <div className='flex-grow flex flex-col justify-center max-w-xl mx-auto w-full'>
        {currentStep === 0 && <StepZero onNext={handleNextStep} />}
        {currentStep === 1 && (
          <StepOne onNext={handleNextStep} onBack={handlePreviousStep} />
        )}
        {currentStep === 2 && (
          <StepTwo onNext={handleNextStep} onBack={handlePreviousStep} />
        )}
        {currentStep === 3 && (
          <StepThree onNext={handleNextStep} onBack={handlePreviousStep} />
        )}
        {currentStep === 4 && (
          <StepFour onNext={handleNextStep} onBack={handlePreviousStep} />
        )}
        {currentStep === 5 && (
          <StepFive onNext={handleNextStep} onBack={handlePreviousStep} />
        )}
        {currentStep === 6 && (
          <StepSix onNext={handleNextStep} onBack={handlePreviousStep} />
        )}
        {currentStep === 7 && (
          <StepSeven onNext={handleNextStep} onBack={handlePreviousStep} />
        )}
        {currentStep === 8 && (
          <StepEight
            onBack={handlePreviousStep}
            handleSubmit={finalSubmit}
            formData={formData}
          />
        )}
      </div>
    </div>
  );
}
