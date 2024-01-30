import React, {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import IUser from "../assets/interfaces/IUser";
import IUserData from "../assets/interfaces/IUserData";
import { IOrder } from "../assets/interfaces/IOrderObject";
import { useNavigate  } from "react-router-dom";
import { UIContext } from "./UIContext";



interface UserContextProps {
  email: string;
  password: string;
  verPassword: string;
  setVerPassword: React.Dispatch<SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
  handleCreateAccount: () => Promise<void>;
  updateUserCreds: (userObject: IUserData) => Promise<void>;
  getUser: () => Promise<void>;
  auth: () => Promise<void>;
  loggedInUser: IUser;
  userOrders: IOrder[] | null;
  getUserOrders: (userId:string) => Promise<void>;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserContextProvider = ({ children }: PropsWithChildren) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verPassword, setVerPassword] = useState("");
  const [userOrders, setUserOrders] = useState<IOrder[] | null>(null);
  const [loggedInUser, setLoggedInUser] = useState<IUser>({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    postCode: 0,
    city: "",
    password: "", 
    isAdmin: false
  });

  const navigate = useNavigate();

  const { setErrorMsg } = useContext(UIContext)

  const handleLogin = async (): Promise<void> => {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      const loggedInUser = await res.json();     

      if(loggedInUser == "Wrong username or password") {
        setErrorMsg("Fel användarnamn eller lösenord")
      }
      
      setLoggedInUser(loggedInUser);
      auth();
      if(loggedInUser.email) {
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async (): Promise<void> => {
    // TODO : Använd eller ta bort. 
  }

  const updateUserCreds = async (userObject:IUserData): Promise<void> => {
    // TODO : Popup som bekräftar uppdaterad information
    
    const response = await fetch(`/api/users/update/${loggedInUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        street: userObject.street,
        postCode: userObject.postCode,
        city: userObject.city,
       }), 
    })
    const res = await response.json()
    setLoggedInUser(res)
    setErrorMsg("Uppgifter uppdaterade")
  }

  const handleLogout = async (): Promise<void> => {
    await fetch("/api/users/logout", {
      method: "POST",
    });
        
    const emptyUserTemplate: IUser = {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      postCode: 0,
      city: "",
      // userName: "",
      password: "", 
      isAdmin: false
    };
    setLoggedInUser(emptyUserTemplate);
    setUserOrders([]) 
    navigate('/login');
  };

  const handleCreateAccount = async ():Promise<void> => {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        email: email, 
        password: password,
        firstName: "",
        lastName: "",
        street: "",
        postCode: "",
        city: "",
        isAdmin:false
       }), 
  })
  const res = await response.json()
  if(res == "Email finns redan registrerad"){
    setErrorMsg(res);
  } else {
    setErrorMsg(`Konto ned mailadress ${res.email} skapat!`)
  }
  
  setEmail("")
  setPassword("")
  setVerPassword("")
};
const auth = async (): Promise<void> => {     
  const response = await fetch("/api/users/authorize");
  const loggedInUser = await response.json();  
  setLoggedInUser(loggedInUser);
  getUserOrders(loggedInUser._id)
};
// TODO : Ta bort denna och kontrollera cookies istället. 
useEffect(() => {
  // cookieConsent()
  auth();
}, []);

useEffect(() => {
  // cookieConsent()
  // auth();
}, [loggedInUser]);

const getUserOrders = async (userId:string) => { 
  if(userId){
    const response = await fetch(`api/orders/user/${userId}`);
    const userOrders: IOrder[] = await response.json();
    setUserOrders(userOrders)
  }
};



// const cookieConsent = () => {
//     const checkCookie = (cookieName: string): boolean => {
//       const cookies = document.cookie.split(';');
//       for (const cookie of cookies) {
//         const [name, value] = cookie.trim().split('=');
//         // if (name === cookieName && value === "true") {
//         if (name === cookieName ) {
//           console.log(value);
          
//           // Cookie found
//           return true;
//         }
//       }
//       // Cookie not found 
//       return false;
//     };

//     const isCookieSaved = checkCookie('FBS-Session');

//     if (!isCookieSaved) {
//       console.log('Cookie does not exist.');
//       // setShowCookie(true)
//     } else {
//       console.log('Cookie exist.');
//       // setShowCookie(false)
//     }
//   };


  return (
    <UserContext.Provider
      value={{
        email,
        password,
        verPassword, 
        setVerPassword,
        setEmail,
        setPassword,
        handleLogin,
        handleLogout,
        auth,
        loggedInUser,
        handleCreateAccount,
        getUser,
        updateUserCreds,
        getUserOrders, 
        userOrders, 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
