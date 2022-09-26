import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import CoreTeam from "../../layout/core-team/core-team";
import MiniGames from "../../layout/mini-games/mini-games";
import Introduce from "../../layout/introduce/introduce";
import KeyFeatures from "../../layout/key-features/key-features";
import Character from "../../layout/character/character";
import Airports from "../../layout/airports/airports";
import roadMap from "../../layout/road-map/road-map";
import RoadMap from "../../layout/road-map/road-map";

const Home = () =>{
    return(
        <>
            <Header/>
            <Introduce/>
            <KeyFeatures/>
            <Airports/>
            <Character/>
            <MiniGames/>
            <RoadMap />
            <CoreTeam/>
            <Footer/>
        </>
    )
}

export default Home;