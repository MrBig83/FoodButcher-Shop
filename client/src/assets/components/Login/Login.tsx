import { useContext } from "react"
// import "./PopupStyle.css"
import { UserContext } from "../../../context/UserContext"
import { Link } from "react-router-dom";
import BackBtn from "../Buttons/backBtn";


function Login() {
  
  const { email, setEmail, password, setPassword, handleLogin, handleLogout, loggedInUser, auth } = useContext(UserContext)
  // const { email, setEmail, password, setPassword, handleLogin, handleLogout, loggedInUser, auth } = useContext(UserContext)

 const handleCheckAuth = async () => {
  await auth();
  if (!loggedInUser._id) {
    await handleLogin();
    setEmail("")
    setPassword("")
  } else {
    await handleLogout();
  }
};
  
return (
    <div className="loginPopup">
      <BackBtn />
      <p>Logga in:</p>
      
      
      <div className="popupWindowContent">
      {/* <input type="text" className="userEmail" placeholder="Enter card name" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      <input onChange={(e) => setEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" value={email} />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="password" placeholder="Lösenord" value={password} />
        {loggedInUser._id ? <button onClick={() => handleCheckAuth()}>Logga ut</button> : <button onClick={() => handleCheckAuth()}>Logga in</button>}
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