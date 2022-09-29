import "./download-mobile.scss";
import { useTranslation } from 'react-i18next';
import {Container} from "react-bootstrap";

const DownloadMobile = () =>{
    const {t} = useTranslation();
    const images = {
        comingSoonButton : process.env.PUBLIC_URL + "/images/header/coming-soon-button.png",
    };
    return(
        <div className="download-mobile hidden-pc">
            <Container>
            <div className="logo-coming-soon"
                 style={{backgroundImage:`url(${images.comingSoonButton}`}}>
                <span>{t("header.button")}</span>
            </div>
            </Container>
        </div>
    )
}

export default DownloadMobile