import { useContext, useState } from "react"
import "./Login.css"
import { UserContext } from "../../../context/UserContext"
// import { ErrorContext } from "../../../context/ErrorContext"
import { Link } from "react-router-dom";
import BackBtn from "../Buttons/backBtn";


function Login() {
  
  const { email, setEmail, password, setPassword, handleLogin, handleLogout, loggedInUser, auth } = useContext(UserContext)
  const [error, setError] = useState("");
  // const { showError } = useContext(ErrorContext)

 const handleCheckAuth = async () => {

  if (!email || !password) {
    setError("Both email and password are required.");
    return;
  }
  
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
    <div className="accountPage">
      <BackBtn />
      
      <div className="accountForm">
        <p>Logga in:</p>
        <input onChange={(e) => setEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" value={email} />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="password" placeholder="Lösenord" value={password} />
        {error && <p className="error-message">{error}</p>}
        {loggedInUser._id ? <button onClick={() => handleCheckAuth()}>Logga ut</button> : <button onClick={() => handleCheckAuth()}>Logga in</button>}
      </div>

        <div className="loginCreateAccount">      
          <p>Eller skapa konto:</p>
          <Link to={"/createaccount"}>
            <button>Skapa konto</button>
          </Link>
        </div>
    </div>
  )
}

export default Login