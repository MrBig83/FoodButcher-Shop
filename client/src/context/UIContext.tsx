import { PropsWithChildren, createContext, useState } from "react";

interface UIContextProps {
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenuVisibility: () => void;
  clearErrorMsg: () => void;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

const UIContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  //Import from other contexts
  
  // States
  const [errorMsg, setErrorMsg] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  // Functions
  setTimeout(() => {
    setErrorMsg("")
  }, 5000);
  

const clearErrorMsg = () => {
    setErrorMsg("")
}

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  
  return (
    <UIContext.Provider
      value={{
        errorMsg, 
        setErrorMsg, 
        toggleMenuVisibility, 
        isMenuVisible, 
        setIsMenuVisible, 
        clearErrorMsg

        
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
