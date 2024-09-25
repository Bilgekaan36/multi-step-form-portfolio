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
import { RegisterSchema } from '@/types/register-schema';

export const seventhStepSchema = z.object({
  email: z.string(),
});

interface StepSevenProps {
  onBack: () => void;
  handleSubmit: (values: z.infer<typeof RegisterSchema>) => void;
  formData: any;
}

const StepSeven = ({ onBack, handleSubmit, formData }: StepSevenProps) => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(seventhStepSchema),
    defaultValues: formData,
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    handleSubmit(values);
  };

  return (
    <div>
      <h3 className='text-3xl font-bold'>Wie lautet deine E-Mail Adresse?</h3>

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

            <div className='flex justify-between'>
              <Button onClick={onBack} variant='secondary'>
                Back
              </Button>
              <Button type='submit' disabled={form.formState.isSubmitting}>
                Ok
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default StepSeven;
