import "./download-mobile.scss";
import { useTranslation } from 'react-i18next';
import {Container} from "react-bootstrap";
import {useState} from "react";
import ModalDownload from "../../components/modal-download/modal-download";


const DownloadMobile = () =>{
    const {t} = useTranslation();
    const images = {
        comingSoonButton : process.env.PUBLIC_URL + "/images/header/coming-soon-button.png",
    };
    const [show, setShow] = useState(false);

    return(
        <>
            <div className="download-mobile hidden-pc">
                <Container>
                    <div className="logo-coming-soon"
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