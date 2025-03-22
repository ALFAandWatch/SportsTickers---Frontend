import axios from 'axios';

export const getCountriesService = async () => {
   try {
      const response = await axios.get(
         `postgresql://postgres:AjySuErTVNdSI5XJ@db.artrohzjovrnasjczoxx.supabase.co:5432/postgres/countries`
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
