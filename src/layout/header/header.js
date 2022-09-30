import './header.scss'
import {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import {Container} from "react-bootstrap";
import AlertNotification from "../../components/alert-notification/alert-notification";

let timeOut = null;
const Header = () =>{
    const { t } = useTranslation();
    const [statusLang, setStatusLang] = useState(false);
    const [textLang, setTextLang] = useState('ENGLISH');
    const [alert, setAlert] = useState(false);
    const [bgHeader , setBgHeader] = useState("");

    const images = {
        bgHeader: process.env.PUBLIC_URL + '/images/header/bg-header.png',
        titleHeader : process.env.PUBLIC_URL + "/images/header/title-header.png",
        logoHeader : process.env.PUBLIC_URL + "/images/header/logo-ckk-header.png",
        comingSoonButton : process.env.PUBLIC_URL + "/images/header/coming-soon-button.png",
        iconSelect : process.env.PUBLIC_URL + "/images/header/icon-select-header.png",
    };

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

    const setStatusMenu = (status) =>{
        setStatusLang(!status);
    };

    const changeLang = (name) =>{
        i18next.changeLanguage(name);
        let lang = t("header."+ name);
        setTextLang(lang);
        setStatusLang(false);
    }

    window.onclick = (event) => {
        if (
            !event.target.matches('.drop-btn-docs') &&
            !event.target.matches('.icon-select-header') &&
            !event.target.matches('.drop-btn-lang')
        ){
            setStatusMenu(true)
        }
    }

    useEffect(() => {
        const onScroll = () => {
            if(window.pageYOffset > document.getElementById("video-introduce").offsetHeight){
                setBgHeader(images.bgHeader);
            }else {
                setBgHeader("");
            }
        }
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <>
            <div className="header"
                 style={{backgroundImage:`url(${bgHeader})`}}>
                <img className="title-header"
                     src={images.titleHeader}
                     alt="title-header"/>
                <Container>
                    <div className="logo-coming-soon"
                         onClick={()=>setStatusAlert()}
                         style={{backgroundImage:`url(${images.comingSoonButton}`}}>
                        <span>{t("header.button")}</span>
                    </div>

                    <div className="dropdown dropdown-lang">
                        <button className="drop-btn drop-btn-lang"
                                onClick={()=>setStatusMenu(statusLang)}>
                            {textLang}
                            <img className={"icon-select-header" + (statusLang ? " rotate": "")}
                                 src={images.iconSelect} alt="icon-select"/>
                        </button>

                        <div className={"dropdown-content dropdown-content-lang" + (statusLang ? " show": "")}>
                            <button onClick={()=>changeLang('en')}
                                    className="drop-option">{t("header.en")}</button>
                            <button onClick={()=>changeLang('ko')}
                                    className="drop-option">{t("header.ko")}</button>
                            <button onClick={()=>changeLang('vn')}
                                    className="drop-option">{t("header.vn")}</button>
                        </div>
                    </div>
                </Container>
            </div>

            <AlertNotification alertStatus={alert} closeAlert={()=>closeAlert()} title={"Download Success"} />
        </>
    )
}

export default Header;