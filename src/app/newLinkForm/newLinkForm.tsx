'use client';

import { addLinkService } from '@/services/addNewLinkService';
import { getCountriesService } from '@/services/getCountriesService';
import { CountryType } from '@/types/CountryType';
import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { SportType } from '@/types/SportType';
import { sports } from '../lib/sports';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const newLinkForm = () => {
   const [allCountries, setAllCountries] = useState<CountryType[]>([]);
   const [sportsList, setSportsList] = useState<SportType[]>([]);
   const router = useRouter();

   useEffect(() => {
      const fetchCountries = async () => {
         const fetchedCountries = await getCountriesService();
         setAllCountries(fetchedCountries);
      };
      fetchCountries();
   }, []);

   useEffect(() => {
      const fetchSports = () => {
         const allSports = sports;
         setSportsList(allSports);
      };
      fetchSports();
   }, []);

   const handleValidate = (values: {
      url: string;
      league: string;
      sport?: string;
   }) => {
      const errors: Record<string, string> = {};

      if (!values.url.trim()) {
         errors.url = 'URL is required';
      }
      if (!values.league.trim()) {
         errors.league = 'League is required';
      }
      if (!values.sport) {
         errors.sport = 'Sport is required';
      }

      return errors;
   };

   const handleSubmit = async (values: {
      url: string;
      league: string;
      sport: string;
      countryId: number;
   }) => {
      const newLink = await addLinkService(values);
      console.log(newLink);
      Swal.fire({
         title: 'Exito!',
         text: `${newLink.message}`,
         icon: 'success',
         confirmButtonText: 'OK',
      }).then((result) => {
         if (result.isConfirmed) {
            router.push('/');
         }
      });
   };

   return (
      <>
         <div className="w-100 h-fit mx-auto mt-20 bg-[#f1f3f7] rounded-md p-10 text-center">
            <div className="m-2  rounded-md p-1">
               <h2 className="text-2xl mb-1">Nuevo Link</h2>
               <p className="my-2">
                  Agrega la información del nuevo link. (Todos los campos son
                  obligatorios)
               </p>
            </div>
            <hr />
            <Formik
               initialValues={{ url: '', league: '', sport: '', countryId: 0 }}
               onSubmit={handleSubmit}
               validate={handleValidate}
            >
               {({ errors, touched }) => (
                  <Form className="flex flex-col">
                     <label className="m-2 text-center" htmlFor="url">
                        URL:
                     </label>
                     <Field
                        className="m-2 shadow-[0px_2px_10px_rgba(0,0,0,0.25)] rounded-md p-1"
                        id="url"
                        name="url"
                     />
                     {touched.url && errors.url && (
                        <div className="w-40 p-1 mx-auto text-center text-white shadow-[0px_2px_10px_rgba(251,44,54,0.25)] rounded-md bg-red-600/70 text-sm">
                           {errors.url}
                        </div>
                     )}

                     <label className="m-2 text-center" htmlFor="league">
                        Liga:
                     </label>
                     <Field
                        className="m-2 shadow-[0px_2px_10px_rgba(0,0,0,0.25)] rounded-md p-1"
                        id="league"
                        name="league"
                     />
                     {touched.league && errors.league && (
                        <div className="w-40 p-1 mx-auto text-center text-white shadow-[0px_2px_10px_rgba(251,44,54,0.25)] rounded-md bg-red-600/70 text-sm">
                           {errors.league}
                        </div>
                     )}

                     <label className="m-2 text-center" htmlFor="sport">
                        Deporte:
                     </label>
                     <Field
                        className="m-2 shadow-[0px_2px_10px_rgba(0,0,0,0.25)] rounded-md p-1 hover:cursor-pointer"
                        id="sport"
                        name="sport"
                        as="select"
                     >
                        {sportsList.map((sport) => (
                           <option
                              key={sport.name}
                              value={sport.name.toLowerCase()}
                           >
                              {sport.name}
                           </option>
                        ))}
                     </Field>

                     <label className="m-2 text-center" htmlFor="countryId">
                        País:
                     </label>
                     <Field
                        className="m-2 shadow-[0px_2px_10px_rgba(0,0,0,0.25)] rounded-md p-1 hover:cursor-pointer"
                        id="countryId"
                        name="countryId"
                        as="select"
                     >
                        {allCountries.map((country) => (
                           <option key={country.id} value={country.id}>
                              {country.name}
                           </option>
                        ))}
                     </Field>
                     <button
                        className="m-2 mt-8 p-2 shadow-[0px_2px_10px_rgba(0,0,0,0.25)] hover:cursor-pointer bg-blue-500 rounded-md text-white hover:brightness-115"
                        type="submit"
                     >
                        Agregar
                     </button>
                  </Form>
               )}
            </Formik>
         </div>
         <div className="mx-auto mt-8 mb-25 p-2 w-25 shadow-[0px_2px_10px_rgba(0,0,0,0.25)] hover:cursor-pointer bg-gray-500 rounded-md text-white hover:brightness-115 text-center">
            <Link href="/">Volver</Link>
         </div>
      </>
   );
};

export default newLinkForm;
