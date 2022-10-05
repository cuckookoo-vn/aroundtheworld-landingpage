import './timeline-vertical.scss';
import {useEffect, useState} from "react";

const TimelineVertical = ({windowDimensions}) =>{

    const [listOffsetTop, setListOffsetTop] = useState([]);
    const listClassSection = ["video-introduce","introduce","key-features","airports","character",
        "items","mini-games","advertising","road-map","core-team"];

    const listClass = ["vertical-video","vertical-introduce","vertical-key-features","vertical-airport","vertical-character",
        "vertical-item","vertical-mini-game","vertical-3d","vertical-roadmap","vertical-core-team"];

    const scrollCLick = (className) =>{
        let getClass = document.getElementsByClassName(className)[0];
        window.scrollTo(0, getClass.offsetTop);
    }

    const removeActive = () =>{
        listClass.forEach((element)=>{
            let getClass = document.getElementsByClassName(element)[0];
            if(getClass.classList.contains("active")){
                getClass.classList.remove("active");
            }
        })
    }

    useEffect(() => {
        let listClassElement = [];
        listClassSection.forEach((element)=>{
            listClassElement.push(document.getElementsByClassName(element)[0])
        });
        setListOffsetTop(listClassElement);

        const onScroll = () => {
            listOffsetTop.forEach((element, index)=>{
                let getClassItem = document.getElementsByClassName(listClass[index])[0];
                if(window.pageYOffset + element.offsetHeight/2 > element.offsetTop){
                    if(!getClassItem.classList.contains("active")){
                        removeActive()
                        getClassItem.classList.add("active");
                        return;
                    }
                }
            })
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [document.getElementsByClassName('video-introduce')[0]]);

    return(
        <div className="timeline-vertical">
            <ul>
                <li className="vertical-timeline vertical-video"
                    onClick={()=>scrollCLick(listClassSection[0])}>
                    <span>Introduce Video</span>
                </li>
                <li className="vertical-timeline vertical-introduce"
                    onClick={()=>scrollCLick(listClassSection[1])}>
                    <span>Introduce</span>
                </li>
                <li className="vertical-timeline vertical-key-features"
                    onClick={()=>scrollCLick(listClassSection[2])}>
                    <span>Key Features</span>
                </li>
                <li className="vertical-timeline vertical-airport"
                    onClick={()=>scrollCLick(listClassSection[3])}>
                    <span>Airports</span>
                </li>
                <li className="vertical-timeline vertical-character"
                    onClick={()=>scrollCLick(listClassSection[4])}>
                    <span>Character</span>
                </li>
                <li className="vertical-timeline vertical-item"
                    onClick={()=>scrollCLick(listClassSection[5])}>
                    <span>Items</span>
                </li>
                <li className="vertical-timeline vertical-mini-game"
                    onClick={()=>scrollCLick(listClassSection[6])}>
                    <span>Mini Games</span>
                </li>
                <li className="vertical-timeline vertical-3d"
                    onClick={()=>scrollCLick(listClassSection[7])}>
                    <span>3D Billboard Advertising</span>
                </li>
                <li className="vertical-timeline vertical-roadmap"
                    onClick={()=>scrollCLick(listClassSection[8])}>
                    <span>Roadmap</span>
                </li>
                <li className="vertical-timeline vertical-core-team"
                    onClick={()=>scrollCLick(listClassSection[9])}>
                    <span>Core Team</span>
                </li>
            </ul>
        </div>
    )
}

export default TimelineVertical;