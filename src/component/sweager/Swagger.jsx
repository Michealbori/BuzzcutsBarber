import "/src/component/sweager/Swagger.css";
import Aos from 'Aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Swagger() 
{
  
useEffect(() => {
  Aos.init({
      duration: 2000,
  })
}, [])


     return (
        <main className="Swagger">
                  
                  <section className="Bottle">
                      <img src="https://imgur.com/v8UJ379.png" alt="BOTTLE" />
                  </section>

                  <section className="UnleaseText">
                       <h3>
                        UNLEASH YOUR <br />
                        SWAGGER
                       </h3>
                       <p>
                         Much more than just cutting hair. <br />
                         Detail and a passion for creating <br />
                         unique styles.
                       </p>
                  </section>
                  <section className="BuzzTreatment">
                    <b className="buzzcut"  data-aos="zoom-in-down">YOURSELF WITH THE BUZZCUTS </b>
                         <div>
                         <b className="Transform" data-aos="zoom-in-right"> TRANSFORM </b>
                               <img src="https://imgur.com/AOQQyn9.jpg" alt="Cream" data-aos="zoom-in" />
                         </div>
                       
                  </section>
        </main>
     )
}