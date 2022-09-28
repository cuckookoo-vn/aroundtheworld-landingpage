import './items.scss';
import {useTranslation} from "react-i18next";

const Items = () =>{
    const {t} = useTranslation();
    const videos = {
        items: process.env.PUBLIC_URL + '/videos/items/items.mp4'
    }

    return(
        <div className="items">
            <span className="title-main">{t("items.titleMain")}</span>
            <video autoPlay muted loop className="video">
                <source src={videos.items} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Items