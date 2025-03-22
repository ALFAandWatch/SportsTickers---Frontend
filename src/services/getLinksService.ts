import axios from 'axios';

export const getLinksService = async (selectedSport: string) => {
   const lowerCaseSport = selectedSport.toLowerCase();
   try {
      const response = await axios.get(
         `odd-dorthy-alfaandwatch-324c2a9f.koyeb.app/links?sport=${lowerCaseSport}`
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
