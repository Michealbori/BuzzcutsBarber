import "/src/component/hero/Hero.css";


export default function Hero() {
    return(
        <main className="HeroHeader">
            <h3 className="style">
             MAKE <br />
             <span id="unique">UNIQUE</span> <br />
            STYLE  
            </h3>
              
              <div className="barbarsName">
                <p>
                    HAIR STYLIST
                </p>
                <b>
                    LUCAS BENJAMIN
                </b>
              </div>

              <div className="salonService">
                    <img src="public/Chair.png" alt="chair" className="animate__animated animate__pulse"/>
                    <h6>
                        SALOON SERVICE <br />
                       <span id="BARBERINO">BARBERINO</span>  <br />
                        GROOMING
                    </h6>
              </div>
        </main>
    )
}