
import { useAuth } from '../context/AuthContext';
import {useNavigate} from "react-router-dom";
function Header(){
    const {user,promoteAdmin,logout} = useAuth();
    
    const navigate = useNavigate();

    const handlePromoteAdmin = async (e)=>{
        e.preventDefault();
        await promoteAdmin();
        //navigate to PromoteAdminPage
        navigate("/manage-user");
    }
    return (
                
        <header className="header" data-header>
            <div className="container">

                <a href="#" className="logo">
                  
                    TTT
                </a>
        
                <nav className="navbar" data-navbar>

                            <button className="close-btn" aria-label="close menu" data-nav-toggler>
                                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                            </button>
                            <div className="text-center">

                            <a href="#" className="logo">
                                    
                                    TTT
                            </a>
                            </div>

                            <ul className="navbar-list">

                                <li className="navbar-item">
                                    <a href="#home" className="navbar-link hover-underline active">
                                        <div className="separator"></div>

                                        <span className="span">Home</span>
                                    </a>
                                </li>

                                <li className="navbar-item">
                                    <a href="#menu" className="navbar-link hover-underline">
                                        <div className="separator"></div>

                                        <span className="span">Menus</span>
                                    </a>
                                </li>

                                <li className="navbar-item">
                                    <a href="#about" className="navbar-link hover-underline">
                                        <div className="separator"></div>

                                        <span className="span">About Us</span>
                                    </a>
                                </li>

                                <li className="navbar-item">
                                    <a href="#contact" className="navbar-link hover-underline">
                                        <div className="separator"></div>

                                        <span className="span">Contact</span>
                                    </a>
                                </li>

                            </ul>

                            <div className="text-center">
                                <p className="headline-1 navbar-title">Visit Us</p>

                                <address className="body-4">
                                Restaurant St, Delicious City, <br/>
                                London 9578, UK
                                </address>

                                <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

                                <a href="mailto:booking@TTT.com" className="body-4 sidebar-link">booking@TTT.com</a>

                                <div className="separator"></div>

                                <p className="contact-label">Booking Request</p>

                                <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
                                +88-123-123456
                                </a>
                            </div>

                </nav>
                {/* check the role of admin to generate the button */}
                { user && (user.role == "admin") &&(
                <a onClick={handlePromoteAdmin} className="btn btn-secondary">
                    <span className="text text-1">Promote Admin</span>

                    <span className="text text-2" aria-hidden="true">Promote Admin</span>
                </a>
                )}

                <a onClick={logout} className="btn btn-secondary">
                    <span className="text text-1">Logout</span>

                    <span className="text text-2" aria-hidden="true">Logout</span>
                </a>

                <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>

                <div className="overlay" data-nav-toggler data-overlay></div>

            </div>
        </header>




    );
}


export default Header;