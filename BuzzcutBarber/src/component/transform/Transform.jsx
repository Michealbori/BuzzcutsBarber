
import "/src/component/transform/Transform.css";




export default function Transform() 
{
    return(
        <main className="ArtistTransform">
                  
                  <section className="TRANSFORM_TEXT">
                               <b>
                TRANSFORM YOUR  <span id="underline">
                    BORING LOOK
                </span>
            </b>

            <p>
                A new haircut can completely transform your face, 
                putting emphasis on different areas of your facial features.
            </p>

            <div className="TRANSFORM_CITIES">
                <h3>68</h3>
                <h4>
                    CITIES WE'RE IN
                </h4>
            </div> 
                  </section>


                  <section className="TRANSFORM_Artist2">
                                   <img src="public/Artist 2.png" alt="Artist 2" />
                  </section>



                <section className="TRANSFORM_Artist3">
                          <img src="public/ARTIST 3.png" alt="ARTIST 3" />
                          <p> NATURAL SKINCARE </p>
                </section>
        </main>
    )
}