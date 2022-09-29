import './character.scss';
import {useTranslation} from "react-i18next";

const Character = () =>{
    const {t} = useTranslation();
    const videos = {
        characterGif : process.env.PUBLIC_URL + '/videos/character/character-gif.mp4',
        characterLoop: process.env.PUBLIC_URL + '/videos/character/character-loop.mp4',
        characterMobile: process.env.PUBLIC_URL + '/videos/character/character-mobile.mp4',
    }

    return(
        <div className="character">
            <span className="title-main">{t("character.titleMain")}</span>
            <video autoPlay muted loop className="video hidden-mobile">
                <source src={videos.characterGif} type="video/mp4"/>
            </video>
            <video autoPlay muted loop className="video hidden-pc">
                <source src={videos.characterMobile} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Character;