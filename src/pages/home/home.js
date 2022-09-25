import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import CoreTeam from "../../layout/core-team/core-team";
import MiniGames from "../../layout/mini-games/mini-games";

const Home = () =>{
    return(
        <>
            <Header/>
            <MiniGames/>
            <CoreTeam/>
            <Footer/>
        </>
    )
}

export default Home;