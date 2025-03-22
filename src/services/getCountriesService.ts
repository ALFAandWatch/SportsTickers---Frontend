import axios from 'axios';

export const getCountriesService = async () => {
   try {
      const response = await axios.get(
         `https://odd-dorthy-alfaandwatch-324c2a9f.koyeb.app/countries`
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
