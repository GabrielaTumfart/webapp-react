import { createContext, useContext, useState } from "react";

// creo il context
const LoaderContext = createContext();

// creo il provider
const LoaderContextProvider = ({ children }) => {
  // stato per gestire il loader
  const [isLoading, setIsLoading] = useState(false);

  // funzione per avviare il loader
  const startLoading = () => setIsLoading(true);

  // funzione per fermare il loader
  const endLoading = () => setIsLoading(false);

  // valore del context
  const value = { isLoading, startLoading, endLoading };

  return (
    <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>
  );
};

// hook per usare il context
const useLoaderContext = () => {
  return useContext(LoaderContext);
};

export { useLoaderContext, LoaderContextProvider };
