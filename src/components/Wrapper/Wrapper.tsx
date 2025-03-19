import { useState } from 'react';
import CountryList from '../CountryList/CountryList';
import LinksList from '../LinksList/LinksList';

const Wrapper = () => {
   return (
      <>
         <div className="w-full h-120 bg-[#313b56] rounded-md flex">
            <CountryList />
            <LinksList />
         </div>
      </>
   );
};

export default Wrapper;
