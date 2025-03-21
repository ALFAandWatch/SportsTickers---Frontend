import axios from 'axios';

export const getLinksService = async (selectedSport: string) => {
   let lowerCaseSport = selectedSport.toLowerCase();
   try {
      const response = await axios.get(
         `http://localhost:7788/links?sport=${lowerCaseSport}`
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
