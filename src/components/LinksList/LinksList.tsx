'use client';

import { useCountry } from '@/context/CountryContext';
import { useLinks } from '@/context/LinkContext';

const LinksList = () => {
   const { linksList } = useLinks();
   const { selectedCountry } = useCountry();

   const CountryFlag = ({ flagCode }: { flagCode: string }) => {
      return (
         <img
            src={`https://flagcdn.com/w320/${flagCode.toLowerCase()}.png`}
            width="40"
            height="70"
            alt={`${flagCode} flag`}
            className="inline-block rounded shadow-sm pr-2 w-12 h-6"
         />
      );
   };

   return (
      <>
         <div className="flex flex-col w-full">
            <div className="w-full min-h-12 text-center text-lg py-2 text-white font-bold">
               {selectedCountry?.flagCode && (
                  <CountryFlag flagCode={selectedCountry?.flagCode || ''} />
               )}

               {selectedCountry?.name}
            </div>
            <div className="bg-[#f1f3f7] h-full m-4 mt-0 rounded-md p-1 "></div>
         </div>
      </>
   );
};

export default LinksList;
