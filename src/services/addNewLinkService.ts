import { ILinkDto } from '@/app/Dtos/LinkDto';
import axios from 'axios';

export const addLinkService = async (data: ILinkDto) => {
   try {
      const response = await axios.post(
         `postgresql://postgres:AjySuErTVNdSI5XJ@db.artrohzjovrnasjczoxx.supabase.co:5432/postgres/links`,
         data
      );
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
