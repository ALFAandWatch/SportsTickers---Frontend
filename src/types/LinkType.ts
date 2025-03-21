import { CountryType } from './CountryType';

export type LinkType = {
   id: number;
   url: string;
   league: string;
   sport: string;
   countryId: number;
   country: CountryType;
};
