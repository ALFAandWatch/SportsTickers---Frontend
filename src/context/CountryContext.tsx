'use client';

import { CountryType } from '@/types/CountryType';
import { createContext, useContext, useState, ReactNode } from 'react';

type CountryContextType = {
   selectedCountry: CountryType | null;
   setSelectedCountry: (country: CountryType | null) => void;
};

const CountryContext = createContext<CountryContextType | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
   const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(
      null
   );

   return (
      <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
         {children}
      </CountryContext.Provider>
   );
};

export const useCountry = () => {
   const context = useContext(CountryContext);
   if (!context) {
      throw new Error('useCountry must be used within a CountryProvider');
   }
   return context;
};
