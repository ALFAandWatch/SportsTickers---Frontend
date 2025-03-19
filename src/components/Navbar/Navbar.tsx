'use client';

import { useEffect, useState } from 'react';
import { sports } from '@/app/lib/sports';
import { SportType } from '@/types/SportType';
import Image from 'next/image';
import { useSport } from '@/context/SportContext';
import { LinkType } from '@/types/LinkType';
import { getLinksService } from '@/services/getLinksService';
import { useLinks } from '@/context/LinkContext';

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
         <div className="mb-5">
            <h2 className="inline px-3 text-xl">SPORTS TICKERS</h2>
            <ul className="inline-flex">
               {sportsList.map((sport) => (
                  <li key={sport.name} className="text-white px-3 text-xl">
                     <button
                        className="hover:cursor-pointer hover:text-blue-300"
                        onClick={() => handleSportSelect(sport.name)}
                     >
                        <Image
                           src={`${sport.icon}`}
                           alt={sport.name}
                           width={20}
                           height={20}
                           className="inline"
                        ></Image>
                        {sport.name}
                     </button>
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
};

export default Navbar;
