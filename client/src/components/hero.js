import hero1 from "../assets/img/hero-1.png"
function Hero(){
    return (
        // <article>

      <section className="hero text-center" aria-label="home" id="home">
            <ul className="hero-slider" data-hero-slider>

                <li className="slider-item active" data-hero-slider-item>

                    <div className="slider-bg">
                    <img src={hero1} width="1880" height="950" alt="" className="img-cover"/>
                    </div>

                    <h1 className="display-1 hero-title slider-reveal">
                    Customer experience is our <br/>
                    Top priority 
                    </h1>

                    <p className="label-2 hero-text section-subtitle">
                    Where Each Plate Tells A Tale Of Culinary Expertise And Dedicated Artistry
                    </p>

                    <a href="#" className="btn btn-primary slider-reveal">
                    <span className="text text-1">Order Now</span>

                    <span className="text text-2" aria-hidden="true">Order Now</span>
                    </a>

                </li>
            </ul>
      </section>
    );
}

export default Hero;