import './header.scss'
import {useState} from "react";


const Header = () =>{
    const [statusDocs, setStatusDoc] = useState(false);
    const [statusLang, setStatusLang] = useState(false);
    const [textLang, setTextLang] = useState('Eng');
    const images = {
        bgHeader: process.env.PUBLIC_URL + '/images/bg-header.png',
        titleHeader : process.env.PUBLIC_URL + "/images/title-header.png",
        logoHeader : process.env.PUBLIC_URL + "/images/logo-ckk-header.png",
        comingSoonButton : process.env.PUBLIC_URL + "/images/coming-soon-button.png",
        iconSelect : process.env.PUBLIC_URL + "/images/icon-select-header.png",
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
    }

    window.onclick = function (){
        setStatusMenu(true,'full')
    }

    return(
        <div className="header"
             style={{backgroundImage:`url(${images.bgHeader})`}}
        >
            <img
                className="title-header"
                src={images.titleHeader}
                alt="title-header"
            />
            <img
                className="logo-header"
                src={images.logoHeader}
                alt="logo-header"
            />

            <div className="dropdown dropdown-docs">
                <button className="drop-btn drop-btn-docs" onClick={()=>setStatusMenu(statusDocs, 'lang')}>
                    Docs
                    <img src={images.iconSelect} alt="icon-select"/>
                </button>
                <div className="dropdown-content dropdown-content-docs">
                    <a className="drop-option" href="#">Pitch Deck</a>
                </div>
            </div>

            <div className="dropdown dropdown-eng">
                <button className="drop-btn drop-btn-eng" onClick={()=>setStatusMenu(statusLang, 'lang')}>
                    {textLang}
                    <img src={images.iconSelect} alt="icon-select"/>
                </button>
                <div className="dropdown-content dropdown-content-eng">
                    <button onClick={()=>changeLang('Vn')} className="drop-option">Vietnamese</button>
                    <button onClick={()=>changeLang('Ko')}className="drop-option">Korean</button>
                    <button onClick={()=>changeLang('En')} className="drop-option">English</button>
                </div>
            </div>

            <div className="logo-coming-soon"
                 style={{backgroundImage:`url(${images.comingSoonButton}`}}
            >
                <span>
                    COMING SOON
                </span>
            </div>
        </div>
    )
}

export default Header;