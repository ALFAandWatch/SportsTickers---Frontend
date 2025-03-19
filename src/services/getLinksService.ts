import axios from 'axios';

export const getLinksService = async (selectedSport: string) => {
   try {
      const response = await axios.get('/links');
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
