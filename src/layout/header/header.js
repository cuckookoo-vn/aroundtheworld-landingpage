import './header.scss'
import {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import {Container} from "react-bootstrap";
import ModalDownload from "../../components/modal-download/modal-download";


const Header = () =>{
    const { t } = useTranslation();
    const images = {
        bgHeader: process.env.PUBLIC_URL + '/images/header/bg-header.png',
        titleHeader : process.env.PUBLIC_URL + "/images/header/title-header.png",
        logoHeader : process.env.PUBLIC_URL + "/images/header/logo-ckk-header.png",
        comingSoonButton : process.env.PUBLIC_URL + "/images/header/coming-soon-button.png",
        iconSelect : process.env.PUBLIC_URL + "/images/header/icon-select-header.png",
        flagEngland : process.env.PUBLIC_URL + "/images/header/england-flag.jpg",
        flagVietnam : process.env.PUBLIC_URL + "/images/header/vietnam-flag.jpg",
        flagKorean: process.env.PUBLIC_URL + "/images/header/korea-flag.jpg",
    };

    const [statusLang, setStatusLang] = useState(false);
    const [textLang, setTextLang] = useState('ENGLISH');

    const [bgHeader , setBgHeader] = useState("");
    const [flag, setFlag] = useState(images.flagEngland);

    const [show, setShow] = useState(false);




    const setStatusMenu = (status) =>{
        setStatusLang(!status);
    };

    const changeLang = (name) =>{
        i18next.changeLanguage(name);
        let lang = t("header."+ name);
        setTextLang(lang);
        if(name === "ko"){
            setFlag(images.flagKorean)
        }else if(name === "vn"){
            setFlag(images.flagVietnam)
        }else{
            setFlag(images.flagEngland)
        }
        setStatusLang(false);
    }

    window.onclick = (event) => {
        if (
            !event.target.matches('.flag') &&
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
                 data-aos="fade-down"
                 data-aos-anchor-placement="top-top"
                 style={{backgroundImage:`url(${bgHeader})`}}>
                <img className="title-header"
                     src={images.titleHeader}
                     alt="title-header"/>

                <Container>
                    <div className="logo-coming-soon"
                         onClick={()=>setShow(true)}
                         style={{backgroundImage:`url(${images.comingSoonButton}`}}>
                        <span>{t("header.button")}</span>
                    </div>

                    <div className="dropdown dropdown-lang">
                        <button className="drop-btn drop-btn-lang"
                                onClick={()=>setStatusMenu(statusLang)}>
                            <img className="flag" src={flag} alt="flag-england"/>
                            {textLang}
                            <img className={"icon-select-header" + (statusLang ? " rotate": "")}
                                 src={images.iconSelect} alt="icon-select"/>
                        </button>

                        <div className={"dropdown-content dropdown-content-lang" + (statusLang ? " show": "")}>
                            <button onClick={()=>changeLang('en')}
                                    className="drop-option">
                                <img className="flag-option" src={images.flagEngland} alt="flag-english"/>
                                {t("header.en")}
                            </button>
                            <button onClick={()=>changeLang('ko')}
                                    className="drop-option">
                                <img className="flag-option" src={images.flagKorean} alt="flag-korean"/>
                                {t("header.ko")}
                            </button>
                            <button onClick={()=>changeLang('vn')}
                                    className="drop-option">
                                <img className="flag-option" src={images.flagVietnam} alt="flag-vietnam"/>
                                {t("header.vn")}
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
            <ModalDownload show={show} setShow={setShow}/>
        </>
    )
}

export default Header;