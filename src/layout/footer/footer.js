import './footer.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Container} from "react-bootstrap";
const Footer = () =>{
    const images = {
        bgFooter: process.env.PUBLIC_URL + '/images/bg-footer.png',
        MIconFooter: process.env.PUBLIC_URL + '/images/m-footer.png',
        RIconFooter: process.env.PUBLIC_URL + '/images/r-footer.png',
        PIconFooter: process.env.PUBLIC_URL + '/images/p-footer.png',
        BIconFooter: process.env.PUBLIC_URL + '/images/b-footer.png',
        YIconFooter: process.env.PUBLIC_URL + '/images/y-footer.png',
        CIconFooter: process.env.PUBLIC_URL + '/images/c-footer.png',
        FIconFooter: process.env.PUBLIC_URL + '/images/f-footer.png',
        FFIconFooter: process.env.PUBLIC_URL + '/images/ff-footer.png',
    }

    return(
        <div className="footer"
             style={{backgroundImage:`url(${images.bgFooter})`}}>
            <Container fluid>
                <Row>
                    <Col lg="12">
                        <span className="title-footer title-main-footer">Contact us</span>
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