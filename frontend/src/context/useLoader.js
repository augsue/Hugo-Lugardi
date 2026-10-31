import { createContext, useContext } from "react";

export const LoaderContext = createContext(null);

export const useLoader = () => useContext(LoaderContext);