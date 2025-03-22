'use client';

import { useCountry } from '@/context/CountryContext';
import { useLinks } from '@/context/LinkContext';
import LinkButton from '../LinkButton/LinkButton';
import Image from 'next/image';

const LinksList = () => {
   const { linksList } = useLinks();
   const { selectedCountry } = useCountry();

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
      <>
         <div className="flex flex-col w-full">
            <div className="w-full min-h-12 text-center text-lg py-2 text-white font-bold">
               {selectedCountry?.flagCode && (
                  <CountryFlag flagCode={selectedCountry?.flagCode || ''} />
               )}

               {selectedCountry?.name}
            </div>
            <div className="bg-[#f1f3f7] h-full m-4 mt-0 rounded-md p-4 px-10 ">
               <ul>
                  {selectedCountry ? (
                     linksList.map(
                        (link) =>
                           link.country == selectedCountry && (
                              <li
                                 key={link.id}
                                 className="w-full p-3 m-1 my-3 rounded-md shadow-[0px_2px_10px_rgba(0,0,0,0.25)] hover:bg-gray-200 hover:cursor-pointer"
                              >
                                 <a href={`${link.url}`} target="_blank">
                                    <LinkButton
                                       league={link.league}
                                       url={link.url}
                                    />
                                 </a>
                              </li>
                           )
                     )
                  ) : (
                     <p className="w-full text-center p-3 rounded-md shadow-[0px_2px_10px_rgba(0,0,0,0.25)]">
                        No se encontraron links para este deporte.
                     </p>
                  )}
               </ul>
            </div>
         </div>
      </>
   );
};

export default LinksList;
