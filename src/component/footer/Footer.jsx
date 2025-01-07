import "/src/component/footer/Footer.css";
import Aos from 'Aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



export default function Footer() {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
      }, [])
    return(
        <footer className="footer">
            <section className="footerNav">

                   

               <b className="Shaving">
                 <a href="">HAIR CUT</a> 
               </b>

               <b>
                  SHAVING
               </b>

               <b className="Shaving">
                   <a href="">FACIAL</a>
               </b>
                  

               


                  
              <b className="Shaving">
                    <a href="">TRIMMING</a>
               </b>

               <b className="Shaving">
                   <a href="">CLIPPER</a>
               </b>

               <b className="Shaving">
                   <a href="">PEDICURE</a>
               </b>
            


            </section>
                  
                  <div className="secondRowNav">


                   <section className="BuzzcutAccient">
                    
                   <div className="AncientForm">
                        <span>
                             <b>25%</b>
                             <p>
                             Ancient form of styling men hair,beard, grooming 
                             </p>
                        </span>

                        <hr />
                        <img src="https://imgur.com/tjtoFty.png" alt="Footer Logo" data-aos="zoom-in" />
                   </div>

             </section>

             <section className="navLink">
                
                <div>
                <ul>
                    <li>
                        <b>SKIN CARE</b>
                    </li>

                    <li>
                        <b> HAIR TREATMENT </b>
                    </li>

                    <li>
                        <b> BEARD TREATMENT </b>
                    </li>
                </ul>
                </div>

                <div>
                <ul>
                    <li>
                        <b>MEN'S HAIRCUT</b>
                    </li>

                    <li>
                        <b> CHILDREN HAIRCUT </b>
                    </li>

                    <li>
                        <b> HAIR BLACK SHINE </b>
                    </li>
                </ul>
                </div>

                <div>
                <ul>
                    <li>
                        <b>SHAVING (REGULAR)</b>
                    </li>

                    <li>
                        <b> BEARD CARE </b>
                    </li>

                    <li>
                        <b> BEARD GROOMING </b>
                    </li>
                </ul>
                </div>

             </section>
                  </div>



                      <section className="Terms">
                        <b>
                            <a href="https://x.com/m11sikat?s=21">TERMS & CONDITIONS</a>
                        </b>

                        <b>
                            <a href="https://x.com/m11sikat?s=21">PRIVACY</a>
                        </b>
                        
                        <b>
                            <a href="https://x.com/m11sikat?s=21"> ALL RIGHT TO MICHEALBORI © 2024</a>
                        </b>
                      </section> 




                  {/* <p>
                         © 2022 Buzzcuts. All rights reserved.
                         <br />
                         Privacy Policy
                  </p>  */}
                      
        </footer>
    )
}