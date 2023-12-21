import { createContext, useState, PropsWithChildren, Dispatch, SetStateAction } from "react";
// import IUser from "../assets/interfaces/IUser";
// import IUser from "../assets/interfaces/IUser";

interface UserContextProps {
    //Här har vi ett typiskt interface
    userEmail: string;
    setUserEmail: Dispatch<SetStateAction<string>>;
    password: string;
    setPassword: Dispatch<SetStateAction<string>>;

    
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);
const UserContextProvider = ({ children }: PropsWithChildren<unknown>) => {

  //States
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")
//   const [numberInCart, setNumberInCart] = useState(0);
//   const [productsInCart, setProductsInCart] = useState<IUser[]>([])

  
  //Functions
  
    
    
    
    
    




return (
    <UserContext.Provider
      value={{
        userEmail, 
        setUserEmail, 
        password, 
        setPassword
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;