import './items.scss';
import {useTranslation} from "react-i18next";

const Items = ({windowDimensions}) =>{
    const {t} = useTranslation();
    return(
        <div className="items">
            <span data-aos="fade-up" className="title-main">{t("items.titleMain")}</span>
            {
                windowDimensions.width > 767.5 ?
                    <video data-aos="fade-up"
                           data-aos-delay="600"
                           autoPlay muted loop
                           className="video hidden-mobile">
                        <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_items_web.mp4"
                                type="video/mp4"/>
                    </video>
                    :
                    <video autoPlay muted loop
                           data-aos="fade-up"
                           data-aos-delay="600"
                           className="video hidden-pc">
                        <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_items_mobile.mp4"
                                type="video/mp4"/>
                    </video>
            }
        </div>
    )
}

export default Items