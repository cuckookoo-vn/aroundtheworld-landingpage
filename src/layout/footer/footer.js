import './footer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
const Footer = () =>{
    const { t } = useTranslation();

    const images = {
        chainos: process.env.PUBLIC_URL + '/images/footer/chainos.png',
        cuckookoo: process.env.PUBLIC_URL + '/images/footer/cuckookoo.png',
        bgFooter: process.env.PUBLIC_URL + '/images/footer/bg-footer.png',
        MIconFooter: process.env.PUBLIC_URL + '/images/footer/m-footer.png',
        RIconFooter: process.env.PUBLIC_URL + '/images/footer/r-footer.png',
        PIconFooter: process.env.PUBLIC_URL + '/images/footer/p-footer.png',
        BIconFooter: process.env.PUBLIC_URL + '/images/footer/b-footer.png',
        YIconFooter: process.env.PUBLIC_URL + '/images/footer/y-footer.png',
        CIconFooter: process.env.PUBLIC_URL + '/images/footer/c-footer.png',
        FIconFooter: process.env.PUBLIC_URL + '/images/footer/f-footer.png',
        FFIconFooter: process.env.PUBLIC_URL + '/images/footer/ff-footer.png',
    }

    return(
        <div className="footer"
             style={{backgroundImage:`url(${images.bgFooter})`}}>
            <Container>
                <div className="box-logo" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="logo-cuckookoo">
                        <a href="">
                            <img src={images.cuckookoo} alt="icon-cuckookoo"/>
                        </a>
                    </div>
                    <div className="logo-chainos">
                        <a href="">
                            <img src={images.chainos} alt="icon-chainos"/>
                        </a>
                    </div>
                </div>

                <Row>
                    <Col lg="12">
                        <span data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom"
                              delay="0"
                              className="title-footer title-main-footer">
                            {t('footer.contactUs')}
                        </span>
                    </Col>
                    <Col lg="12">
                        <span data-aos="fade-up"
                              data-aos-anchor-placement="top-bottom"
                              delay="0"
                              className="title-footer email-footer">
                            aroundtheworld@cuckookoo.vn
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;