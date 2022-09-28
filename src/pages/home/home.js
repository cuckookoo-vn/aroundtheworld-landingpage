import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import CoreTeam from "../../layout/core-team/core-team";
import MiniGames from "../../layout/mini-games/mini-games";
import Introduce from "../../layout/introduce/introduce";
import KeyFeatures from "../../layout/key-features/key-features";
import Character from "../../layout/character/character";
import Airports from "../../layout/airports/airports";
import RoadMap from "../../layout/road-map/road-map";
import VideoIntroduce from "../../layout/video-introduce/video-introduce";
import Items from "../../layout/items/items";

const Home = () =>{
    return(
        <>
            <Header/>
            <VideoIntroduce/>
            <Introduce/>
            <KeyFeatures/>
            <Airports/>
            <Character/>
            <Items/>
            <MiniGames/>
            <RoadMap/>
            <CoreTeam/>
            <Footer/>
        </>
    )
}

export default Home;