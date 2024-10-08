'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const sixthStepSchema = z.object({
  contactLink: z.string(),
});

interface StepSixProps {
  onBack: () => void;
  onNext: (data: z.infer<typeof sixthStepSchema>) => void;
}

const StepSix = ({ onBack, onNext }: StepSixProps) => {
  const form = useForm<z.infer<typeof sixthStepSchema>>({
    resolver: zodResolver(sixthStepSchema),
  });

  const onSubmit = (values: z.infer<typeof sixthStepSchema>) => {
    onNext(values);
  };

  return (
    <div>
      <h3 className='text-3xl'>Wo kann man dich/euch im Internet finden?</h3>
      <p className='text-gray-500 text-lg mt-3'>
        LinkedIn Profil und so geht aber auch.
      </p>
      <div className='mt-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
            <FormField
              control={form.control}
              name='contactLink'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>
                   Wo kann man dich/euch im Internet finden?
                  </FormLabel> */}
                  <FormControl>
                    <Input {...field} placeholder='https://' type='text' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Button
                className='mt-4 mr-4 py-3 px-4 text-lg text-white font-medium bg-red-600 hover:bg-red-700'
                onClick={onBack}
                variant='secondary'
              >
                Zurück
              </Button>
              <Button
                className='mt-4 mr-4 py-3 px-4 text-lg font-medium bg-red-600 hover:bg-red-700'
                type='submit'
              >
                Weiter
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default StepSix;
