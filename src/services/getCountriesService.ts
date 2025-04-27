import axios from 'axios';

export const getCountriesService = async () => {
   try {
      const response = await axios.get(
         `https://sportstickers-backend.onrender.com/countries`
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
