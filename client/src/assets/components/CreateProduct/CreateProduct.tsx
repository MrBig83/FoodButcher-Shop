// import { Route, Routes } from "react-router";
import "./CreateProduct.css"


import { Link } from "react-router-dom";
import BackBtn from "../Buttons/backBtn";

// import { useContext } from "react";




const CreateProduct = () => {
//   const { productList } = useContext(ProductContext);
  

  return (
    <>
      <Link to={`/`}>
      <BackBtn />
    </Link>       
        <div className="CreateProductPage"> 
        <div className="CreateProductForm">
            <input type="text" placeholder="Titel"/>
            <input type="text" placeholder="Beskrivning"/>
            <input type="text" placeholder="Användning"/>
            <input type="text" placeholder="Passar till"/>
            <input type="text" placeholder="Ingredienser"/>
            <input type="text" placeholder="Näringsinnehåll"/>
            <input type="number" placeholder="Pris"/>
            <input type="text" placeholder="Bld URL"/>
            <input type="number" placeholder="Antal i lager"/>
            <button>Skapa produkt</button>

        </div>
    </div>
    </>

    
  );
};
export default CreateProduct;
