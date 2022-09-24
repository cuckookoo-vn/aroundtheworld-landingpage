import './header.scss'
import {useState} from "react";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
const Header = () =>{
    const { t } = useTranslation();

    const [statusDocs, setStatusDoc] = useState(false);
    const [statusLang, setStatusLang] = useState(false);
    const [textLang, setTextLang] = useState('Eng');

    const images = {
        bgHeader: process.env.PUBLIC_URL + '/images/header/bg-header.png',
        titleHeader : process.env.PUBLIC_URL + "/images/header/title-header.png",
        logoHeader : process.env.PUBLIC_URL + "/images/header/logo-ckk-header.png",
        comingSoonButton : process.env.PUBLIC_URL + "/images/header/coming-soon-button.png",
        iconSelect : process.env.PUBLIC_URL + "/images/header/icon-select-header.png",
    };

    const setStatusMenu = (status, name) =>{
        if(name === 'docs'){
            setStatusDoc(!status);
        }else if(name === 'lang'){
            setStatusLang(!status);
        }else{
            setStatusDoc(!status);
            setStatusLang(!status);
        }
    };

    const changeLang = (name) =>{
        setTextLang(name);
        setStatusLang(false);
        i18next.changeLanguage(name);
    }

    window.onclick = (event) => {
        if (
            !event.target.matches('.drop-btn-docs') &&
            !event.target.matches('.icon-select-header') &&
            !event.target.matches('.drop-btn-lang')
        ){
            setStatusMenu(true,'full')
        }
    }

    return(
        <div className="header"
             style={{backgroundImage:`url(${images.bgHeader})`}}>

            <img className="title-header"
                 src={images.titleHeader}
                 alt="title-header"/>
            <img className="logo-header"
                 src={images.logoHeader}
                 alt="logo-header"/>

            <div className="dropdown dropdown-docs">
                <button className="drop-btn drop-btn-docs"
                        onClick={()=>setStatusMenu(statusDocs, 'docs')}>
                    {t('menu.docs')}
                    <img className={"icon-select-header" + (statusDocs ? " rotate": "")}
                         src={images.iconSelect} alt="icon-select"/>
                </button>

                <div className={"dropdown-content dropdown-content-docs" + (statusDocs ? " show": "")}>
                    <a className="drop-option"
                       href={"https://www.youtube.com/"} >Pitch Deck</a>
                </div>
            </div>

            <div className="dropdown dropdown-lang">
                <button className="drop-btn drop-btn-lang"
                        onClick={()=>setStatusMenu(statusLang, 'lang')}>
                    {textLang}
                    <img className={"icon-select-header" + (statusLang ? " rotate": "")}
                         src={images.iconSelect} alt="icon-select"/>
                </button>

                <div className={"dropdown-content dropdown-content-lang" + (statusLang ? " show": "")}>
                    <button onClick={()=>changeLang('vn')}
                            className="drop-option">Vietnamese</button>

                    <button onClick={()=>changeLang('ko')}
                            className="drop-option">Korean</button>

                    <button onClick={()=>changeLang('en')}
                            className="drop-option">English</button>
                </div>
            </div>

            <div className="logo-coming-soon"
                 style={{backgroundImage:`url(${images.comingSoonButton}`}}>
                <span>COMING SOON</span>
            </div>
        </div>
    )
}

export default Header;