import './advertising.scss'
import {useTranslation} from "react-i18next";

const Advertising = ({windowDimensions}) =>{
    const images = {
        bgAdvertising: "https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/imgs/artw_ckk_advertising_web.png",
        bgAdvertisingMobile: "https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/imgs/artw_ckk_advertising_mobile.png",
    }
    const {t} = useTranslation();

    return(
        <div className="advertising">
            <span className="title-main" data-aos="fade-up">{t("advertising.titleMain")}</span>
            <div className="advertising-image"
                 style={{backgroundImage:`url(${windowDimensions.width > 767.5 ?images.bgAdvertising : images.bgAdvertisingMobile})`}}>
                <span className="title title-1">
                    {t("advertising.title1")}
                </span>
                <span className="title title-2">
                    {t("advertising.title2")}
                </span>
            </div>
        </div>
    )
}

export default Advertising