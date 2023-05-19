// import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const AddToCart = (SelectedProduct) => {
        // console.log(SelectedProduct);

        let newCart = [];
        const exists = cart.find(product => product.id === SelectedProduct.id)
        if (!exists) {
            SelectedProduct.quantity = +1;
            newCart = [...cart, SelectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== SelectedProduct.id)
            exists.quantity = exists.quantity + !1;
            newCart = [...rest, exists];
        }
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <div className=' shop-main container'>
            <div className="shop-container ">
                <div className="product-container">
                    {products.map(product => <Product
                        key={product.id}
                        product={product}
                        AddToCart={AddToCart}
                    ></Product>)}

                </div>
                <div className="Cart-section">
                    <Cart
                        cart={cart}
                        clearCart={clearCart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default Shop;