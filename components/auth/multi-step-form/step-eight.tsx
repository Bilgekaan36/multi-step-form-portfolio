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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useState } from 'react';

interface StepEightProps {
  onBack: () => void;
  handleSubmit: (values: z.infer<typeof RegisterSchema>) => void;
  formData: any;
}

const StepEight = ({ onBack, handleSubmit, formData }: StepEightProps) => {
  const [confirmation, setConfirmation] = useState<boolean>(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: formData,
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    handleSubmit(values);
  };

  const checked = ['Ich stimme zu', 'Ich stimme nicht zu'];

  return (
    <div>
      <h3 className='text-3xl'>Datenschutz</h3>
      <p className='text-gray-500 text-lg mt-3'>
        Mit der Erhebung, Verarbeitung und Nutzung meiner personenbezogenen
        Daten zum Zweck der Kontaktaufnahme, für Informationen zu Produkten und
        Dienstleistungen oder zum Zweck von Veranstaltungshinweisen erkläre ich
        mich einverstanden. Ich kann mein Einverständnis jederzeit ohne Angabe
        von Gründen widerrufen. Weitere Informationen zur Verarbeitung Ihrer
        personenbezogenen Daten siehe Datenschutzerklärung.
        <a
          href='https://www.bilgekaan.dev/datenschutz'
          className='ml-2 underline text-black'
        >
          www.bilgekaan.dev/datenschutz
        </a>
      </p>
      <div className='mt-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
            <FormField
              control={form.control}
              name='success'
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>
                   Wie lautet deine E-Mail Adresse?
                  </FormLabel> */}
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-2'
                    >
                      {checked.map((confirmState) => (
                        <FormItem
                          key={confirmState}
                          className='flex items-center space-x-3 space-y-0'
                          onClick={() =>
                            setConfirmation(
                              confirmState === 'Ich stimme zu' ? true : false
                            )
                          }
                        >
                          <FormControl>
                            <RadioGroupItem value={confirmState} />
                          </FormControl>
                          <FormLabel className='text-md'>
                            {confirmState}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
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
                disabled={form.formState.isSubmitting || !confirmation}
              >
                Senden
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default StepEight;
