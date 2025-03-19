import { useLinks } from '@/context/LinkContext';

const LinksList = () => {
   const { linksList } = useLinks();

   return (
      <>
         <div className="bg-[#f1f3f7] rounded-md w-4/6 p-6 mx-4 mt-10 mb-4 ">
            {linksList.map((link) => (
               <div key={link.id}>
                  {`${link.league} `}
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                     {link.url}
                  </a>
               </div>
            ))}
         </div>
      </>
   );
};

export default LinksList;
