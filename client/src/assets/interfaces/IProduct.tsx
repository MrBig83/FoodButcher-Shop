export default interface IProduct {
    _id:string,
    id: number, 
    title: string,
    description: string,
    usage: string, 
    suits: string, 
    ingredients: string, 
    nutritions: string, 
    price: number,
    image: string,
    instock: number,
    quantity: number, 
    deleted: boolean
  }