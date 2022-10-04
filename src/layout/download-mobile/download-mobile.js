import "./download-mobile.scss";
import { useTranslation } from 'react-i18next';
import {Container} from "react-bootstrap";
import {useState} from "react";
import ModalDownload from "../../components/modal-download/modal-download";


const DownloadMobile = ({windowDimensions}) =>{
    const {t} = useTranslation();
    const images = {
        comingSoonButton : process.env.PUBLIC_URL + "/images/header/coming-soon-button.png",
    };
    const [show, setShow] = useState(false);

    return(
            windowDimensions.width > 767.5 ?
                <></>
                :
                <>
                    <div className="download-mobile hidden-pc" >
                        <Container>
                            <div data-aos="zoom-in"
                                 className="logo-coming-soon"
                                 onClick={()=>setShow(true)}
                                 style={{backgroundImage:`url(${images.comingSoonButton}`}}>
                                <span>{t("header.button")}</span>
                            </div>
                        </Container>
                    </div>

                    <ModalDownload show={show} setShow={setShow}/>
                </>
    )
}

export default DownloadMobile