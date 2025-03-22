import CountryList from '../CountryList/CountryList';
import LinksList from '../LinksList/LinksList';

const Wrapper = () => {
   return (
      <>
         <div className="w-full h-120 bg-blue-400/15 rounded-md flex">
            <CountryList />
            <LinksList />
         </div>
      </>
   );
};

export default Wrapper;
