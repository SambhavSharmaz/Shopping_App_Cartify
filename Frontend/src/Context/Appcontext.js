import { createContext,useContext } from "react";

const AppContext = createContext(); 

const useAppcontext = () => {
    return useContext(AppContext);
}

export {AppContext,useAppcontext}
