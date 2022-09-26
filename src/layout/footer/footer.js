import './footer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
const Footer = () =>{
    const { t } = useTranslation();

    const images = {
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
            <Container fluid>
                <Row>
                    <Col lg="12">
                        <span className="title-footer title-main-footer">{t('footer.contactUs')}</span>
                    </Col>
                    <Col lg="12">
                        <span className="title-footer email-footer">cuckookoo.@gmail.com</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="box-icon">
                            <a href="https://www.youtube.com/">
                                <img src={images.MIconFooter}
                                     alt="m-icon"/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src={images.RIconFooter}
                                     alt="r-icon"/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src={images.PIconFooter}
                                     alt="p-icon"/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src={images.BIconFooter}
                                     alt="b-icon"/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src={images.YIconFooter}
                                     alt="y-icon"/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src={images.CIconFooter}
                                     alt="c-icon"/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src={images.FIconFooter}
                                     alt="f-icon"/>
                            </a>
                            <a href="https://www.youtube.com/">
                                <img src={images.FFIconFooter}
                                     alt="ff-icon"/>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;