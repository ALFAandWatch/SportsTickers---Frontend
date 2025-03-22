'use client';

import { useEffect, useState } from 'react';
import { sports } from '@/app/lib/sports';
import { SportType } from '@/types/SportType';
import Image from 'next/image';
import { useSport } from '@/context/SportContext';
import { getLinksService } from '@/services/getLinksService';
import { useLinks } from '@/context/LinkContext';
import Link from 'next/link';

const Navbar = () => {
   const [sportsList, setSportsList] = useState<SportType[]>([]);
   const { selectedSport, setSelectedSport } = useSport();
   const { setLinksList } = useLinks();

   //fetches sports to show on the Navbar. Runs at Mount
   useEffect(() => {
      const fetchSports = () => {
         const allSports = sports;
         setSportsList(allSports);
      };
      fetchSports();
   }, []);

   //Fetches links when the users clicks on a sport button from the Navbar. Runs when selectedSport changes
   useEffect(() => {
      const fetchLinks = async () => {
         const fetchedLinks = await getLinksService(selectedSport);
         setLinksList(fetchedLinks);
      };
      fetchLinks();
   }, [selectedSport]);

   const handleSportSelect = (SportName: string) => {
      setSelectedSport(SportName);
   };

   return (
      <>
         <div className="">
            <h2 className="alumni-sans-pinstripe-regular inline px-3 text-3xl align-middle text-blue-400/60 font-bold">
               SPORT TICKERS
            </h2>
            <ul className="inline-flex">
               {sportsList.map((sport) => (
                  <li key={sport.name} className="text-white text-sm">
                     <button
                        className="hover:cursor-pointer p-3 pr-5 hover:bg-white/7 rounded-md m-2 mx-0"
                        onClick={() => handleSportSelect(sport.name)}
                     >
                        <Image
                           src={`${sport.icon}`}
                           alt={sport.name}
                           width={25}
                           height={25}
                           className="inline mx-1 align-middle font-bold"
                        ></Image>
                        {sport.name}
                     </button>
                  </li>
               ))}
            </ul>
            <Link
               href="/newLinkForm"
               className="hover:cursor-pointer p-4 pt-3 pr-5 text-white bg-blue-400/60 hover:brightness-105 rounded-md"
            >
               +Link
            </Link>
         </div>
      </>
   );
};

export default Navbar;
