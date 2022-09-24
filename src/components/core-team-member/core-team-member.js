import './core-team-member.scss'

const CoreTeamMember = ({image, name ,position}) =>{
    const images = {
        boxMember: process.env.PUBLIC_URL + '/images/core-team/box-member.png',
    }
    return(
        <div className="core-team-member"
             style={{backgroundImage:`url(${images.boxMember})`}}>
            <img className="image-member" src={image} alt="image-member" />
            <span className="name-member">{name}</span>
            <span className="position-member">{position}</span>
        </div>

    )
}

export default CoreTeamMember;