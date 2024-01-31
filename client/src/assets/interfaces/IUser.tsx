export default interface IUser {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    street: string,
    postCode: number,
    city: string,
    password: string, 
    isAdmin: boolean
  }