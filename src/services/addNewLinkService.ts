import { ILinkDto } from '@/app/Dtos/LinkDto';
import axios from 'axios';

export const addLinkService = async (data: ILinkDto) => {
   try {
      const response = await axios.post(`http://localhost:7788/links`, data);
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
