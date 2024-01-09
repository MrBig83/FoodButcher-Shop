import { useContext, useEffect } from 'react'
import IProduct from '../../../interfaces/IProduct';
import { Link, useParams } from 'react-router-dom';
import NakedBackBtn from '../../Buttons/nakedBackBtn';
import { ProductContext } from '../../../../context/ProductContext';
import "./AdminSingleProduct.css"

const AdminSingleProduct = () => {
    const { id } = useParams();

    const { updateObject, setUpdateObject, updateProduct } = useContext(ProductContext);

    const handleUpdateProduct = async (updateObject: IProduct) => {
        setUpdateObject(updateObject)
        await updateProduct(updateObject)
      };

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
      
        let inputValue: string | number | boolean = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
      
        if (type === 'number' && !isNaN(parseFloat(value))) {
          inputValue = parseFloat(value);
        }
      
        setUpdateObject({  
          ...updateObject,
          [name]: inputValue,
        });
      };
  

  useEffect(() => {
       
    const fetchProduct = async () => {
        const response = await fetch(`/api/products/${id}`);
        const productData = await response.json();
        console.log(productData);
        
        setUpdateObject(productData);
        // setProduct(productData);
    };
    fetchProduct();
}, []);
  
  
    return (
        <>
    <Link to={'/Admin'}>
        <NakedBackBtn />
    </Link>
      <div className="AdminSingleProduct">
        <p>{updateObject._id}</p>
        <p>{updateObject.id}</p>
        <p>Titel:</p>
      <input
          onChange={handleInputChange}
          value={updateObject.title}
          name="title"
          className="adminProductCardTitle"
          type="text"
          placeholder="Titel"
        />
        <img className="adminSingleProductImage" src={updateObject.image} alt="" />
        <p>Bild URL:</p>
        <input
        onChange={handleInputChange}
        value={updateObject.image}
        name="image"
        className="imgUrl"
        type="text"
        placeholder="Bild URL"
        />
        <p>Beskrivning:</p>
        <textarea
          onChange={handleInputChange}
          value={updateObject.description}
          name="description"
          className="description"
          placeholder="Beskrivning"
        />
        <p>Användning:</p>
        <textarea
          onChange={handleInputChange}
          value={updateObject.usage}
          name="usage"
          className="usage"
          placeholder="Använding"
        />
        <p>Passar till: </p>
        <input
          onChange={handleInputChange}
          value={updateObject.suits}
          name="suits"
          className="suits"
          type="text"
          placeholder="Passar till"
        />
        <p>Ingredienser:</p>
        <textarea
          onChange={handleInputChange}
          value={updateObject.ingredients}
          name="ingredients"
          className="ingredients"
          placeholder="Ingredienser"
        />
        <p>Näringsinnehåll:</p>
        <textarea
          onChange={handleInputChange}
          value={updateObject.nutritions}
          name="nutritions"
          className="nutritions"
          placeholder="Näringsinnehåll"
        />
        <p>Pris:</p>
        <input
          onChange={handleInputChange}
          value={updateObject.price}
          name="price"
          className="price"
          type="number"
          placeholder="Pris"
        />
        <p>Antal i lager:</p>
        <input
          onChange={handleInputChange}
          value={updateObject.instock}
          name="instock"
          className="instock"
          type="number"
          placeholder="Antal i lager"
        />
<div className='adminDeletedCheckbox'>
  <input
    onChange={handleInputChange}
    checked={updateObject.deleted} // Assuming deleted is a boolean in updateObject
    type="checkbox"
    id="deleted"
    name="deleted"
  />
  <label htmlFor="deleted">Dölj produkt</label>
</div>
        
        <button onClick={() => handleUpdateProduct(updateObject)}>Uppdatera produkt</button>

      </div>
      </>
  )
}

export default AdminSingleProduct