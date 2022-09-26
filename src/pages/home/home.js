import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import CoreTeam from "../../layout/core-team/core-team";
import MiniGames from "../../layout/mini-games/mini-games";
import Introduce from "../../layout/introduce/introduce";
import KeyFeatures from "../../layout/key-features/key-features";

const Home = () =>{
    return(
        <>
            <Header/>
            <Introduce/>
            <KeyFeatures/>
            <MiniGames/>
            <CoreTeam/>
            <Footer/>
        </>
    )
}

export default Home;