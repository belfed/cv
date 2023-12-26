import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 3px;
`;

const Infos = ({ infos }) => {
    const [email, mobile, github, linkedin, location] = infos;

    return (
        <Container>
            <Info>
                <FontAwesomeIcon icon={faAt} />
                <span>{email.value}</span>
            </Info>
            <Info>
                <FontAwesomeIcon icon={faPhone} />
                <span>{mobile.value}</span>
            </Info>
            <Info>
                <FontAwesomeIcon icon={faGithub} />
                <span>{github.value}</span>
            </Info>
            <Info>
                <FontAwesomeIcon icon={faLinkedin} />
                <span>{linkedin.value}</span>
            </Info>
            <Info>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{location.value}</span>
            </Info>              
        </Container>
    );
}

export default Infos;
