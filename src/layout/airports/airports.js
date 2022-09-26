import './airports.scss';
import {Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Airports = () =>{
    const {t} = useTranslation();
    const images = {
        ap1: process.env.PUBLIC_URL + '/images/airports/ap1.png',
        ap2: process.env.PUBLIC_URL + '/images/airports/ap2.png',
        ap3: process.env.PUBLIC_URL + '/images/airports/ap3.png',
        ap4: process.env.PUBLIC_URL + '/images/airports/ap4.png',
    }
    return(
        <div className="airports">
            <Container>
                <div className="title-main">{t('airports.titleMain')}</div>
                <div className="box-image">
                    <Row>
                        <Col xs={6} lg={6}><img src={images.ap1} alt="ap1"/></Col>
                        <Col xs={6} lg={6}><img src={images.ap2} alt="ap2"/></Col>
                        <Col xs={6} lg={6}><img src={images.ap3} alt="ap3"/></Col>
                        <Col xs={6} lg={6}><img src={images.ap4} alt="ap4"/></Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
export default Airports;