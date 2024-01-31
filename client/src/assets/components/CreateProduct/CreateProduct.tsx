import React, { useContext } from 'react';
import IProduct from '../../interfaces/IProduct';
import { ProductContext } from '../../../context/ProductContext';
// import { UIContext } from '../../../context/UIContext';
import "./CreateProduct.css"


  const CreateProduct = () => {
    
      const { productObject, setProductObject, createProduct, productList, initialFormState, getProducts, adminGetProducts  } = useContext(ProductContext);
      // const { setErrorMsg } = useContext(UIContext)
      const handleSaveNewProduct = async (productObject: IProduct) => {
        const newProductId = productList ? productList.length + 1 : 1;
        productObject.id = newProductId;
        setProductObject(productObject)
        createProduct(productObject) 
        handleClearForm()  
        adminGetProducts
        getProducts();         
        setTimeout(() => {
          window.location.href = "/Admin";
        }, 2500);
      };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type } = e.target;
    
      setProductObject((prevProductObject) => ({
        ...prevProductObject,
        [name]: type === 'number' ? (value === '' ? undefined : parseFloat(value)) : value,
      }));
    };
  
    const handleClearForm = () => {
      setProductObject(initialFormState);
    };
  
    return (          
      <div className="CreateProductPage"> 
        <div className="CreateProductForm">
        
        <input
          onChange={handleInputChange}
          value={productObject?.title}
          name="title"
          className="title"
          type="text"
          placeholder="Titel"
          />
          
        <input
          onChange={handleInputChange}
          value={productObject?.description}
          name="description"
          className="description"
          type="text"
          placeholder="Beskrivning"
        />
        <input
          onChange={handleInputChange}
          value={productObject?.usage}
          name="usage"
          className="usage"
          type="text"
          placeholder="Använding"
        />
        <input
          onChange={handleInputChange}
          value={productObject?.suits}
          name="suits"
          className="suits"
          type="text"
          placeholder="Passar till"
        />
        <input
          onChange={handleInputChange}
          value={productObject?.ingredients}
          name="ingredients"
          className="ingredients"
          type="text"
          placeholder="Ingredienser"
        />
        <input
          onChange={handleInputChange}
          value={productObject?.nutritions}
          name="nutritions"
          className="nutritions"
          type="text"
          placeholder="Näringsinnehåll"
        />
        <input
          onChange={handleInputChange}
          value={productObject?.price !== 0 ? productObject?.price : ''}
          name="price"
          className="price"
          type="number"
          placeholder="Pris"
        />
        <input
          onChange={handleInputChange}
          value={productObject?.image}
          name="image"
          className="image"
          type="text"
          placeholder="Bild URL"
        />
        <input
          onChange={handleInputChange}
          value={productObject?.instock !== 0 ? productObject?.instock : ''}
          name="instock"
          className="instock"
          type="number"
          placeholder="Antal i lager"
        />
        <button onClick={() => handleSaveNewProduct(productObject)}>Skapa produkt</button>
        <button onClick={handleClearForm}>Rensa formulär</button>
      </div>
      </div>
      
    );
  };
  
export default CreateProduct;
