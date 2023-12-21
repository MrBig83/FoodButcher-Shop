// // import { Route, Routes } from "react-router";

// import "./Login.css";
// import { UserContext } from "../../../context/UserContext";
// import { useContext } from "react";

// const Login: React.FC = () => {

//     const { userEmail, setUserEmail, password, setPassword } = useContext(UserContext);
    
//  function logga(userEmail: string, password: string) {
//     console.log(userEmail);
//     console.log(password);
    
    
//  }


//     return (
//         <div className="Login">
  
//             <h1>Login</h1>
//             <div className="loginForm">
//                 <input className="inpName" type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
//                 <input className="inpPassword" type="text" onChange={(e) => setPassword(e.target.value)}/>
//                 <div>
//                     <button onClick={() => logga(userEmail, password)}>Logga in</button>
//                     <button>Skapa konto</button>
//                 </div>

//             </div>
//         </div>
//     );
//   };
//   export default Login;
  
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update userEmail state when the input changes
    setUserEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Update userEmail state when the input changes
    setPassword(event.target.value);
  };

const logga = (userEmail:string, password:string) => {
    console.log(userEmail);
    console.log(password);
    
    
}

  return (
    <div>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={userEmail}
          onChange={handleEmailChange}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <div>
            <button onClick={() => logga(userEmail, password)}>Logga in</button>
            <button>Skapa konto</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
