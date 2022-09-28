import './road-map.scss';
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const RoadMap = () =>{
    const {t} = useTranslation();
    const images = {
        rm1: process.env.PUBLIC_URL + '/images/road-map/rm-1.png',
        rm2: process.env.PUBLIC_URL + '/images/road-map/rm-2.png',
        rm3:process.env.PUBLIC_URL + '/images/road-map/rm-3.png',
    }
    return(
        <div className="road-map">
            <span className="title-main">{t("roadMap.titleMain")}</span>
            <Container>
                <div className="rm-box1">
                    <div className="text-rm1-1 text-rm">
                        <ul>
                            <li>{t('roadMap.rm11.title1')}</li>
                            <li>{t('roadMap.rm11.title2')}</li>
                            <li>{t('roadMap.rm11.title3')}</li>
                        </ul>
                    </div>
                    <div className="text-rm1-2 text-rm">
                        <ul>
                            <li>{t('roadMap.rm12.title1')}</li>
                            <li>{t('roadMap.rm12.title2')}</li>
                            <li>{t('roadMap.rm12.title3')}</li>
                            <li>{t('roadMap.rm12.title4')}</li>
                            <li>{t('roadMap.rm12.title5')}</li>
                            <li>{t('roadMap.rm12.title6')}</li>
                        </ul>
                    </div>
                    <img className="rm1" src={images.rm1} alt="rm1" />
                </div>

                <div className="rm-box2">
                    <div className="text-rm2-1 text-rm">
                        <ul>
                            <li>{t('roadMap.rm21.title1')}</li>
                            <li>{t('roadMap.rm21.title2')}</li>
                            <li>{t('roadMap.rm21.title3')}</li>
                            <li>{t('roadMap.rm21.title4')}</li>
                            <li>{t('roadMap.rm21.title5')}</li>
                            <li>{t('roadMap.rm21.title6')}</li>
                            <li>{t('roadMap.rm21.title7')}</li>
                            <li>{t('roadMap.rm21.title8')}</li>
                        </ul>
                    </div>
                    <div className="text-rm2-2 text-rm">
                        <ul>
                            <li>{t('roadMap.rm22.title1')}</li>
                            <li>{t('roadMap.rm22.title2')}</li>
                            <li>{t('roadMap.rm22.title3')}</li>
                            <li>{t('roadMap.rm22.title4')}</li>
                            <li>{t('roadMap.rm22.title5')}</li>
                            <li>{t('roadMap.rm22.title6')}</li>
                        </ul>
                    </div>
                    <img className="rm2" src={images.rm2} alt="rm2" />
                </div>

                <div className="rm-box3">
                    <div className="text-rm3-1 text-rm">
                        <ul>
                            <li>{t('roadMap.rm31.title1')}</li>
                            <li>{t('roadMap.rm31.title2')}</li>
                            <li>{t('roadMap.rm31.title3')}</li>
                        </ul>
                    </div>
                    <img className="rm3" src={images.rm3} alt="rm3" />
                </div>
            </Container>
        </div>
    )
}

export default RoadMap;