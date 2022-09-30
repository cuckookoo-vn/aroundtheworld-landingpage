import './mini-games.scss';
import {useTranslation} from "react-i18next";

const MiniGames = () =>{
    const {t} = useTranslation();
    const images = {
        button : process.env.PUBLIC_URL + "/images/mini-games/button.png",
    }

    return(
        <div className="mini-games">
            <span className="title-main">{t("miniGames.titleMain")}</span>
            <video autoPlay muted loop className="video hidden-mobile">
                <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_minigame_web.mp4" type="video/mp4"/>
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
                    <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_minigame_mobile_1.mp4" type="video/mp4"/>
                </video>
                <div className="button"
                     style={{backgroundImage:`url(${images.button}`}}>
                    <span>{t("miniGames.buttonObject")}</span>
                </div>
            </div>
            <div className="mobile-box hidden-pc">
                <video autoPlay muted loop className="video">
                    <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_minigame_mobile_2.mp4" type="video/mp4"/>
                </video>
                <div className="button"
                     style={{backgroundImage:`url(${images.button}`}}>
                    <span>{t("miniGames.buttonPuzzle")}</span>
                </div>
            </div>
            <div className="mobile-box hidden-pc">
                <video autoPlay muted loop className="video">
                    <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_minigame_mobile_3.mp4" type="video/mp4"/>
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