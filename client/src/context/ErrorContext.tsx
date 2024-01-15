// Import the necessary dependencies
import { PropsWithChildren, createContext, useEffect, useState } from "react";


// import { UserContext } from "../context/UserContext";
// import IUser from "../assets/interfaces/IUser";


interface ErrorContextProps {
  errorMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  showError: (errorMsg: string) => void

}

export const ErrorContext = createContext<ErrorContextProps>({} as ErrorContextProps);

const ErrorContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  //Import from other contexts
  // const { setNumberInCart, setProductsInCart } = useContext(CartContext);
  // const { getProducts } = useContext(ProductContext);
  

  
  // States
  const [errorMsg, setErrorMsg] = useState("");
  

  // Functions
  const showError = (errorMsg: string) => {
    setTimeout(() => {
      setErrorMsg("")
    }, 5000);
    setErrorMsg(errorMsg)

  }
const msg = ""

useEffect(()=> {
  showError(msg)
}, [])
  // const getCurrentOrder = async () => {
    

  // };

  
  return (
    <ErrorContext.Provider
      value={{
        errorMsg, 
        setErrorMsg, 
        showError

        
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
