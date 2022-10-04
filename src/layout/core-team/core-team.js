import {useRef} from "react";
import './core-team.scss';
import {Container} from "react-bootstrap";
import CoreTeamMember from "../../components/core-team-member/core-team-member";
import {useTranslation} from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const CoreTeam = ({windowDimensions}) =>{
    const {t} = useTranslation();
    const urlImage = "https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/imgs/landingpage/lp-core-member/lp-core-member-"
    const memberTeam = [
        {
            name: 'Paul Pham',
            position: 'Product Owner',
            image: urlImage+ "1.png"
        },
        {
            name: 'Felix Nguyen',
            position: 'Executive',
            image: urlImage+ "2.png"
        },
        {
            name: 'Tony Quach',
            position: 'Executive',
            image: urlImage+ "3.png"
        },
        {
            name: 'Julie Tran',
            position: 'Business Analysis',
            image: urlImage+ "4.png"
        },
        {
            name: 'Joy Le',
            position: 'Artist Manager',
            image: urlImage+ "5.png"
        },
        {
            name: 'Henry Ho',
            position: 'Solution Architect',
            image: urlImage+ "6.png"
        },
        {
            name: 'Johnny Le',
            position: 'Developer Leader',
            image: urlImage+ "7.png"
        },
        {
            name: 'Mr.Kan',
            position: 'AI Leader',
            image: urlImage+ "8.png"
        },
        {
            name: 'Mr.Thinh',
            position: 'Blockchain Leader',
            image: urlImage+ "9.png"
        },
        {
            name: 'GiGi Le',
            position: 'Translator',
            image: urlImage+ "10.png"
        },
        {
            name: 'Ivy Pham',
            position: 'Quality Control Leader',
            image: urlImage+ "11.png"
        },
        {
            name: 'Leon Nguyen',
            position: 'Senior Artist',
            image: urlImage+ "12.png"
        },
        {
            name: 'Leo Dinh',
            position: 'Developer',
            image: urlImage+ "13.png"
        },
        {
            name: 'Finn Le',
            position: 'Developer',
            image: urlImage+ "14.png"
        },
        {
            name: 'Link Ho',
            position: 'Developer',
            image: urlImage+ "15.png"
        },
        {
            name: 'Mr. Van',
            position: 'Blockchain',
            image: urlImage+ "16.png"
        },
    ]
    const images = {
        next: process.env.PUBLIC_URL + '/images/template/next.png',
        pre: process.env.PUBLIC_URL + '/images/template/pre.png'
    }

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return(
        <div className="core-team">
            <span className="title-main" data-aos="fade-up">
                {t("coreTeam.titleMain")}
            </span>

            <Container>
                <div data-aos="fade-up" className="box-slide">
                    <Swiper
                        slidesPerView={windowDimensions.width >767 ? 4 : 3}
                        spaceBetween={windowDimensions.width >767 ? 30 : 5}
                        slidesPerGroup={windowDimensions.width >767 ? 4 : 3}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        loop={true}
                        loopFillGroupWithBlank={false}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                    >
                        <div className="box-member">
                            {memberTeam.map((element, index) =>
                                <SwiperSlide key={index}>
                                    <CoreTeamMember
                                        image={element.image}
                                        name={element.name}
                                        position={element.position}
                                    />
                                </SwiperSlide>
                            )}
                        </div>
                        <div data-aos="fade-right"
                             ref={prevRef}
                             className="icon-slide icon-next hidden-mobile">
                            <img className="icon-next" src={images.pre} alt="pre"/>
                        </div>
                        <div data-aos="fade-left"
                             ref={nextRef}
                             className="icon-slide icon-pre hidden-mobile">
                            <img src={images.next} alt="next"/>
                        </div>
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default CoreTeam;