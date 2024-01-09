import React from 'react'
import "./AdminProductCard.css"
import IProduct from '../../interfaces/IProduct'

const AdminProductCard = ({ product }: { product: IProduct }) => {





  return (
    
    <div className="ProductCard">
        <p className="cardTitle">{product.title}</p>
        <img className="cardImage" src={product.image} alt="" />
        <p className="cardDescription">{product.description}</p>
        <div className="cardBottom">
          <p className="cardPrice">Pris: {product.price}:-</p>
          <p className="cardInstock">Lager: {product.instock}</p>
        </div>
      </div>

    
  )
}

export default AdminProductCard