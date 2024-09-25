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

export const fifthStepSchema = z.object({
  name: z.string(),
});

interface StepFiveProps {
  onBack: () => void;
  onNext: (data: z.infer<typeof fifthStepSchema>) => void;
}

const StepFive = ({ onBack, onNext }: StepFiveProps) => {
  const form = useForm<z.infer<typeof fifthStepSchema>>({
    resolver: zodResolver(fifthStepSchema),
  });

  const onSubmit = (values: z.infer<typeof fifthStepSchema>) => {
    onNext(values);
  };

  return (
    <div>
      <h3 className='text-3xl'>Wie ist dein Name?</h3>
      <p className='text-gray-500 text-lg mt-3'>Vor- und Nachname</p>
      <div className='mt-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>
                   Wie ist dein Name?
                  </FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Gib hier deine Antwort ein...'
                      type='text'
                    />
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

export default StepFive;
