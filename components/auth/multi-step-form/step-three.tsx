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
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export const thirdStepSchema = z.object({
  description: z.string(),
});

interface StepThreeProps {
  onBack: () => void;
  onNext: (data: z.infer<typeof thirdStepSchema>) => void;
}

const StepThree = ({ onBack, onNext }: StepThreeProps) => {
  const form = useForm<z.infer<typeof thirdStepSchema>>({
    resolver: zodResolver(thirdStepSchema),
  });

  const onSubmit = (values: z.infer<typeof thirdStepSchema>) => {
    onNext(values);
  };

  return (
    <div>
      <h3 className='text-3xl font-bold'>
        Wichtig! Erzähl mir ein bisschen von deinem Projekt
      </h3>
      <p className='text-gray-500 text-sm mt-3'>
        Die folgenden drei Fragen helfen mir dabei, einen ersten Überblick über
        dein Vorhaben zu bekommen. Lass dir ruhig etwas Zeit dafür.
      </p>
      <p className='text-gray-500 text-sm mt-3'>
        01. Um was geht es in deinem Projekt und warum ist es wichtig?
      </p>
      <p className='text-gray-500 text-sm mt-3'>
        02. Welche Probleme sollen damit gelöst werden?
      </p>
      <p className='text-gray-500 text-sm mt-3'>
        03. Was sind die Ziele für dieses Projekt?
      </p>
      <div className='mt-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>
                    Wichtig! Erzähl mir ein bisschen von deinem Projekt
                  </FormLabel> */}
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder='Gib hier deine Antwort ein...'
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

export default StepThree;
