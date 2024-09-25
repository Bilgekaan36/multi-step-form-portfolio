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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';

export const Step2Schema = z.object({
  budget: z.enum([
    '2.000€ - 5.000€',
    '5.000€ - 10.000€',
    '10.000€ - 20.000€',
    '>20.000€',
  ]),
});

const budget = [
  '2.000€ - 5.000€',
  '5.000€ - 10.000€',
  '10.000€ - 20.000€',
  '>20.000€',
];

interface StepTwoProps {
  onNext: (data: z.infer<typeof Step2Schema>) => void;
  onBack: () => void;
}

const StepTwo = ({ onNext, onBack }: StepTwoProps) => {
  const form = useForm<z.infer<typeof Step2Schema>>({
    resolver: zodResolver(Step2Schema),
  });

  const onSubmit = (values: z.infer<typeof Step2Schema>) => {
    onNext(values);
  };
  return (
    <div>
      <h3 className='text-3xl from-bold'>
        Gute Wahl! Jetzt muss ich noch wissen, wie hoch das Budget für das
        gesamte Projekt ist?
      </h3>
      <p className='text-gray-500 text-sm mt-3'>
        Die meisten dieser Projekte bewegen sich bei mir zwischen 10.000€ und
        20.000€. Was, wieso, warum... schauen wir uns am Besten gemeinsam an und
        dann weißt du auch, warum es sich lohnt, in eine richtig gute
        Web-Entwicklung zu investieren.
      </p>
      <div className='mt-10'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='budget'
              render={({ field }) => (
                <FormItem className='space-y-3'>
                  {/* <FormLabel>
                    Gute Wahl! Jetzt muss ich noch wissen, wie hoch das Budget
                    für das gesamte Projekt ist?
                  </FormLabel> */}
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className='flex flex-col space-y-2'
                    >
                      {budget.map((budgetValue) => (
                        <FormItem
                          key={budgetValue}
                          className='flex items-center space-x-3 space-y-0'
                        >
                          <FormControl>
                            <RadioGroupItem value={budgetValue} />
                          </FormControl>
                          <FormLabel>{budgetValue}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
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

export default StepTwo;
