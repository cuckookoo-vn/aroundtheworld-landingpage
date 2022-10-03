import {useRef} from "react";
import './core-team.scss';
import {Container} from "react-bootstrap";
import CoreTeamMember from "../../components/core-team-member/core-team-member";
import {useTranslation} from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const CoreTeam = ({windowDimensions}) =>{
    const {t} = useTranslation();
    const memberTeam = [
        {
            name: 'Paul Pham',
            position: 'Product Owner',
            image: process.env.PUBLIC_URL + '/images/core-team/paul.png'
        },
        {
            name: 'Felix Nguyen',
            position: 'Executive',
            image: process.env.PUBLIC_URL + '/images/core-team/felix.png'
        },
        {
            name: 'Tony Quach',
            position: 'Executive',
            image: process.env.PUBLIC_URL + '/images/core-team/tony.png'
        },
        {
            name: 'Julie Tran',
            position: 'Business Analysis',
            image: process.env.PUBLIC_URL + '/images/core-team/julie.png'
        },
        {
            name: 'Joy Le',
            position: 'Artist Manager',
            image: process.env.PUBLIC_URL + '/images/core-team/joy.png'
        },
        {
            name: 'Henry Ho',
            position: 'Solution Architect',
            image: process.env.PUBLIC_URL + '/images/core-team/henry.png'
        },
        {
            name: 'Johnny Le',
            position: 'Developer Leader',
            image: process.env.PUBLIC_URL + '/images/core-team/johnny.png'
        },
        {
            name: 'Mr.Kan',
            position: 'AI Leader',
            image: process.env.PUBLIC_URL + '/images/core-team/kan.png'
        },
        {
            name: 'Mr.Thinh',
            position: 'Blockchain Leader',
            image: process.env.PUBLIC_URL + '/images/core-team/thinh.png'
        },
        {
            name: 'GiGi Le',
            position: 'Translator',
            image: process.env.PUBLIC_URL + '/images/core-team/gigi.png'
        },
        {
            name: 'Ivy Pham',
            position: 'Quality Control Leader',
            image: process.env.PUBLIC_URL + '/images/core-team/ivy.png'
        },
        {
            name: 'Leon Nguyen',
            position: 'Senior Artist',
            image: process.env.PUBLIC_URL + '/images/core-team/leon.png'
        },
        {
            name: 'Leo Dinh',
            position: 'Developer',
            image: process.env.PUBLIC_URL + '/images/core-team/leo.png'
        },
        {
            name: 'Finn Le',
            position: 'Developer',
            image: process.env.PUBLIC_URL + '/images/core-team/finn.png'
        },
        {
            name: 'Link Ho',
            position: 'Developer',
            image: process.env.PUBLIC_URL + '/images/core-team/linklee.png'
        },
        {
            name: 'Mr. Van',
            position: 'Blockchain',
            image: process.env.PUBLIC_URL + '/images/core-team/van.png'
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
            <span className="title-main">
                {t("coreTeam.titleMain")}
            </span>

            <Container>
                <div className="box-slide">
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
                        <div ref={prevRef} className="icon-slide icon-next hidden-mobile">
                            <img className="icon-next" src={images.pre} alt="pre"/>
                        </div>
                        <div ref={nextRef} className="icon-slide icon-pre hidden-mobile">
                            <img src={images.next} alt="next"/>
                        </div>
                    </Swiper>

                </div>
            </Container>
        </div>
    )
}

export default CoreTeam;