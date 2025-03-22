type LinkButtonProps = {
   league: string;
   url: string;
};

const LinkButton = (props: LinkButtonProps) => {
   const { league, url } = props;

   return (
      <>
         <h2 className="m-1 ml-6 text-blue-600 font-bold text-xl">{league}</h2>
         <p className="m-1 ml-6 text-gray-500 font-light italic text-sm">
            {url}
         </p>
      </>
   );
};

export default LinkButton;
