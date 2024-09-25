'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type StepOneProps = {
  onNext: (values: z.infer<typeof firstStepSchema>) => void;
  onBack: () => void;
};

const serviceTypes = [
  'Web Development',
  'MVP Entwicklung',
  'Prozess Automatisierung',
  'Ich brauche alles',
];

export const firstStepSchema = z.object({
  service: z.enum([
    'Web Development',
    'MVP Entwicklung',
    'Prozess Automatisierung',
    'Ich brauche alles',
  ]),
});

const StepOne = ({ onNext, onBack }: StepOneProps) => {
  const form = useForm<z.infer<typeof firstStepSchema>>({
    resolver: zodResolver(firstStepSchema),
  });

  const onSubmit = (values: z.infer<typeof firstStepSchema>) => {
    onNext(values);
  };
  return (
    <div>
      <h3 className='text-3xl'>Hallo! Was brauchst du von mir?</h3>
      <p className='text-gray-500 text-lg mt-3'>
        Aber Vorsicht: Bei Kontaktaufnahme besteht die Gefahr, ein exzellentes
        Design zubekommen, das nicht nur gut aussieht, sondern dir in Zukunft
        auch wirklich hilft. Also, wenn du keinen Erfolg haben willst, solltest
        du jetzt diese Seite verlassen.
      </p>
      <div className='mt-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='grid grid-cols-2 gap-10 mb-5'>
              <FormField
                control={form.control}
                name='service'
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Hallo! Was brauchst du von mir?</FormLabel> */}
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className='flex flex-col space-y-2'
                      >
                        {serviceTypes.map((service) => (
                          <FormItem
                            key={service}
                            className='flex items-center space-x-3 space-y-0'
                          >
                            <FormControl>
                              <RadioGroupItem value={service} />
                            </FormControl>
                            <FormLabel className='text-md'>{service}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Button
                className='mt-4 mr-4 py-3 px-4 text-md text-white font-medium bg-red-600 hover:bg-red-700'
                onClick={onBack}
                variant='secondary'
              >
                Zurück
              </Button>

              <Button
                className='mt-4 mr-4 py-3 px-4 text-md font-medium bg-red-600 hover:bg-red-700'
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

export default StepOne;
