import axios from 'axios';

export const getLinksService = async (selectedSport: string) => {
   const lowerCaseSport = selectedSport.toLowerCase();
   try {
      const response = await axios.get(
         `postgresql://postgres:AjySuErTVNdSI5XJ@db.artrohzjovrnasjczoxx.supabase.co:5432/postgres/links?sport=${lowerCaseSport}`
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
