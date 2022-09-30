import './airports.scss';
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useEffect, useRef, useState} from "react";
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const Airports = () =>{
    const {t} = useTranslation();

    const images = {
        chales: process.env.PUBLIC_URL + '/images/airports/chales-de-gaulex.png',
        chales1: process.env.PUBLIC_URL + '/images/airports/chales-de-gaulex-1.png',
        chales2: process.env.PUBLIC_URL + '/images/airports/chales-de-gaulex-2.png',
        chales3: process.env.PUBLIC_URL + '/images/airports/chales-de-gaulex-3.png',
        changi: process.env.PUBLIC_URL + '/images/airports/changi.png',
        changi1: process.env.PUBLIC_URL + '/images/airports/changi-1.png',
        changi2: process.env.PUBLIC_URL + '/images/airports/changi-2.png',
        changi3: process.env.PUBLIC_URL + '/images/airports/changi-3.png',
        incheon: process.env.PUBLIC_URL + '/images/airports/incheon.png',
        incheon1: process.env.PUBLIC_URL + '/images/airports/incheon-1.png',
        incheon2: process.env.PUBLIC_URL + '/images/airports/incheon-2.png',
        incheon3: process.env.PUBLIC_URL + '/images/airports/incheon-3.png',
        kansai: process.env.PUBLIC_URL + '/images/airports/kansai.png',
        kansai1: process.env.PUBLIC_URL + '/images/airports/kansai-1.png',
        kansai2: process.env.PUBLIC_URL + '/images/airports/kansai-2.png',
        kansai3: process.env.PUBLIC_URL + '/images/airports/kansai-3.png',
    }

    const [incheon, setIncheon] = useState(images.incheon);
    const [kansai, setKansai] = useState(images.kansai);
    const [changi, setChangi] = useState(images.changi);
    const [chales, setChales] = useState(images.chales);
    const numberRef = useRef(1);

    useEffect(() => {
       const image = setInterval(() => {
            if(numberRef.current === 1){
                setIncheon(images.incheon)
                setKansai(images.kansai)
                setChangi(images.changi)
                setChales(images.chales)
                numberRef.current = 2
                return;
            }else if(numberRef.current === 2){
                setIncheon(images.incheon1)
                setKansai(images.kansai1)
                setChangi(images.changi1)
                setChales(images.chales1)
                numberRef.current = 3
                return;
            }else if(numberRef.current === 3){
                setIncheon(images.incheon2)
                setKansai(images.kansai2)
                setChangi(images.changi2)
                setChales(images.chales2)
                numberRef.current = 4
                return;
            }else{
                setIncheon(images.incheon3)
                setKansai(images.kansai3)
                setChangi(images.changi3)
                setChales(images.chales3)
                numberRef.current = 1
                return;
            }
        }, 3000);
        return () => {
            clearInterval(image);
        };
    },[]);

    return(
        <div className="airports">
            <Container>
                <div className="title-main">{t('airports.titleMain')}</div>
                <div className="box-image hidden-mobile">
                    <Row>
                        <Col xs={6} lg={6}>
                            <div className="box-item">
                                <span>{t("airports.nameAirportKorea")}</span>
                                <img src={incheon} alt="chales"/>
                            </div>

                        </Col>
                        <Col xs={6} lg={6}>
                            <div className="box-item">
                                <span>{t("airports.nameAirportJapan")}</span>
                                <img src={kansai} alt="ap2"/>
                            </div>
                        </Col>
                        <Col xs={6} lg={6}>
                            <div className="box-item">
                                <span>{t("airports.nameAirportSingapore")}</span>
                                <img src={changi} alt="ap3"/>
                            </div>

                        </Col>
                        <Col xs={6} lg={6}>
                            <div className="box-item">
                                <span>{t("airports.nameAirportFrance")}</span>
                                <img src={chales} alt="ap4"/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="box-image hidden-pc">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        slidesPerGroup={1}
                        autoplay={true}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="box-item">
                                <span>{t("airports.nameAirportKorea")}</span>
                                <img src={incheon} alt="chales"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box-item">
                                <span>{t("airports.nameAirportKorea")}</span>
                                <img src={kansai} alt="ap2"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box-item">
                                <span>{t("airports.nameAirportKorea")}</span>
                                <img src={changi} alt="ap3"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box-item">
                                <span>{t("airports.nameAirportKorea")}</span>
                                <img src={chales} alt="ap4"/>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </Container>
        </div>
    )
}
export default Airports;