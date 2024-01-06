import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import BackBtn from '../Buttons/backBtn';
import IProduct from '../../interfaces/IProduct';
import { ProductContext } from '../../../context/ProductContext';


  const CreateProduct = () => {
    
    // const initialFormState = {
    //   id: 0, 
    //   title: "",
    //   description: "",
    //   usage: "", 
    //   suits: "", 
    //   ingredients: "", 
    //   nutritions: "", 
    //   price: 0,
    //   image: "",
    //   instock: 0,
    //   quantity: ""
    // };

      const { productObject, setProductObject, createProduct, productList, initialFormState  } = useContext(ProductContext);

  const handleSaveNewProduct = async (productObject: IProduct) => {
    const newProductId = productList ? productList.length + 1 : 1;
    productObject.id = newProductId;
    setProductObject(productObject)
    createProduct(productObject) 
    handleClearForm()   
  };

  const history = useHistory();


  
    // const [productObject, setProductObject] = useState(initialFormState);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type } = e.target;
      setProductObject({
        ...productObject,
        [name]: type === 'number' ? parseFloat(value) : value,
      });
    };
  
    const handleClearForm = () => {
      setProductObject(initialFormState);
    };
  
    return (
      <>
          <BackBtn />
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
          value={productObject?.price}
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
          value={productObject?.instock}
          name="instock"
          className="instock"
          type="number"
          placeholder="Antal i lager"
        />
        <button onClick={() => handleSaveNewProduct(productObject)}>Skapa produkt</button>
        <button onClick={handleClearForm}>Clear Form</button>
      </div>
      </div>
      </>
    );
  };
  
export default CreateProduct;
