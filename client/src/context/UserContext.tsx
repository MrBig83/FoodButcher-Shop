import React, {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

import IUser from "../assets/interfaces/IUser";
import IUserData from "../assets/interfaces/IUserData";
import { IOrder } from "../assets/interfaces/IOrderObject";


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
  getUserOrders: (userId:string) => Promise<void>

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
    postCode: "",
    city: "",
    // userName: "",
    password: "", 
    isAdmin: false
  });

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

      setLoggedInUser(loggedInUser);
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async (): Promise<void> => {
    // TODO : Använd eller ta bort. 
  }

  const updateUserCreds = async (userObject:IUserData): Promise<void> => {
    console.log(userObject);
    
    await fetch(`/api/users/update/${loggedInUser._id}`, {
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
        // isAdmin:false
       }), 
  })
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
      postCode: "",
      city: "",
      // userName: "",
      password: "", 
      isAdmin: false
    };
    setLoggedInUser(emptyUserTemplate);
  };

  const handleCreateAccount = async ():Promise<void> => {
    await fetch("/api/users", {
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
        // userName: "",
        isAdmin:false
       }), 
  })
  setEmail("")
  setPassword("")
  setVerPassword("")
};

const getUserOrders = async (userId:string) => { 
  const response = await fetch(`api/orders/user/${userId}`);
  const userOrders: IOrder[] = await response.json();
  console.log(userOrders); 
  setUserOrders(userOrders)
};
useEffect(() => {
  // Code to run on mount
  
  
  getUserOrders(loggedInUser._id)

  // Return a cleanup function to be executed on unmount
  // return () => {
  //   console.log('Component will unmount');
  //   // Code to run on unmount
  // };
}, []);

  const auth = async (): Promise<void> => {    
    console.log("Auth");
    
    const response = await fetch("/api/users/authorize");
    const loggedInUser = await response.json();
    setLoggedInUser(loggedInUser);
  };
  useEffect(() => {
    auth();
  }, []);

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
        userOrders

      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
