import "/src/component/groome/Groome.css";





export default function Groome()
{
    return(
        <main className="GROOME">
            <section className="GROOMING_ULTIMATE">
            <h4>THE ULTIMATE MEN'S GROOMING</h4>
            <p>Our private service will beat the doubt.</p>
            <button> Order our product <img src="public/White arrow.png" alt="arrow" /></button>
            </section>

            <section className="GROOMING_BARBER">
                        <b>
                              GROOME <img src="public/SissorHand.png" alt="SissorHand" id="sissor"/>
                            WITH THE BEST BARBER
                        </b>
            </section>

            <section className="GROOMING_PORDUCT">

                <div className="GROOMINGPRODUCT">
                <p>PRODUCT</p>
                <h6>SHARP BEARD GROOMING TIPS</h6>
                </div>

                <div className="GROOMING_INGREDIENT">
                    <p> INGREDIENT </p>
                    <h6>
                        GLYCERIN, ROSEMARY,
                        COCO-GLUCOSIDE,
                        ALCHEMILLA, BETAINE
                    </h6>
                </div>
            </section>
        </main>
    )
}