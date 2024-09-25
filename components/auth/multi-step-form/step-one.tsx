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
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type StepOneProps = {
  onNext: (values: z.infer<typeof firstStepSchema>) => void;
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

const StepOne = ({ onNext }: StepOneProps) => {
  const form = useForm<z.infer<typeof firstStepSchema>>({
    resolver: zodResolver(firstStepSchema),
  });

  const onSubmit = (values: z.infer<typeof firstStepSchema>) => {
    onNext(values);
  };
  return (
    <div>
      <h3 className='text-3xl from-bold'>Hallo! Was brauchst du von mir?</h3>
      <p className='text-gray-500 text-sm mt-3'>
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
                            <FormLabel>{service}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button className='mt-5 w-full' type='submit'>
              Ok
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default StepOne;
