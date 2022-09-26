import './character.scss';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const Character = () =>{
    const {t} = useTranslation();
    const [loop,setLoop] = useState(false);
    const videos = {
        characterGif : process.env.PUBLIC_URL + '/videos/character/character-gif.mp4',
        characterLoop: process.env.PUBLIC_URL + '/videos/character/character-loop.mp4',
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoop(true);
        }, 4860);

        return () => clearTimeout(timeout);
    },[loop]);

    return(
        <div className="character">
            <span className="title-main">{t("character.titleMain")}</span>
            <video autoPlay muted loop className={"video"+ (loop ? " " : " hidden")}>
                <source src={videos.characterLoop} type="video/mp4"/>
            </video>
            <video autoPlay muted loop className={"video"+ (loop ? " hidden" : "")}>
                <source src={videos.characterGif} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Character;