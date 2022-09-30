import './character.scss';
import {useTranslation} from "react-i18next";

const Character = () =>{
    const {t} = useTranslation();

    return(
        <div className="character">
            <span className="title-main">{t("character.titleMain")}</span>
            <video autoPlay muted loop className="video hidden-mobile">
                <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_character_web.mp4" type="video/mp4"/>
            </video>
            <video autoPlay muted loop className="video hidden-pc">
                <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_character_mobile.mp4" type="video/mp4"/>
            </video>
        </div>
    )
}

export default Character;