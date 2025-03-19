'use client';

import { useSport } from '@/context/SportContext';

const CountryList = () => {
   const { selectedSport } = useSport();
   return (
      <div className="w-2/6 p-6">
         <h2>Select Country</h2>
         <h3>{selectedSport}</h3>
      </div>
   );
};

export default CountryList;
