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

export const seventhStepSchema = z.object({
  email: z.string(),
});

interface StepSevenProps {
  onBack: () => void;
  onNext: (data: z.infer<typeof seventhStepSchema>) => void;
}

const StepSeven = ({ onBack, onNext }: StepSevenProps) => {
  const form = useForm<z.infer<typeof seventhStepSchema>>({
    resolver: zodResolver(seventhStepSchema),
  });

  const onSubmit = (values: z.infer<typeof seventhStepSchema>) => {
    onNext(values);
  };

  return (
    <div>
      <h3 className='text-3xl'>Wie lautet deine E-Mail Adresse?</h3>
      <div className='mt-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>
                   Wie lautet deine E-Mail Adresse?
                  </FormLabel> */}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='name@beispiel.de'
                      type='email'
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
                type='button'
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

export default StepSeven;
