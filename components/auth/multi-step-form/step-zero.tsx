'use client';

import { Button } from '@/components/ui/button';

const StepZero = ({ onNext }: any) => {
  return (
    <div>
      <h3 className='text-3xl from-bold'>
        Du willst mit mir zusammenarbeiten? Finde ich super!
      </h3>
      <p className='text-gray-500 text-lg mt-3'>
        Vorher muss ich aber schauen, ob ich dir überhaupt helfen kann deine
        Ziele zu erreichen. Dafür habe ich folgendes Formular vorbereitet.
      </p>
      <Button
        className='mt-4 py-4 px-6 text-md font-semibold bg-red-600 hover:bg-red-700'
        onClick={onNext}
      >
        Starten
      </Button>
    </div>
  );
};

export default StepZero;
