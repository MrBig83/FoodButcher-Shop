import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import IProduct from "../../interfaces/IProduct";

const BuyNowBtn = ({ product }: { product: IProduct }) => {
    const { addProduct } = useContext(CartContext);

    const buyNow = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();  
        
        //Kontrollera om produkten redan finns i kundkorgen
        //Om ja: 
        //Addera 1 
        //Om nej: 
        addProduct(product);
    }

    return (
        <button className="btnBuyNow" onClick={buyNow}><p>Köp</p></button>
    );
  };
  export default BuyNowBtn;
