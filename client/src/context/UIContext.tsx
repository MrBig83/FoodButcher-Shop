// Import the necessary dependencies
import { PropsWithChildren, createContext, useState } from "react";


// import { UserContext } from "../context/UserContext";
// import IUser from "../assets/interfaces/IUser";


interface UIContextProps {
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  // showError: (errorMsg: string) => void;
  isMenuVisible: boolean;
  setIsMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenuVisibility: () => void;
  clearErrorMsg: () => void;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

const UIContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  //Import from other contexts
  // const { setNumberInCart, setProductsInCart } = useContext(CartContext);
  // const { getProducts } = useContext(ProductContext);
  

  
  // States
  const [errorMsg, setErrorMsg] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  // Functions
  setTimeout(() => {
    setErrorMsg("")
  }, 5000);
  // setErrorMsg(errorMsg)

const clearErrorMsg = () => {
    setErrorMsg("")
}

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // const showError = (errorMsg: string) => {
    
  // }
// const msg = "Detta är msg"

// useEffect(()=> {
//   showError(msg)
// }, [])
  // const getCurrentOrder = async () => {
    

  // };

  
  return (
    <UIContext.Provider
      value={{
        errorMsg, 
        setErrorMsg, 
        // showError, 
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
