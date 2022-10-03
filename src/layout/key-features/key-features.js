import "./key-features.scss";
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import KeyFeaturesItem from "../../components/key-features-item/key-features-item";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const KeyFeatures = () =>{
    const {t} = useTranslation();
    const images = {
        bgKeyFeatures :  process.env.PUBLIC_URL + '/images/key-features/bg-key-features.png',
    }

    const featuresItem = [
        {
            titleMain: t("keyFeatures.items1.titleMain"),
            title: t("keyFeatures.items1.title"),
            delay: "0",
        },
        {
            titleMain: t("keyFeatures.items2.titleMain"),
            title: t("keyFeatures.items2.title"),
            delay: "200",
        },
        {
            titleMain: t("keyFeatures.items3.titleMain"),
            title: t("keyFeatures.items3.title"),
            delay: "400",
        },
        {
            titleMain: t("keyFeatures.items4.titleMain"),
            title: t("keyFeatures.items4.title"),
            delay: "0",
        },
        {
            titleMain: t("keyFeatures.items5.titleMain"),
            title: t("keyFeatures.items5.title"),
            delay: "4000",
        },
        {
            titleMain: t("keyFeatures.items6.titleMain"),
            title: t("keyFeatures.items6.title"),
            delay: "400",
        }
    ]
    console.log(featuresItem)

    return(
        <div className="key-features" style={{backgroundImage: `url(${images.bgKeyFeatures})`}}>
            <Container>
                <span className="title-main">{t("keyFeatures.titleMain")}</span>
                <div className="key-features-box hidden-mobile">
                    {featuresItem.map((element, index)=>
                        <KeyFeaturesItem key={index}
                                         titleMain={element.titleMain} title={element.title}/>
                    )}
                </div>
                <div className="key-features-box hidden-pc">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Navigation]}
                    >

                        {featuresItem.map((element, index)=>
                            <SwiperSlide key={index}>
                                <KeyFeaturesItem titleMain={element.titleMain} title={element.title} delay={element.delay}/>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default KeyFeatures;