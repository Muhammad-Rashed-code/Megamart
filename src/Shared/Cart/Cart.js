import { faArrowRightLong, faCartArrowDown, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, clearCart } = props;
    // console.log(cart.length);
    let total = 0;
    let quantity = 0;
    let shipingCarge = 0;
    for (const product of cart) {

        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipingCarge = shipingCarge + product.shipping;
    }
    const tax = parseFloat((total * 0.01).toFixed(1));
    const TotalValue = parseFloat((total + shipingCarge + tax).toFixed(1));

    return (
        <div>
            <div className="cart-container">
                <h6 className='order-sum'>Order Summary</h6>

                <div className="cart-details">
                    <p className='posssition'><span className="nan">Selected</span> Items: <FontAwesomeIcon className='bars' icon={faCartArrowDown} /> <span className='point'>{quantity}</span></p>
                    <p className="posssition m-nan">
                        Total Price : <span className="cllerr">${total}</span>
                    </p>
                    <p className="posssition m-nan">
                        Shiping Charge : <span className="cllerr">${shipingCarge}</span>
                    </p>
                    <p className="posssition m-nan">
                        Taxt. Est : <span className="cllerr">${tax}</span>
                    </p>
                    <p className="grand-total m-nan">
                        Grand Total : <span className="cllerr">${TotalValue}</span>
                    </p>
                </div>
                <div className="cart-clear">
                    <button onClick={clearCart} className='cart-btn'>Clear Cart <FontAwesomeIcon className='delete' icon={faTrashCan} /></button>
                </div>
                <div className="review">
                    <button className='cart-btn'>Review Order <FontAwesomeIcon className='delete' icon={faArrowRightLong} /></button>
                </div>
            </div>
        </div>
    );
};

export default Cart;