import React, {
  PropsWithChildren,
  createContext,
  useState,
  // useEffect,
} from "react";

import IUser from "../assets/interfaces/IUser";

// interface IUser {
//   email: string;
//   firstName: string;
//   isAdmin: boolean;
//   lastName: string;
//   _id: string;
// }

interface UserContextProps {
  email: string;
  password: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => Promise<void>;
  handleLogout: () => Promise<void>;
  // auth: () => Promise<void>;
  data: IUser;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState<IUser>({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    postCode: "",
    city: "",
    userName: "",
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

      const data = await res.json();
      console.log(data);
      

      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async (): Promise<void> => {
    await fetch("/api/users/logout", {
      method: "POST",
    });
        
    const data: IUser = {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      postCode: "",
      city: "",
      userName: "",
      password: "", 
      isAdmin: false
    };
    setData(data);
  };

  // const auth = async (): Promise<void> => {
  //   const response = await fetch("http://localhost:3000/api/users/authorize");
  //   const data = await response.json();
  //   setData(data);
  // };
  // useEffect(() => {
  //   auth();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        handleLogout,
        // auth,
        data,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
