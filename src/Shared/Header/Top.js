import { faCircleCheck, faLocationDot, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './Top.css'

const Top = () => {
    return (
        <div className="  header-sec">
            <div className="container d-flex">
                <div>
                    <p>Welcome to worldwide Megamart</p>
                </div>
                <div className='d-flex ms-auto'>
                    {/* <button>
                     
                    heoo
                </button> */}
                    <li><a href="fdf">
                        <FontAwesomeIcon className='cllr' icon={faLocationDot} />
                        Deliver to 42516
                    </a></li>|
                    <li><a href="dfd">
                        <FontAwesomeIcon className='cllr' icon={faTruckMoving} />
                        Track your order</a></li>|
                    <li><a href="fdf">
                        <FontAwesomeIcon className='cllr' icon={faCircleCheck} />
                        All offers</a></li>
                </div>
            </div>
        </div>
    );
};

export default Top;