import './header.scss'

const Header = () =>{
    const images = {
        bgHeader: process.env.PUBLIC_URL + '/images/bg-header.png',
        titleHeader : process.env.PUBLIC_URL + "/images/title-header.png",
        logoHeader : process.env.PUBLIC_URL + "/images/logo-ckk-header.png",
        comingSoonButton : process.env.PUBLIC_URL + "/images/coming-soon-button.png",
        iconSelect : process.env.PUBLIC_URL + "/images/icon-select-header.png",
    }

    return(
        <div className="header" style={{backgroundImage:`url(${images.bgHeader})`}}>
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
                <button className="drop-btn drop-btn-docs">
                    Docs
                    <img src={images.iconSelect} alt="icon-select"/>
                </button>
                <div className="dropdown-content dropdown-content-docs">
                    <a className="drop-option" href="#">Pitch Deck</a>
                </div>
            </div>

            <div className="dropdown dropdown-eng">
                <button className="drop-btn drop-btn-eng">
                    Eng
                    <img src={images.iconSelect} alt="icon-select"/>
                </button>
                <div className="dropdown-content dropdown-content-eng">
                    <button className="drop-option">Vietnamese</button>
                    <button className="drop-option">Korean</button>
                    <button className="drop-option">Engish</button>
                </div>
            </div>

            <div style={{backgroundImage:`url(${images.comingSoonButton}`}}>
                Coming Soon
            </div>
        </div>
    )
}

export default Header;