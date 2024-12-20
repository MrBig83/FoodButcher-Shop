import BuyNowBtn from "../Buttons/buyNowBtn";
import IProduct from "../../interfaces/IProduct";
import "./ProductCard.css"

const ProductCard = ({ product }: { product: IProduct }) => {
let lager = ""

  if (product.instock < 1) {
    lager = "Slut i lager"
  } else if (product.instock < 5) {
    lager = "Få i lager"
  }
  if (product.instock >= 5) {
    lager = "Finns i lager"
  }

  return (
    <div className="ProductCard">
        <p className="cardTitle">{product.title}</p>
        <img className="cardImage" src={product.image} alt="" />
        <p className="cardDescription">{product.description}</p>
        <div className="cardBottom">
          <p className="cardPrice">{product.price}:-</p>
          <p className="cardInstock">{lager}</p>
          <BuyNowBtn product={product}/>
        </div>
      </div>
  );
};
export default ProductCard;
