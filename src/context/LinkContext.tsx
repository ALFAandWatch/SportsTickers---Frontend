import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LinkType } from '@/types/LinkType'; // Assuming you have a Link type

// Define the context type
interface LinksContextType {
   linksList: LinkType[]; // Array of links
   setLinksList: React.Dispatch<React.SetStateAction<LinkType[]>>; // Function to update the links
}

// Create the context with default values
const LinksContext = createContext<LinksContextType | undefined>(undefined);

interface LinksProviderProps {
   children: ReactNode; // Allow any React element as children
}

// Create a provider component
export const LinksProvider: React.FC<LinksProviderProps> = ({ children }) => {
   const [linksList, setLinksList] = useState<LinkType[]>([]); // State for storing the list of links

   return (
      <LinksContext.Provider value={{ linksList, setLinksList }}>
         {children}
      </LinksContext.Provider>
   );
};

// Custom hook to use the LinksContext
export const useLinks = () => {
   const context = useContext(LinksContext);
   if (!context) {
      throw new Error('useLinks must be used within a LinksProvider');
   }
   return context;
};
