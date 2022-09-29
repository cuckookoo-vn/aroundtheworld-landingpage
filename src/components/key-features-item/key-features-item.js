import "./key-features-item.scss"

const KeyFeaturesItem = ({titleMain, title}) =>{
    const images = {
        boxKeyFeatures: process.env.PUBLIC_URL + '/images/key-features/box-key-features.png',
    }
    return(
        <div className="key-features-item"
             style={{backgroundImage: `url(${images.boxKeyFeatures})`}}>
            <div className="box-title">
                <span className="title-key title-main-key">{titleMain}</span>
                <span className="title-key title">{title}</span>
            </div>
        </div>
    )
}

export default KeyFeaturesItem;