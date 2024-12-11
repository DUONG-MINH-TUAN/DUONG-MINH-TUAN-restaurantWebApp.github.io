import GlobalStyle from "../assets/globalStyle/home.globalStyle";
import AboutBanner from "../assets/img/about-banner.jpg";
import AboutABS from "../assets/img/about-abs-image.jpg";
function AboutPage(){
    return (
        // <section>
            
        //     </section>
        <section className="section about text-center" aria-labelledby="about-label" id="about">
            <h2 className="headline-1 section-subtitle">The beginning of TTT</h2>
            <div className="container">
        
                    <div className="about-content">

                        <h2 className="headline-1 section-title">Every Fla'vor is a Story</h2>
                
                        <p className="section-text">
                        After years of working as a chef, Tuan decided to open his own restaurant, 
                        inspired by his grandmother’s recipes. He spent months perfecting the menu, 
                        finding local suppliers, and securing the necessary permits. 
                        With his savings, he rented a small, cozy space in town and carefully 
                        designed the dining area to feel like home. 
                        </p>
                        <p className="label-2 section-subtitle" id="about-label"></p>
                
                        <div className="contact-label">Book Through Call</div>
                
                        <a href="08 08 777 888" className="body-1 contact-number hover-underline">+08 08 777 888</a>
                
                    </div>
        
                    <figure className="about-banner">        
                        <img src={AboutBanner} width="570" height="570" loading="lazy" alt="about banner"
                        className="w-100" data-parallax-item data-parallax-speed="1"/>
                
                        <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
                            <img src={AboutABS} width="285" height="285" loading="lazy" alt=""
                            className="w-100"/>
                        </div>
                
                    </figure>
        
            
            </div>
      </section>
    );
    
}
    
export default AboutPage;
    