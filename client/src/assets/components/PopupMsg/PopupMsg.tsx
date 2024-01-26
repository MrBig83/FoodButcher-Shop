import "./PopupMsg.css"
import { UIContext } from "../../../context/UIContext";
import { useContext } from 'react'

function PopupMsg() {

    const { errorMsg, clearErrorMsg } = useContext(UIContext)




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