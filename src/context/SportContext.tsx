'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type SportContextType = {
   selectedSport: string;
   setSelectedSport: (sport: string) => void;
};

const SportContext = createContext<SportContextType | undefined>(undefined);

export const SportProvider = ({ children }: { children: ReactNode }) => {
   const [selectedSport, setSelectedSport] = useState<string>('baseball');

   return (
      <SportContext.Provider value={{ selectedSport, setSelectedSport }}>
         {children}
      </SportContext.Provider>
   );
};

export const useSport = () => {
   const context = useContext(SportContext);
   if (!context)
      throw new Error('useSport must be used within a SportProvider');
   return context;
};
