import { faCartShopping, faChartBar, faListCheck, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './Header.css';


window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

const Header = () => {
    return (
        <header className="header-section">
            <div className='container'>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/"><FontAwesomeIcon className='chart' icon={faChartBar} />MegaMart</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>


                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="ms-auto respons" role="search">
                                <div className="navvvber">
                                    <button class="search-bar" type="submit"><FontAwesomeIcon className='bars' icon={faSearch} /></button>
                                    <input class="input-field" type="search" placeholder="Search esseintiel, groceries & more" aria-label="Search" />
                                    <button class="list-items" type="submit"><FontAwesomeIcon className='bars' icon={faListCheck} /></button>
                                </div>


                                <ul class="navbar-nav mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active signin" aria-current="page" href="fdf"><FontAwesomeIcon className='signicon' icon={faUser} />
                                            SignUp</a>
                                    </li><span className='coma'>|</span>
                                    <li class="nav-item">
                                        <a class="nav-link active signin" aria-current="page" href="jjj"><FontAwesomeIcon className='signicon' icon={faCartShopping} />
                                            Cart</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;