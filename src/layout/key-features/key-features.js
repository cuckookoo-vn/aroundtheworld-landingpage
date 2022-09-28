import "./key-features.scss";
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import KeyFeaturesItem from "../../components/key-features-item/key-features-item";

const KeyFeatures = () =>{
    const {t} = useTranslation();
    const images = {
        bgKeyFeatures :  process.env.PUBLIC_URL + '/images/key-features/bg-key-features.png',
    }

    const featuresItem = [
        {
            titleMain: t("keyFeatures.items1.titleMain"),
            title: t("keyFeatures.items1.title"),
        },
        {
            titleMain: t("keyFeatures.items2.titleMain"),
            title: t("keyFeatures.items2.title"),
        },
        {
            titleMain: t("keyFeatures.items3.titleMain"),
            title: t("keyFeatures.items3.title"),
        },
        {
            titleMain: t("keyFeatures.items4.titleMain"),
            title: t("keyFeatures.items4.title"),
        },
        {
            titleMain: t("keyFeatures.items5.titleMain"),
            title: t("keyFeatures.items5.title"),
        },
        {
            titleMain: t("keyFeatures.items6.titleMain"),
            title: t("keyFeatures.items6.title"),
        }
    ]

    return(
        <div className="key-features" style={{backgroundImage: `url(${images.bgKeyFeatures})`}}>
            <Container>
                <span className="title-main">{t("keyFeatures.titleMain")}</span>
                <div className="key-features-box">
                    {featuresItem.map((element, index)=>
                        <KeyFeaturesItem key={index}
                                         titleMain={element.titleMain} title={element.title}/>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default KeyFeatures;