import { ILinkDto } from '@/app/Dtos/LinkDto';
import axios from 'axios';

export const addLinkService = async (data: ILinkDto) => {
   try {
      const response = await axios.post(
         `odd-dorthy-alfaandwatch-324c2a9f.koyeb.app/links`,
         data
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
