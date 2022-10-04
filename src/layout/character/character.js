import './character.scss';
import {useTranslation} from "react-i18next";

const Character = ({windowDimensions}) =>{
    const {t} = useTranslation();

    return(
        <div className="character">
            <span className="title-main"
                  data-aos="fade-up">
                {t("character.titleMain")}
            </span>
            {
                windowDimensions.width > 767.5 ?
                    <video data-aos="fade-up"
                           data-aos-delay="600"
                           autoPlay muted loop
                           className="video hidden-mobile">
                        <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_character_web.mp4" type="video/mp4"/>
                    </video>
                    :
                    <video data-aos="fade-up"
                           data-aos-delay="600"
                           autoPlay muted loop
                           className="video hidden-pc">
                        <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_character_mobile.mp4" type="video/mp4"/>
                    </video>
            }
        </div>
    )
}

export default Character;