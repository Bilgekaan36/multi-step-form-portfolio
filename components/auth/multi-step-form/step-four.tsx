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

export const fourthStepSchema = z.object({
  deadline: z.string(),
});

interface StepFourProps {
  onBack: () => void;
  onNext: (data: z.infer<typeof fourthStepSchema>) => void;
}

const StepFour = ({ onBack, onNext }: StepFourProps) => {
  const form = useForm<z.infer<typeof fourthStepSchema>>({
    resolver: zodResolver(fourthStepSchema),
  });

  const onSubmit = (values: z.infer<typeof fourthStepSchema>) => {
    onNext(values);
  };

  return (
    <div>
      <h3 className='text-3xl font-bold'>
        Immer gut zu wissen: Gibt es bereits eine Deadline?
      </h3>
      <div className='mt-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
            <FormField
              control={form.control}
              name='deadline'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>
                   Immer gut zu wissen: Gibt es bereits eine Deadline?
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

            <div className='flex justify-between'>
              <Button onClick={onBack} variant='secondary'>
                Back
              </Button>
              <Button type='submit'>Ok</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default StepFour;
