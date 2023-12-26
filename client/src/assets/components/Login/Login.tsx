import { useContext } from "react"
// import "./PopupStyle.css"
import { UserContext } from "../../../context/UserContext"
import { Link } from "react-router-dom";


function Login() {
  const { email, setEmail, password, setPassword, handleLogin, handleLogout, data } = useContext(UserContext)
  // const { email, setEmail, password, setPassword, handleLogin, handleLogout, data, auth } = useContext(UserContext)

 const handleCheckAuth = async () => {
  // await auth();
  if (!data._id) {
    await handleLogin();
  } else {
    await handleLogout();
  }
};
  
return (
    <div className="loginPopup">
      <p>Logga in:</p>
      
      
      <div className="popupWindowContent">
      {/* <input type="text" className="userEmail" placeholder="Enter card name" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      <input onChange={(e) => setEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" value={email} />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Lösenord" value={password} />
        {data._id ? <button onClick={() => handleCheckAuth()}>Logga ut</button> : <button onClick={() => handleCheckAuth()}>Logga in</button>}
        {/* <button onClick={() => handleLogin()}>Logga in</button>
        <button onClick={() => handleLogout()}>Logga ut</button> */}
        
        
        <p>Eller skapa konto nedan:</p>
        <Link to={"/createaccount"}>
          Skapa konto
        </Link>
        </div>
    </div>
  )
}

export default Login