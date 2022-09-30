import "./download-mobile.scss";
import { useTranslation } from 'react-i18next';
import {Container} from "react-bootstrap";
import {useState} from "react";
import AlertNotification from "../../components/alert-notification/alert-notification";

let timeOut = null;
const DownloadMobile = () =>{
    const {t} = useTranslation();
    const images = {
        comingSoonButton : process.env.PUBLIC_URL + "/images/header/coming-soon-button.png",
    };

    const [alert, setAlert] = useState(false);
    const setStatusAlert = () =>{
        if(!alert){
            setAlert(true);
            timeOut = setTimeout(()=>{ setAlert(false)},2000);
        }
    }

    const closeAlert = () =>{
        setAlert(false);
        clearTimeout(timeOut);
    }

    return(
        <>
            <div className="download-mobile hidden-pc">
                <Container>
                    <div className="logo-coming-soon"
                         onClick={()=>setStatusAlert()}
                         style={{backgroundImage:`url(${images.comingSoonButton}`}}>
                        <span>{t("header.button")}</span>
                    </div>
                </Container>
            </div>

            <AlertNotification alertStatus={alert} closeAlert={()=>closeAlert()} title={"Download Success"} />
        </>
    )
}

export default DownloadMobile