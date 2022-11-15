import './footer.scss';
import {Container} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
const Footer = ({windowDimensions}) =>{
    const { t } = useTranslation();

    const [valueTextarea, setValueTextarea] = useState('');
    const lengthTextarea = 350;

    const changeValueTextarea = (e) =>{
        setValueTextarea(e.target.value);
    }

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
        alert("email đã được gửi");
    };

    return(
        <div className="footer">
            <Container>
                <div className="box-logo">
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
                      data-aos-anchor-placement="bottom-bottom"
                      style={{backgroundImage:`url(${images.bgForm})`}}
                      onSubmit={handleSubmit(onSubmit)}>
                    <span className="title">{t("footer.form.title")}</span>

                    <div className="form-input first">
                        <span className="title-input">
                            {t("footer.form.name")}
                            <span>*</span>:
                        </span>
                        <input
                            {...register("name", {
                                required: true,
                            })}
                        />
                        {errors?.name?.type === "required" &&
                            <p className="text-error">{t("footer.validate.required")}</p>
                        }
                    </div>

                    <div className="form-input">
                        <span className="title-input">
                            {t("footer.form.email")}
                            <span>*</span>:
                        </span>
                        <input
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                }
                            })}
                        />
                        {errors?.email?.type === "required" &&
                            <p className="text-error">{t("footer.validate.required")}</p>
                        }
                        {errors?.email?.type === "pattern" &&
                            <p className="text-error">{t("footer.validate.email")}</p>
                        }
                    </div>

                    <div className="form-input">
                        <span className="title-input">
                            {t("footer.form.message")}
                            <span>*</span>:
                        </span>

                        <textarea
                            maxLength={lengthTextarea}
                            {...register("message", {
                            onChange:(e)=>changeValueTextarea(e),
                            required: true,
                            maxLength: 350
                        })}/>
                        {errors?.message?.type === "required" &&
                            <p className="text-error">{t("footer.validate.required")}</p>
                        }
                        {errors?.message?.type === "maxLength" || valueTextarea.length > lengthTextarea ?
                            <p className="text-error">{t('footer.validate.maxLength355')}</p>:
                            null
                        }

                        <span className="count-text">{valueTextarea.length}/{lengthTextarea}</span>
                    </div>

                    <button type="submit"
                            className="button-submit"
                            style={{backgroundImage:`url(${images.buttonForm})`}}>
                        {t("footer.form.button")}
                    </button>
                </form>
            </div>

            <div className="contract"
                 style={{backgroundImage:`url(${images.bgFooter})`}}>
                <div className="contract-box">
                    <div className="google-map">
                        <iframe
                            className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6873595234088!2d106.66678431524116!3d10.835220361067488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a9e817e8db%3A0xc5f7b6893d7a3ec6!2zODIgxJAuIFPhu5EgNiwgUGjGsOG7nW5nIDEwLCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1667975602005!5m2!1svi!2s"
                            allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                        {
                            windowDimensions.width > 767.5 ?
                            <div className="title-address-box">
                                <span className="title-address">{t("footer.titleAddress")}</span>
                                <span className="title">{t("footer.address")}</span>
                            </div>
                                :
                            <div className="title-address-box">
                                <span className="title-address-mobile">{t("footer.titleAddress")}: {t("footer.address")}</span>
                            </div>
                        }


                    </div>

                    <div className="contract-title-box">
                        <span className="title-footer title-main-footer">
                            {t('footer.contactUs')}
                        </span>
                        <span className="title-footer email-footer">
                            {t("footer.email")}: aroundtheworld@cuckookoo.vn
                        </span>
                        <span className="title-footer email-phone">
                            {t("footer.phoneNumber")}: 0336 111 248
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