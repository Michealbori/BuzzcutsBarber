import "/src/component/artist1section/SheroSection.css";
import Aos from 'Aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Sherosection() {

    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, [])

    return(
        <main className="Sherosection">
        
          <section className="Blog">
              <p>BLOG</p>
              <b>
                LATEST GROOMING TIPS <br /> & SOLUTIONS
              </b>
          </section>

          <section className="firstartist" data-aos="zoom-in-up">
                     <img src="https://imgur.com/5ZnJMQE.png" alt="Artist 1" />
          </section>

          <section className="sissorsComb">
                  <img src="https://imgur.com/y9scNu0.png" alt="CombSissors" />
                  <div className="special">
                    <b> OUR <br /> SPECIAL </b>
                    <p> HAIRCUTS </p>
                  </div>
                  <button> BOOK AN APPOINTMENT <img src="https://imgur.com/kRJ1nqY.png" alt="arrow" id="arrow"/> </button>
          </section>

        </main>
    )
}