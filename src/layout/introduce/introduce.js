import './introduce.scss';
import {useTranslation} from "react-i18next";

const Introduce = () =>{
    const { t } = useTranslation();

    const images = {
        bgIntroduce: process.env.PUBLIC_URL + '/images/introduce/bg-introduce.png',
        introduceFrame: process.env.PUBLIC_URL + '/images/introduce/box-key-features.png'
    }
    return(
        <div className="introduce" style={{backgroundImage: `url(${images.bgIntroduce})`}}>
            <div className="introduce-content" style={{backgroundImage: `url(${images.introduceFrame})`}}>
                <span className="introduce-text">
                    <span className="introduce-text-main">
                    {t('introduce.titleMain')}</span>{t('introduce.title1')}
                    <br/><br/>
                    {t('introduce.title2')}
                </span>
            </div>
        </div>
    )
}

export default Introduce;