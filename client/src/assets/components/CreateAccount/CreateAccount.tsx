import "../Login/Login.css"
import BackBtn from "../Buttons/backBtn";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { UIContext } from "../../../context/UIContext";

const CreateAccount = () => {
const { email, setEmail, password, setPassword, handleCreateAccount, setVerPassword, verPassword } = useContext(UserContext);
const { setErrorMsg } = useContext(UIContext)

function processInput() {  
 if(password === verPassword) {  
    handleCreateAccount()
 } else {
  setErrorMsg("Lösenorden måste stämma överens.");
  return;
  
 }
}
  return (
    <div className="accountPage"> 
      <BackBtn />
        <div className="accountForm">
            <input onChange={(e) => setEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" value={email}/>
            <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Önskat lösenord" value={password}/>
            <input onChange={(e) => setVerPassword(e.target.value)} className="verPassword" type="text" placeholder="Önskat lösenord" value={verPassword}/>
            <button onClick={() => processInput()}>Skapa konto</button>
        </div>
    </div>
  );
};
export default CreateAccount;
