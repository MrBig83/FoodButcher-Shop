export default interface IUser {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    street: string,
    postCode: string,
    city: string,
    // userName: string,
    password: string, 
    isAdmin: boolean
  }