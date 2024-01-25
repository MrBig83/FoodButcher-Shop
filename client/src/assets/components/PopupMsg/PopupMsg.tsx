import "./PopupMsg.css"
import { UIContext } from "../../../context/UIContext";
import { useContext } from 'react'

function PopupMsg() {

    const { errorMsg, setErrorMsg } = useContext(UIContext)

    setTimeout(() => {
        setErrorMsg("")
      }, 5000);
      setErrorMsg(errorMsg)

    const clearErrorMsg = () => {
        setErrorMsg("")
    }


  return (
      <div className="popupContent">
        <div className="popupText">
          <p>
            {errorMsg}
          </p>
        </div>

        <div className="popupBtn">
            <button onClick={clearErrorMsg}>Stäng</button>

        </div>
    
    </div>
  )
}

export default PopupMsg