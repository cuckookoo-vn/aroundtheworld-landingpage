import './mini-games.scss';
import {useTranslation} from "react-i18next";

const MiniGames = () =>{
    const {t} = useTranslation();
    const videos = {
        miniGames: process.env.PUBLIC_URL + '/videos/mini-games/mini-games.mp4'
    }
    const images = {
        button : process.env.PUBLIC_URL + "/images/mini-games/button.png",
    }

    return(
        <div className="mini-games">
            <span className="title-main">{t("miniGames.titleMain")}</span>
            <video autoPlay muted loop className="video">
                <source src={videos.miniGames} type="video/mp4"/>
            </video>

            <div className="button button-hidden"
                 style={{backgroundImage:`url(${images.button}`}}>
                <span>{t("miniGames.buttonObject")}</span>
            </div>
            <div className="button button-jigsaw"
                 style={{backgroundImage:`url(${images.button}`}}>
                <span>{t("miniGames.buttonPuzzle")}</span>
            </div>
            <div className="button button-quiz"
                 style={{backgroundImage:`url(${images.button}`}}>
                <span>{t("miniGames.buttonQuiz")}</span>
            </div>
        </div>
    )
}

export default MiniGames