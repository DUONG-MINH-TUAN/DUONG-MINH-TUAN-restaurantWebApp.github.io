import HeaderLogined from "./header_logined"
import item2 from "../assets/img/item-2.png";
import item3 from "../assets/img/item-3.png";
import item4 from "../assets/img/item-4.png";
import item5 from "../assets/img/item-5.png";
import item6 from "../assets/img/item-7.webp";
import GlobalStyle from "../assets/globalStyle/cart.globalStyle"
export default function Checkout(){

    return (
        <section>
            <GlobalStyle/>
        {/* <!-- Header --> */}
            <HeaderLogined/>

        {/* <!-- MAIN --> */}
        <main className="checkout-page">
            <div className="container">
                {/* <!-- Search bar --> */}
                <div className="checkout-container">
                    <div className="search-bar d-none d-md-flex">
                        <input type="text" name="" id="" placeholder="Search for item" className="search-bar__input" />
                        <button className="search-bar__submit">
                            <img src="./assets/icons/" alt="" className="search-bar__icon icon" />
                        </button>
                    </div>
                </div>

                {/* <!-- Breadcrumbs --> */}
                <div className="checkout-container">
                    <ul className="breadcrumbs checkout-page__breadcrumbs">
                        <li>
                            <a href="./" className="breadcrumbs__link">
                                Home
                                <img src="./assets/icons/arrow-right.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="breadcrumbs__link breadcrumbs__link--current">Checkout</a>
                        </li>
                    </ul>
                </div>

                {/* <!-- Checkout content --> */}
                <div className="checkout-container">
                    <div className="row gy-xl-3">
                        <div className="col-8 col-xl-12">
                            <div className="cart-info">
                                <div className="cart-info__list">
                                    {/* <!-- Cart item 1 (Meal 1) --> */}
                                    <article className="cart-item">
                                        <a href="./meal-detail.html">
                                            <img
                                                src={item2}
                                                alt="Meal 1"
                                                className="cart-item__thumb"
                                            />
                                        </a>
                                        <div className="cart-item__content">
                                            <div className="cart-item__content-left">
                                                <h3 className="cart-item__title">
                                                    <a href="./meal-detail.html">
                                                        Grilled Chicken with Steamed Vegetables
                                                    </a>
                                                </h3>
                                                <p className="cart-item__price-wrap">
                                                    $15.00 | <span className="cart-item__status">In Stock</span>
                                                </p>
                                                <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                                    <div className="cart-item__input">
                                                        Chef's Special
                                                        <img
                                                            className="icon"
                                                            src="./assets/icons/arrow-down-2.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="cart-item__input">
                                                        <span>1</span> Serving
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-item__content-right">
                                                <p className="cart-item__total-price">$15.00</p>
                                            </div>
                                        </div>
                                    </article>
                                
                                    {/* <!-- Cart item 2 (Meal 2) --> */}
                                    <article className="cart-item">
                                        <a href="./meal-detail.html">
                                            <img
                                                src={item2}
                                                alt="Meal 2"
                                                className="cart-item__thumb"
                                            />
                                        </a>
                                        <div className="cart-item__content">
                                            <div className="cart-item__content-left">
                                                <h3 className="cart-item__title">
                                                    <a href="./meal-detail.html">
                                                        Spaghetti Carbonara - Classic Italian Pasta
                                                    </a>
                                                </h3>
                                                <p className="cart-item__price-wrap">
                                                    $18.00 | <span className="cart-item__status">In Stock</span>
                                                </p>
                                                <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                                    <div className="cart-item__input">
                                                        Italian Cuisine
                                                        <img
                                                            className="icon"
                                                            src="./assets/icons/arrow-down-2.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="cart-item__input">
                                                        <span>1</span> Serving
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-item__content-right">
                                                <p className="cart-item__total-price">$18.00</p>
                                            </div>
                                        </div>
                                    </article>
                                
                                    {/* <!-- Cart item 3 (Meal 3) --> */}
                                    <article className="cart-item">
                                        <a href="./meal-detail.html">
                                            <img
                                                src="./assets/img/product/item-3.png"
                                                alt="Meal 3"
                                                className="cart-item__thumb"
                                            />
                                        </a>
                                        <div className="cart-item__content">
                                            <div className="cart-item__content-left">
                                                <h3 className="cart-item__title">
                                                    <a href="./meal-detail.html">
                                                        Beef Steak with Mashed Potatoes
                                                    </a>
                                                </h3>
                                                <p className="cart-item__price-wrap">
                                                    $22.50 | <span className="cart-item__status">In Stock</span>
                                                </p>
                                                <div className="cart-item__ctrl cart-item__ctrl--md-block">
                                                    <div className="cart-item__input">
                                                        Gourmet Meal
                                                        <img
                                                            className="icon"
                                                            src="./assets/icons/arrow-down-2.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="cart-item__input">
                                                        <span>1</span> Serving
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-item__content-right">
                                                <p className="cart-item__total-price">$22.50</p>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                
                                <div className="cart-info__bottom d-md-none">
                                    <div className="row">
                                        <div className="col-8 col-xxl-7">
                                            <div className="cart-info__continue">
                                                <a href="./" className="cart-info__next-btn btn btn--primary btn--rounded">
                                                    Cancel Order
                                                </a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 col-xl-12">
                            <div className="row information">
                                <div className="col-12 col-xl-3">
                                    <a href="./shipping.html" >
                                        PAYABLE AMOUNT
                                    </a>
                                </div>
                                <div className="col-8 col-xl-3">
                                    <a>
                                        $38.5
                                    </a>
                                </div>
                                <div className="col-3 col-xl-3">
                                    <a>
                                        TIME: 20:02 PM
                                    </a>
                                </div>
                            </div>
                            <hr/>
                            <div className="row tips">
                                <div className="col-3 col-xl-3">
                                    <a href="./shipping.html" >
                                        Add TIP
                                    </a>
                                </div>
                                <div className="col-3 col-xl-3">
                                    <a href="./shipping.html" className="cart-info__next-btn btn btn--primary btn--rounded">
                                        $5
                                    </a>
                                </div>
                                <div className="col-3 col-xl-3">
                                    <a href="./shipping.html" className="cart-info__next-btn btn btn--primary btn--rounded">
                                       $10
                                    </a>
                                </div>
                                <div className="col-3 col-xl-3">
                                    <a href="./shipping.html" className="cart-info__next-btn btn btn--primary btn--rounded">
                                        $15
                                    </a>
                                </div>
                            </div>
                            <hr/>
                            <div className="row type-paynow-buttons">
                                <div className="col-4 col-xl-3">
                                    <a href="./shipping.html" className="cart-info__next-btn btn btn--primary btn--rounded">
                                        Cash
                                    </a>
                                </div>
                                <div className="col-4 col-xl-3">
                                    <a href="./shipping.html" className="cart-info__next-btn btn btn--primary btn--rounded">
                                        Card
                                    </a>
                                </div>
                                <div className="col-4 col-xl-3">
                                    <a href="./shipping.html" className="cart-info__next-btn btn btn--primary btn--rounded">
                                        QR
                                    </a>
                                </div>
                            </div>
                            <hr/>
                            <div className="col-12 col-xl-50">
                                <a href="./shipping.html" className="cart-info__next-btn btn btn--primary btn--rounded">
                                    CASH RECIEVED: $45 
                                </a>
                            </div>
                            <hr/>
                            <div className="cart-info">
                                <div className="cart-info__row">
                                    <span>Subtotal <span className="cart-info__sub-label">(items)</span></span>
                                    <span>3</span>
                                </div>
                                <div className="cart-info__row">
                                    <span>Price <span className="cart-info__sub-label">(Total)</span></span>
                                    <span>$191.65</span>
                                </div>
                                <div className="cart-info__row">
                                    <span>Shipping</span>
                                    <span>$10.00</span>
                                </div>
                                <div className="cart-info__separate"></div>
                                <div className="cart-info__row">
                                    <span>Estimated Total</span>
                                    <span>$201.65</span>
                                </div>
                                <a href="./shipping.html" className="cart-info__next-btn btn btn--primary btn--rounded">
                                    Paynow
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/* <!-- Footer --> */}
        <footer id="footer" className="footer"></footer>
        <script>
            load("#footer", "./templates/footer.html");
        </script>

        {/* <!-- Modal: confirm remove shopping cart item --> */}
        <div id="delete-confirm" className="modal modal--small hide">
            <div className="modal__content">
                <p className="modal__text">Do you want to remove this item from shopping cart?</p>
                <div className="modal__bottom">
                    <button className="btn btn--small btn--outline modal__btn js-toggle" toggle-target="#delete-confirm">
                        Cancel
                    </button>
                    <button
                        className="btn btn--small btn--danger btn--primary modal__btn btn--no-margin js-toggle"
                        toggle-target="#delete-confirm"
                    >
                        Delete
                    </button>
                </div>
            </div>
            <div className="modal__overlay js-toggle" toggle-target="#delete-confirm"></div>
        </div>
    

        </section>


    )
}
