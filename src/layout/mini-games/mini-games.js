import './mini-games.scss';
import {useTranslation} from "react-i18next";

const MiniGames = () =>{
    const {t} = useTranslation();
    const videos = {
        miniGames: process.env.PUBLIC_URL + '/videos/mini-games/mini-games.mp4',
        mobile1: process.env.PUBLIC_URL + '/videos/mini-games/mini-games-mobile-1.mp4',
        mobile2: process.env.PUBLIC_URL + '/videos/mini-games/mini-games-mobile-2.mp4',
        mobile3: process.env.PUBLIC_URL + '/videos/mini-games/mini-games-mobile-3.mp4',
    }
    const images = {
        button : process.env.PUBLIC_URL + "/images/mini-games/button.png",
    }

    return(
        <div className="mini-games">
            <span className="title-main">{t("miniGames.titleMain")}</span>
            <video autoPlay muted loop className="video hidden-mobile">
                <source src={videos.miniGames} type="video/mp4"/>
            </video>

            <div className="button button-hidden hidden-mobile"
                 style={{backgroundImage:`url(${images.button}`}}>
                <span>{t("miniGames.buttonObject")}</span>
            </div>
            <div className="button button-jigsaw hidden-mobile"
                 style={{backgroundImage:`url(${images.button}`}}>
                <span>{t("miniGames.buttonPuzzle")}</span>
            </div>
            <div className="button button-quiz hidden-mobile"
                 style={{backgroundImage:`url(${images.button}`}}>
                <span>{t("miniGames.buttonQuiz")}</span>
            </div>

            <div className="mobile-box hidden-pc">
                <video autoPlay muted loop className="video">
                    <source src={videos.mobile1} type="video/mp4"/>
                </video>
                <div className="button"
                     style={{backgroundImage:`url(${images.button}`}}>
                    <span>{t("miniGames.buttonObject")}</span>
                </div>
            </div>
            <div className="mobile-box hidden-pc">
                <video autoPlay muted loop className="video">
                    <source src={videos.mobile2} type="video/mp4"/>
                </video>
                <div className="button"
                     style={{backgroundImage:`url(${images.button}`}}>
                    <span>{t("miniGames.buttonPuzzle")}</span>
                </div>
            </div>
            <div className="mobile-box hidden-pc">
                <video autoPlay muted loop className="video">
                    <source src={videos.mobile3} type="video/mp4"/>
                </video>
                <div className="button"
                     style={{backgroundImage:`url(${images.button}`}}>
                    <span>{t("miniGames.buttonQuiz")}</span>
                </div>
            </div>
        </div>
    )
}

export default MiniGames