import Sherosection from "./component/artist1section/SheroSection";
import Discover from "./component/discover/Discover";
import Experience from "./component/experience/Experience";
import Footer from "./component/footer/Footer";
import Groome from "./component/groome/Groome";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Swagger from "./component/sweager/Swagger";
import Transform from "./component/transform/Transform";


export default function App() {
  return(
    <>
    <Header />
    <Hero />
    <Sherosection />
    <Swagger />
    <Experience />
    <Groome />
    <Transform />
    <Discover />
    <Footer />
    </>
  )
}