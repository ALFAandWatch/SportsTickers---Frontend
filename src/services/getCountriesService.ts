import axios from 'axios';

export const getCountriesService = async () => {
   try {
      const response = await axios.get(`http://localhost:7788/countries`);
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
