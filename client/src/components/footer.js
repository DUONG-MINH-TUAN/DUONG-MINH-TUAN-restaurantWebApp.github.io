const Footer = () => {

    return (
         
        // #FOOTER/CONTACT
      
      <footer className="footer section has-bg-image text-center" 
      style={{backgroundImage: "url('/assets/img/footer-bg2.png')"}}>
        <div className="container" id="contact">
          <div className="footer-top grid-list">
            <div className="footer-brand has-before has-after">
              
              <a href="#" className="logo">
                TTT
              </a>     
    
              <div>
                <p className="title-1">Business Hour</p>
                <p className="section-text">
                    Monday to Sunday<br/>
                    4PM - 12AM
                </p>
              </div><br/>
              
              <div>
                <p className="title-1">Location</p>
                <p className="section-text"> 
                    99 Nguyen Van A Street, District 2<br/>
                    Ho Chi Minh City
                </p>
              </div><br/>
    
              <div>
                <p className="title-1">Reservation</p> 
                <a href="08 08 777 888" className="body-1 contact-number hover-underline">+08 08 777 888</a>
              </div>
    
            </div>
    
    
            <ul className="footer-list">
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Home</a>
              </li>
    
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Menu</a>
              </li>
    
              <li>
                <a href="#" className="label-2 footer-link hover-underline">About Us</a>
              </li>
    
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Our Chefs</a>
              </li>
            </ul>
    
            <ul className="footer-list">
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Facebook</a>
              </li>
    
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Instagram</a>
              </li>
    
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Twitter</a>
              </li>
    
              <li>
                <a href="#" className="label-2 footer-link hover-underline">Youtube</a>
              </li>          
            </ul>
    
          </div>
    
          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2024 TTT. All Rights Reserved 
            </p>
          </div>
    
        </div>
      </footer>
    
    
    )
}


export default Footer;