import './advertising.scss'
import {useTranslation} from "react-i18next";

const Advertising = ({windowDimensions}) =>{
    const images = {
        bgAdvertising :  process.env.PUBLIC_URL + '/images/advertising/bg-advertising.png',
        bgAdvertisingMobile :  process.env.PUBLIC_URL + '/images/advertising/bg-advertising-mobile.png',
    }
    const {t} = useTranslation();

    return(
        <div className="advertising">
            <span className="title-main">{t("advertising.titleMain")}</span>
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