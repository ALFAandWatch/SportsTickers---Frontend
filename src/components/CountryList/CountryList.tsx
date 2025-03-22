'use client';

import { useCountry } from '@/context/CountryContext';
import { useLinks } from '@/context/LinkContext';
import { useSport } from '@/context/SportContext';
import { CountryType } from '@/types/CountryType';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CountryList = () => {
   const { selectedSport } = useSport();
   const { linksList } = useLinks();
   const [countriesToShow, setCountriesToShow] = useState<CountryType[]>([]);
   const { setSelectedCountry } = useCountry();

   useEffect(() => {
      const defineCountryList = async () => {
         if (!linksList || linksList.length === 0) {
            setCountriesToShow([]);
            return;
         }

         const countries: CountryType[] = [];
         linksList.forEach((link) => {
            if (
               link.country &&
               !countries.some((c) => c.id === link.country.id)
            ) {
               countries.push(link.country);
            }
         });
         setCountriesToShow(countries);
      };
      defineCountryList();
   }, [selectedSport, linksList]);

   const handleOnClick = (country: CountryType) => {
      setSelectedCountry(country);
   };

   const CountryFlag = ({ flagCode }: { flagCode: string }) => {
      return (
         <Image
            src={`https://flagcdn.com/w320/${flagCode.toLowerCase()}.png`}
            width="40"
            height="70"
            alt={`${flagCode} flag`}
            className="inline-block rounded shadow-sm pr-2 w-12 h-6"
         />
      );
   };

   return (
      <div className="w-2/6 p-6 pt-0">
         <h2 className="text-white text-lg text-center p-2 pt-3">
            Select Country
         </h2>
         <ul>
            {countriesToShow.map((country) => (
               <li key={country.id}>
                  <button
                     onClick={() => handleOnClick(country)}
                     className="w-full p-3 mb-2 uppercase bg-[#f1f3f7] text-left rounded-md font-normal text-md hover:cursor-pointer hover:bg-blue-600/40 hover:text-white"
                  >
                     <CountryFlag flagCode={country.flagCode} />
                     {country.name}
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default CountryList;
