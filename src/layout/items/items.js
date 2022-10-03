import './items.scss';
import {useTranslation} from "react-i18next";

const Items = ({windowDimensions}) =>{
    const {t} = useTranslation();
    return(
        <div className="items">
            <span className="title-main">{t("items.titleMain")}</span>
            {
                windowDimensions > 767.5 ?
                    <video autoPlay muted loop className="video hidden-mobile">
                        <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_items_web.mp4" type="video/mp4"/>
                    </video>
                    :
                    <video autoPlay muted loop className="video hidden-pc">
                        <source src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/video/artw_ckk_items_mobile.mp4" type="video/mp4"/>
                    </video>
            }
        </div>
    )
}

export default Items