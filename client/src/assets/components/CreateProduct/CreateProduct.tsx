// import { Route, Routes } from "react-router";
import "./CreateProduct.css"


import { Link } from "react-router-dom";
import BackBtn from "../Buttons/backBtn";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import IProduct from "../../interfaces/IProduct";

// import { useContext } from "react";




const CreateProduct = () => {
  const { productObject, setProductObject, createProduct, productList } = useContext(ProductContext);

  const handleSaveNewProduct = async (productObject: IProduct) => {
    const newProductId = productList ? productList.length + 1 : 1;
    productObject.id = newProductId;
    setProductObject(productObject)
    createProduct(productObject)    
  };

  const clearForm = () => {
    setProductObject({ ...productObject, 
      id: 0, 
      title: "",
      description: "",
      usage: "", 
      suits: "", 
      ingredients: "", 
      nutritions: "", 
      price: 0,
      image: "",
      instock: 0,
      quantity: ""
    });
    console.log(productObject);
    
  }

  

  return (
    <>
      <Link to={`/`}>
      <BackBtn />
    </Link>       
      <div className="CreateProductPage"> 
        <div className="CreateProductForm">
            <input onChange={(e) => productObject!.title = e.target.value} className="title" type="text" placeholder="Titel" /> 
            <input onChange={(e) => productObject!.description = e.target.value} className="description" type="text" placeholder="Beskrivning" /> 
            <input onChange={(e) => productObject!.usage = e.target.value} className="usage" type="text" placeholder="Användning" /> 
            <input onChange={(e) => productObject!.suits = e.target.value} className="suits" type="text" placeholder="Passar till" /> 
            <input onChange={(e) => productObject!.ingredients = e.target.value} className="ingredients" type="text" placeholder="Ingredienser" /> 
            <input onChange={(e) => productObject!.nutritions = e.target.value} className="nutritions" type="text" placeholder="Näringsinnehåll" /> 
            <input
              onChange={(e) => {
                const value = parseFloat(e.target.value); 
                productObject!.price = isNaN(value) ? 0 : value;
              }}
              className="price"
              placeholder="Pris"
              type="number"
            />
            <input onChange={(e) => productObject!.image = e.target.value} className="image" type="text" placeholder="Bild URL" /> 
            <input
              onChange={(e) => {
                const valueInStock = parseFloat(e.target.value);
                productObject!.price = isNaN(valueInStock) ? 0 : valueInStock;
              }}
              className="instock"
              placeholder="Antal i lager"
              type="number"
            />
            

            <button onClick={() => handleSaveNewProduct(productObject!)}>Skapa produkt</button>
            <button onClick={() => clearForm()}>Rensa</button>
            
        </div>
    </div>
    </>

    
  );
};
export default CreateProduct;
