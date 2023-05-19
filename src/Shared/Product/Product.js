import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, AddToCart }) => {
    const { name, seller, price, img, ratingsCount, } = product;
    return (
        <div className='Product '>
            <img src={img} alt="" />
            <div className='product-information'>
                <h5>{name}</h5>
                <p><span className='pricecc'>PRICE:</span> <span className='p-price'> {price}</span></p>
                <div className="ratingss">
                    <p><small>Brand: <span className="cloorrr">{seller}</span></small></p>
                    <p className='mbbotm'><small>Ratings: <span className='cloorrr'>{ratingsCount}</span></small></p>
                </div>
            </div>
            <button onClick={() => AddToCart(product)} className='add-cart'><FontAwesomeIcon className='bars' icon={faCartArrowDown} />Add to Cart</button>
        </div>
    );
};

export default Product; 