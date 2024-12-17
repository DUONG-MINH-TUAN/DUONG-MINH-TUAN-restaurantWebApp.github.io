import GlobalStyle from "../assets/globalStyle/home.globalStyle"
import menu1 from "../assets/img/menu-1.png";
import menu2 from "../assets/img/menu-2.png";
import menu3 from "../assets/img/menu-3.png";
import menu4 from "../assets/img/menu-4.png";
import menu5 from "../assets/img/menu-5.png";
import menu6 from "../assets/img/menu-6.png";
export default function Menu(){
    return (
        <div>
        <GlobalStyle/>
        <section className="section menu" aria-label="menu-label" id="menu">
        <div className="container">

            <p className="section-subtitle text-center label-2">Special Selection</p>

            <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

            <ul className="grid-list">

            <li>
                <div className="menu-card hover:card">

                <figure className="card-banner img-holder" style={{"--width": 100, "--height": 100}}>
                    <img src={menu1} width="100" height="100" loading="lazy" alt="Greek Salad"
                    className="img-cover"/>
                </figure>

                <div>
                    <div className="title-wrapper">
                    <h3 className="title-3">
                        <a href="#" className="card-title">French Onion Soup
                        </a>
                    </h3>

                    <span className="span title-2">$25.50</span>
                    </div>

                    <p className="card-text label-1">
                    A rich, flavorful broth of caramelized onions and beef stock, topped with a crispy baguette slice and melted Gruyère cheese.
                    </p>

                </div>

                </div>
            </li>

            <li>
                <div className="menu-card hover:card">

                <figure className="card-banner img-holder" style={{"--width": 100, "--height": 100}}>
                    <img src={menu2} width="100" height="100" loading="lazy" alt="Lasagne"
                    className="img-cover"/>
                </figure>

                <div>

                    <div className="title-wrapper">
                    <h3 className="title-3">
                        <a href="#" className="card-title">Lobster Bisque</a>
                    </h3>

                    <span className="span title-2">$40.00</span>
                    </div>

                    <p className="card-text label-1">
                    Creamy and indulgent, featuring lobster meat, a hint of sherry, and fragrant herbs.
                    </p>

                </div>

                </div>
            </li>

            <li>
                <div className="menu-card hover:card">

                <figure className="card-banner img-holder" style={{"--width": 100, "--height": 100}}>
                    <img src={menu3} width="100" height="100" loading="lazy" alt="Butternut Pumpkin"
                    className="img-cover"/>
                </figure>

                <div>

                    <div className="title-wrapper">
                    <h3 className="title-3">
                        <a href="#" className="card-title">Wagyu Beef Tartare
                        </a>
                    </h3>

                    <span className="span title-2">$10.00</span>
                    </div>

                    <p className="card-text label-1">
                    Finely chopped Wagyu beef, served with quail egg, Dijon mustard, capers, and crispy brioche.

                    </p>

                </div>

                </div>
            </li>

            <li>
                <div className="menu-card hover:card">

                <figure className="card-banner img-holder" style={{"--width": 100, "--height": 100}}>
                    <img src={menu4} width="100" height="100" loading="lazy" alt="Tokusen Wagyu"
                    className="img-cover"/>
                </figure>

                <div>

                    <div className="title-wrapper">
                    <h3 className="title-3">
                        <a href="#" className="card-title">Seared Scallops
                        </a>
                    </h3>


                    <span className="span title-2">$39.00</span>
                    </div>

                    <p className="card-text label-1">
                    Perfectly caramelized scallops on a bed of cauliflower purée, drizzled with a truffle vinaigrette.

                    </p>

                </div>

                </div>
            </li>

            <li>
                <div className="menu-card hover:card">

                <figure className="card-banner img-holder" style={{"--width": 100, "--height": 100}}>
                    <img src={menu5} width="100" height="100" loading="lazy" alt="Olivas Rellenas"
                    className="img-cover"/>
                </figure>

                <div>

                    <div className="title-wrapper">
                    <h3 className="title-3">
                        <a href="#" className="card-title">Truffle Risotto</a>
                    </h3>

                    <span className="span title-2">$25.00</span>
                    </div>

                    <p className="card-text label-1">
                    Creamy Arborio rice cooked with white wine, Parmesan, and finished with shaved black truffle.

                    </p>

                </div>

                </div>
            </li>

            <li>
                <div className="menu-card hover:card">

                <figure className="card-banner img-holder" style={{"--width": 100, "--height": 100}}>
                    <img src={menu6} width="100" height="100" loading="lazy" alt="Opu Fish"
                    className="img-cover"/>
                </figure>

                <div>

                    <div className="title-wrapper">
                    <h3 className="title-3">
                        <a href="#" className="card-title">Duck à l’Orange</a>
                    </h3>

                    <span className="span title-2">$65.00</span>
                    </div>

                    <p className="card-text label-1">
                    Tender duck breast glazed with a citrus-infused sauce, served with wild rice and braised fennel.
                    </p>

                </div>

                </div>
            </li>

            </ul>


        </div>
        </section> 
                    </div>        
    )
}