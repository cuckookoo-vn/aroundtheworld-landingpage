import "./key-features-item.scss"

const KeyFeaturesItem = ({titleMain, title}) =>{
    const images = {
        boxKeyFeatures: process.env.PUBLIC_URL + '/images/key-features/box-key-features.png',
    }
    return(
        <div className="key-features-item"
             style={{backgroundImage: `url(${images.boxKeyFeatures})`}}>
            <span className="title-key title-main-key">{titleMain}</span>
            <span className="title-key title">{title}</span>
        </div>
    )
}

export default KeyFeaturesItem;