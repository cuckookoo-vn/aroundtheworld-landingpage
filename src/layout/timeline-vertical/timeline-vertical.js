import './timeline-vertical.scss';
import {useEffect} from "react";

const TimelineVertical = ({windowDimensions}) =>{
    const listOffsetTop = {
        videoIntroduce: document.getElementsByClassName('video-introduce')[0],
        introduce: document.getElementsByClassName('introduce')[0],
        keyFeatures: document.getElementsByClassName('key-features')[0],
        airports: document.getElementsByClassName('airports')[0],
        character: document.getElementsByClassName('character')[0],
        items: document.getElementsByClassName('items')[0],
        miniGames: document.getElementsByClassName('mini-games')[0],
        advertising: document.getElementsByClassName('advertising')[0],
        roadMap: document.getElementsByClassName('road-map')[0],
        coreTeam: document.getElementsByClassName('core-team')[0]
    };
    useEffect(() => {
        const onScroll = () => {
            // console.log(window.pageYOffset + windowDimensions.height/2)
        }
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <div className="timeline-vertical">
            <ul>
                <li>
                    <span>Introduce Video</span>
                </li>
                <li>
                    <span>Introduce</span>
                </li>
                <li>
                    <span>Key Features</span>
                </li>
                <li>
                    <span>Airports</span>
                </li>
                <li>
                    <span>Character</span>
                </li>
                <li>
                    <span>Items</span>
                </li>
                <li>
                    <span>Mini Games</span>
                </li>
                <li>
                    <span>3D Billboard Advertising</span>
                </li>
                <li>
                    <span>Roadmap</span>
                </li>
                <li>
                    <span>Core Team</span>
                </li>
            </ul>
        </div>
    )
}

export default TimelineVertical;