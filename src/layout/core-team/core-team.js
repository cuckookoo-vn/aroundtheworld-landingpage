import {Container} from "react-bootstrap";
import CoreTeamMember from "../../components/core-team-member/core-team-member";
import {useTranslation} from "react-i18next";
import './core-team.scss';

const CoreTeam = () =>{
    const {t} = useTranslation();
    const memberTeam = [
        {
            name: 'Paul Pham',
            position: 'Product Owner',
            image: process.env.PUBLIC_URL + '/images/core-team/paul.png'
        },
        {
            name: 'Felix Nguyen',
            position: 'Executive',
            image: process.env.PUBLIC_URL + '/images/core-team/felix.png'
        },
        {
            name: 'Tony Quach',
            position: 'Executive',
            image: process.env.PUBLIC_URL + '/images/core-team/tony.png'
        },
        {
            name: 'Julie Tran',
            position: 'Business Analysis',
            image: process.env.PUBLIC_URL + '/images/core-team/julie.png'
        },
        {
            name: 'Joy Le',
            position: 'Artist Manager',
            image: process.env.PUBLIC_URL + '/images/core-team/joy.png'
        },
        {
            name: 'Richard Duong',
            position: 'Solution Architect',
            image: process.env.PUBLIC_URL + '/images/core-team/richard.png'
        },
        {
            name: 'Johnny Le',
            position: 'Developer Leader',
            image: process.env.PUBLIC_URL + '/images/core-team/johnny.png'
        },
        {
            name: 'Mr.Kan',
            position: 'AI Leader',
            image: process.env.PUBLIC_URL + '/images/core-team/kan.png'
        },
        {
            name: 'Mr.Thinh',
            position: 'Blockchain Leader',
            image: process.env.PUBLIC_URL + '/images/core-team/thinh.png'
        },
        {
            name: 'GiGi Le',
            position: 'Translator',
            image: process.env.PUBLIC_URL + '/images/core-team/gigi.png'
        },
        {
            name: 'Ivy Pham',
            position: 'Quality Control Leader',
            image: process.env.PUBLIC_URL + '/images/core-team/ivy.png'
        },
        {
            name: 'Leon Nguyen',
            position: 'Senior Artist',
            image: process.env.PUBLIC_URL + '/images/core-team/leon.png'
        },
        {
            name: 'Leo Dinh',
            position: 'Developer',
            image: process.env.PUBLIC_URL + '/images/core-team/leo.png'
        },
        {
            name: 'Finn Le',
            position: 'Developer',
            image: process.env.PUBLIC_URL + '/images/core-team/finn.png'
        },
        {
            name: 'Link Ho',
            position: 'Developer',
            image: process.env.PUBLIC_URL + '/images/core-team/linklee.png'
        },
        {
            name: 'Hany Tran',
            position: 'Blockchain',
            image: process.env.PUBLIC_URL + '/images/core-team/hany.png'
        },
    ]

    return(
        <div className="core-team">
            <span className="title-main">
                {t("coreTeam.titleMain")}
            </span>

            <Container>
                <div className="box-member">
                    {memberTeam.map((element, index) =>
                        <CoreTeamMember
                            key={index}
                            image={element.image}
                            name={element.name}
                            position={element.position}
                        />
                    )}
                </div>
            </Container>
        </div>
    )
}

export default CoreTeam;