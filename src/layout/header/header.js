import './header.scss'
import {useState} from "react";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import {Container} from "react-bootstrap";
const Header = () =>{
    const { t } = useTranslation();
    const [statusLang, setStatusLang] = useState(false);
    const [textLang, setTextLang] = useState('ENGLISH');

    const images = {
        bgHeader: process.env.PUBLIC_URL + '/images/header/bg-header.png',
        titleHeader : process.env.PUBLIC_URL + "/images/header/title-header.png",
        logoHeader : process.env.PUBLIC_URL + "/images/header/logo-ckk-header.png",
        comingSoonButton : process.env.PUBLIC_URL + "/images/header/coming-soon-button.png",
        iconSelect : process.env.PUBLIC_URL + "/images/header/icon-select-header.png",
    };

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

    return(
        <div className="header"
             style={{backgroundImage:`url(${images.bgHeader})`}}>
            <img className="title-header"
                 src={images.titleHeader}
                 alt="title-header"/>
            <Container>
                <div className="logo-coming-soon"
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
                        <button onClick={()=>changeLang('vn')}
                                className="drop-option">{t("header.vn")}</button>

                        <button onClick={()=>changeLang('ko')}
                                className="drop-option">{t("header.ko")}</button>

                        <button onClick={()=>changeLang('en')}
                                className="drop-option">{t("header.en")}</button>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Header;