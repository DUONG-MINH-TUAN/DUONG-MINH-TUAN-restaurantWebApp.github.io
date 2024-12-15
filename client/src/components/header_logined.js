export default function HeaderLogined(){
    

    return (
        <div className="container">
        <div className="top-bar">
            {/* //More */}
            <button className="top-bar__more d-none d-lg-block js-toggle" toggle-target="#navbar">
                <img src="./assets/icons/more.svg" alt="" className="icon top-bar__more-icon" />
            </button>

            {/* // Logo  */}
            <a href="./" className="logo top-bar__logo">
                <img src="./assets/icons/logo.svg" alt="grocerymart" className="logo__img top-bar__logo-img" />
                <h1 className="logo__title top-bar__logo-title">grocerymart</h1>
            </a>

            {/* // Navbar  */}
            <nav id="navbar" className="navbar hide">
                <button className="navbar__close-btn js-toggle" toggle-target="#navbar">
                    <img className="icon" src="./assets/icons/arrow-left.svg" alt="" />
                </button>

                <a href="./checkout.html" className="nav-btn d-none d-md-flex">
                    <img src="./assets/icons/buy.svg" alt="" className="nav-btn__icon icon" />
                    <span className="nav-btn__title">Cart</span>
                    <span className="nav-btn__qnt">3</span>
                </a>

                <a href="#!" className="nav-btn d-none d-md-flex">
                    <img src="./assets/icons/heart.svg" alt="" className="nav-btn__icon icon" />
                    <span className="nav-btn__title">Favorite</span>
                    <span className="nav-btn__qnt">3</span>
                </a>
            </nav>
            <div className="navbar__overlay js-toggle" toggle-target="#navbar"></div>

            {/* //  Actions  */}
            <div className="top-act">
                <div className="top-act__group d-md-none top-act__group--single">
                    <button className="top-act__btn">
                        <img src="./assets/icons/search.svg" alt="" className="icon top-act__icon" />
                    </button>
                </div>

                <div className="top-act__group d-md-none">
                    <div className="top-act__btn-wrap">
                        <button className="top-act__btn">
                            <img src="./assets/icons/heart.svg" alt="" className="icon top-act__icon" />
                            <span className="top-act__title">03</span>
                        </button>

                        {/* // Dropdown  */}
                        <div className="act-dropdown">
                            <div className="act-dropdown__inner">
                                <img src="./assets/icons/arrow-up.png" alt="" className="act-dropdown__arrow" />
                                <div className="act-dropdown__top">
                                    <h2 className="act-dropdown__title">You have 3 item(s)</h2>
                                    <a href="./favourite.html" className="act-dropdown__view-all">See All</a>
                                </div>
                                <div className="row row-cols-3 gx-2 act-dropdown__list">
                                    {/* // Cart preview item 1  */}
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src="./assets/img/product/item-1.png"
                                                    alt=""
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">Lavazza Coffee Blends</h3>
                                            <p className="cart-preview-item__price">$329.00</p>
                                        </article>
                                    </div>

                                    {/* // Cart preview item 2  */}
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src="./assets/img/product/item-2.png"
                                                    alt=""
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">Coffee Beans Espresso</h3>
                                            <p className="cart-preview-item__price">$39.99</p>
                                        </article>
                                    </div>

                                    {/* // Cart preview item 3  */}
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src="./assets/img/product/item-3.png"
                                                    alt=""
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">Qualità Oro Mountain</h3>
                                            <p className="cart-preview-item__price">$47.00</p>
                                        </article>
                                    </div>
                                </div>
                                <div className="act-dropdown__separate"></div>
                                <div className="act-dropdown__checkout">
                                    <a
                                        href="./checkout.html"
                                        className="btn btn--primary btn--rounded act-dropdown__checkout-btn"
                                    >
                                        Check Out All
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="top-act__separate"></div>

                    <div className="top-act__btn-wrap">
                        <button className="top-act__btn">
                            <img src="./assets/icons/buy.svg" alt="" className="icon top-act__icon" />
                            <span className="top-act__title">$65.42</span>
                        </button>

                        {/* // Dropdown  */}
                        <div className="act-dropdown">
                            <div className="act-dropdown__inner">
                                <img src="./assets/icons/arrow-up.png" alt="" className="act-dropdown__arrow" />
                                <div className="act-dropdown__top">
                                    <h2 className="act-dropdown__title">You have 3 item(s)</h2>
                                    <a href="./checkout.html" className="act-dropdown__view-all">See All</a>
                                </div>
                                <div className="row row-cols-3 gx-2 act-dropdown__list">
                                    {/* // Cart preview item 1  */}
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src="./assets/img/product/item-1.png"
                                                    alt=""
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">Lavazza Coffee Blends</h3>
                                            <p className="cart-preview-item__price">$329.00</p>
                                        </article>
                                    </div>

                                    {/* //Cart preview item 2  */}
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src="./assets/img/product/item-2.png"
                                                    alt=""
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">Coffee Beans Espresso</h3>
                                            <p className="cart-preview-item__price">$39.99</p>
                                        </article>
                                    </div>

                                    {/* // Cart preview item 3  */}
                                    <div className="col">
                                        <article className="cart-preview-item">
                                            <div className="cart-preview-item__img-wrap">
                                                <img
                                                    src="./assets/img/product/item-3.png"
                                                    alt=""
                                                    className="cart-preview-item__thumb"
                                                />
                                            </div>
                                            <h3 className="cart-preview-item__title">Qualità Oro Mountain</h3>
                                            <p className="cart-preview-item__price">$47.00</p>
                                        </article>
                                    </div>
                                </div>
                                <div className="act-dropdown__bottom">
                                    <div className="act-dropdown__row">
                                        <span className="act-dropdown__label">Subtotal</span>
                                        <span className="act-dropdown__value">$415.99</span>
                                    </div>
                                    <div className="act-dropdown__row">
                                        <span className="act-dropdown__label">Texes</span>
                                        <span className="act-dropdown__value">Free</span>
                                    </div>
                                    <div className="act-dropdown__row">
                                        <span className="act-dropdown__label">Shipping</span>
                                        <span className="act-dropdown__value">$10.00</span>
                                    </div>
                                    <div className="act-dropdown__row act-dropdown__row--bold">
                                        <span className="act-dropdown__label">Total Price</span>
                                        <span className="act-dropdown__value">$425.99</span>
                                    </div>
                                </div>
                                <div className="act-dropdown__checkout">
                                    <a
                                        href="./checkout.html"
                                        className="btn btn--primary btn--rounded act-dropdown__checkout-btn"
                                    >
                                        Check Out All
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="top-act__user">
                    <img src="./assets/img/avatar.jpg" alt="" className="top-act__avatar" />

                    {/* // Dropdown  */}
                    <div className="act-dropdown top-act__dropdown">
                        <div className="act-dropdown__inner user-menu">
                            <img
                                src="./assets/icons/arrow-up.png"
                                alt=""
                                className="act-dropdown__arrow top-act__dropdown-arrow"
                            />

                            <div className="user-menu__top">
                                <img src="./assets/img/avatar.jpg" alt="" className="user-menu__avatar" />
                                <div>
                                    <p className="user-menu__name">John Smith</p>
                                    <p>@johnsmith</p>
                                </div>
                            </div>

                            <ul className="user-menu__list">
                                <li>
                                    <a href="./profile.html" className="user-menu__link">Profile</a>
                                </li>
                                <li>
                                    <a href="./favourite.html" className="user-menu__link">Favourite list</a>
                                </li>
                                <li className="user-menu__separate">
                                    <a href="#!" className="user-menu__link" id="switch-theme-btn">
                                        <span>Dark mode</span>
                                        <img src="./assets/icons/sun.svg" alt="" className="icon user-menu__icon" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="user-menu__link">Settings</a>
                                </li>
                                <li className="user-menu__separate">
                                    <a href="./sign-in.html" className="user-menu__link">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>

    );
}