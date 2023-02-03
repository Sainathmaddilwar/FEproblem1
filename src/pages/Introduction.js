import "../css/Introduction.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate} from "react-router-dom";
const Introduction = ()=>{
  const Navigate = useNavigate();
    const handelClick = ()=>{
    Navigate("/home");
    }
    return(
        <>
        <Header/>
        <div className="container">
         <p>
        The story is about the planet of Lengaburu in the distant galaxy of Tara
        B.
      </p>
      <p>
        After the recent war with neighbouring planet Falicornia, King Shan has
        exiled the Queen of Falicornia for 15 years.
      </p>

      <p>
        Queen Al Falcone is now in hiding. But if King Shan can find her before
        the years are up, she will be exiled for another 15 years.
      </p>

      <p>
        King Shan has received intelligence that Al Falcone is hiding in one of
        these 6 planets - DonLon, Enchai, Jebing, Sapir, Lerbin &amp; Pingasor.
        However he has limited resources at his disposal &amp; can send his army
        to only 4 of these planets.
      </p>
      <button onClick={handelClick} className="intro-btn">Play Game</button>
        </div>
        <Footer/>
        </>
    )
}

export default Introduction;
