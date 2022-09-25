import './mini-games.scss';

const MiniGames = () =>{
    const videos = {
        miniGames: process.env.PUBLIC_URL + '/videos/mini-games/mini-games.mp4'
    }

    return(
        <div className="mini-games">
            <span className="title-main">Mini Games</span>
            <video autoPlay muted loop className="video">
                <source src={videos.miniGames} type="video/mp4"/>
            </video>
        </div>
    )
}

export default MiniGames