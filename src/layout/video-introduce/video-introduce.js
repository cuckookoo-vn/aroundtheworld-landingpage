import './video-introduce.scss';

const VideoIntroduce = () =>{
    return(
        <div className="video-introduce" id="video-introduce">
            <video autoPlay muted loop className="video">
                <source
                    src="https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/AroundTheWould_Cuckookoo_VideoProposal_v6_ncs.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export default VideoIntroduce;