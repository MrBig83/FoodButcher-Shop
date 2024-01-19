import React, { useContext } from 'react'
import { UserContext } from '../../../../context/UserContext';
import IUserData from '../../../interfaces/IUserData';

function UpdateUser() {
    const { updateUserCreds, loggedInUser } = useContext(UserContext);  

    const userObject: IUserData = {
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        street: loggedInUser.street,
        postCode: loggedInUser.postCode,
        city: loggedInUser.city,
    }

    const handleSaveCreds = async (userObject: IUserData) => {
        await updateUserCreds(userObject)
    };

  return (
    
    <div id="updateCredForm">
        <p>Uppdatera kontoinformation</p>
        <input type="text" placeholder="Förnamn" defaultValue={userObject.firstName} onChange={(e) => userObject.firstName = e.target.value} />
        <input type="text" placeholder="Efternamn" defaultValue={userObject.lastName} onChange={(e) => userObject.lastName = e.target.value} />
        <input type="text" placeholder="Gatuadress" defaultValue={userObject.street} onChange={(e) => userObject.street = e.target.value} />
        <input type="text" placeholder="Postnummer" defaultValue={userObject.postCode} onChange={(e) => userObject.postCode = parseInt(e.target.value)} />
        <input type="text" placeholder="Ort" defaultValue={userObject.city} onChange={(e) => userObject.city = e.target.value} />
        <button onClick={() => handleSaveCreds(userObject)}>Spara</button>
    </div>
    
  )
}

export default UpdateUser