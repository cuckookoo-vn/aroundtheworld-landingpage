import './video-introduce.scss';

const VideoIntroduce = () =>{
    const videos = {
        videoIntroduce: process.env.PUBLIC_URL + '/videos/video-introduce/video-introduce.mp4'
    }
    return(
        <></>
        // <div className="video-introduce">
        //     <video autoPlay muted loop className="video">
        //         <source src={videos.videoIntroduce} type="video/mp4"/>
        //     </video>
        // </div>
    )
}

export default VideoIntroduce;