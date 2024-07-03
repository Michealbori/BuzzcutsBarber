import "/src/component/experience/Experience.css";
import Aos from 'Aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




export default function Experience() 
{
  
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
      }, [])

    return(
        <main className="Experience">
                
                         <section className="ExperienceImg">
                            <img src="public/BARBER Working.jpg" alt="Barbar Working" />
                         </section>
                
                         <section className="ExperienceText">
                                       <b>EXPERIENCE THE ART OF <span  id="underline">
                                        BARBERING
                                        </span>  </b>
                                       <p data-aos="fade-down-right">Barbering is an ancient form that old passed down from generation and the style of men's hair, and the
                                        and the scalp. The art of barbering has evolved over time and has become a cultural and social experience.
                                       </p>
                                       <button> GET MAKEOVER <img src="public/Black Arrow.png" alt="Arrow" /> </button>
                                        
                         </section>
                 <section className="ExperienceSissor" id="sissor">
                 <img src="public/scissors.png" alt="Sissor" />
                 </section>

        </main>
    )
}