import './video-introduce.scss';

const VideoIntroduce = () =>{
    const srcDefault = "https://aroundtheworld.s3.ap-southeast-1.amazonaws.com/AroundTheWould_Cuckookoo_VideoProposal_v6_ncs.mp4";
    const srcError = "https://ik.imagekit.io/hngejsvtfd/AroundTheWould_Cuckookoo_VideoProposal_v6_ncs.mp4";

    return(
        <div className="video-introduce" id="video-introduce" >
            <video autoPlay muted loop
                   className="video"
                   onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src= srcError;
                   }
            }>
                <source
                    src={srcDefault}
                    type="video/mp4"
                />
            </video>
        </div>
    )
}

export default VideoIntroduce;