import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import CoreTeam from "../../layout/core-team/core-team";
import MiniGames from "../../layout/mini-games/mini-games";
import Introduce from "../../layout/introduce/introduce";

const Home = () =>{
    return(
        <>
            <Header/>
            <Introduce/>
            <MiniGames/>
            <CoreTeam/>
            <Footer/>
        </>
    )
}

export default Home;