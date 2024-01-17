import "../Login/Login.css"
import BackBtn from "../Buttons/backBtn";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const CreateAccount = () => {
const { email, setEmail, password, setPassword, handleCreateAccount, setVerPassword, verPassword } = useContext(UserContext);

function processInput() {  
 if(password === verPassword) {  
    handleCreateAccount()
 } else {
  // TODO : Popup som varnar om att lösenorden inte stämmer
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
