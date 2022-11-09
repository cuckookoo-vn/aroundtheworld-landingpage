import './footer.scss';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import {useForm} from "react-hook-form";
const Footer = ({windowDimensions}) =>{
    const { t } = useTranslation();

    const images = {
        chainos: process.env.PUBLIC_URL + '/images/footer/chainos.png',
        cuckookoo: process.env.PUBLIC_URL + '/images/footer/cuckookoo.png',
        bgFooter: process.env.PUBLIC_URL + '/images/footer/bg-footer.png',
        bgForm: process.env.PUBLIC_URL + '/images/footer/bg-form.png',
        buttonForm: process.env.PUBLIC_URL + '/images/footer/button-form.png',
        MIconFooter: process.env.PUBLIC_URL + '/images/footer/m-footer.png',
        RIconFooter: process.env.PUBLIC_URL + '/images/footer/r-footer.png',
        PIconFooter: process.env.PUBLIC_URL + '/images/footer/p-footer.png',
        BIconFooter: process.env.PUBLIC_URL + '/images/footer/b-footer.png',
        YIconFooter: process.env.PUBLIC_URL + '/images/footer/y-footer.png',
        CIconFooter: process.env.PUBLIC_URL + '/images/footer/c-footer.png',
        FIconFooter: process.env.PUBLIC_URL + '/images/footer/f-footer.png',
        FFIconFooter: process.env.PUBLIC_URL + '/images/footer/ff-footer.png',
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return(
        <div className="footer" style={{backgroundImage:`url(${images.bgFooter})`}}>
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
            </Container>
            <div className="contract-form-footer" >
                <form className="contract-form"
                      style={{backgroundImage:`url(${images.bgForm})`}}
                      onSubmit={handleSubmit(onSubmit)}>
                    <span className="title">Support</span>

                    <div className="form-input">
                        <span className="title-input">NAME:</span>
                        <input
                            {...register("name", {
                                required: true,
                            })}
                        />
                        {errors?.name?.type === "required" &&
                            <p className="text-error">This field is required</p>
                        }
                    </div>

                    <div className="form-input">
                        <span className="title-input">EMAIL:</span>
                        <input
                            {...register("email", {
                                required: true,
                            })}
                        />
                    </div>

                    <div className="form-input">
                        <span className="title-input">MESSAGE:</span>
                        <textarea/>
                    </div>

                    <button type="submit"
                            className="button-submit"
                            style={{backgroundImage:`url(${images.buttonForm})`}}>
                        Submit
                    </button>
                </form>
            </div>

            <div className="contract">
                <div className="contract-box">
                    <div className="google-map">
                        <iframe
                            className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6873595234088!2d106.66678431524116!3d10.835220361067488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a9e817e8db%3A0xc5f7b6893d7a3ec6!2zODIgxJAuIFPhu5EgNiwgUGjGsOG7nW5nIDEwLCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1667975602005!5m2!1svi!2s"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <span className="title">Address: No.82 Street 6, City Land Park Hills Residential Area, Ward 10, Go Vap District, Ho Chi Minh City</span>
                    </div>

                    <div className="contract-title-box"
                         data-aos={windowDimensions.width > 768.5 ? "fade-up" : ""}
                         data-aos-anchor-placement={windowDimensions.width > 768.5 ? "top-bottom" : ""}>
                        <span className="title-footer title-main-footer">
                            {t('footer.contactUs')}
                        </span>
                        <span className="title-footer email-footer">
                            aroundtheworld@cuckookoo.vn
                        </span>
                    </div>
                </div>
            </div>

            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Footer;