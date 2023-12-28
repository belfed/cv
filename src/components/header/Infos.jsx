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

const Link = styled.a`
    color: inherit;
    &:link,
    &:visited {        
        color: inherit;
    }
`;

const formatUrl = (url) => {
    return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\/$/, "");
}

const Infos = ({ infos }) => {
    const [email, mobile, github, linkedin, location] = infos;

    return (
        <Container>
            <Info>
                <FontAwesomeIcon icon={faAt} />
                <Link>{email.value}</Link>
            </Info>
            <Info>
                <FontAwesomeIcon icon={faPhone} />
                <Link>{mobile.value}</Link>
            </Info>
            <Info>
                <FontAwesomeIcon icon={faGithub} />
                <Link href={github.value}>{formatUrl(github.value)}</Link>
            </Info>
            <Info>
                <FontAwesomeIcon icon={faLinkedin} />
                <Link href={linkedin.value}>{formatUrl(linkedin.value)}</Link>
            </Info>
            <Info>
                <FontAwesomeIcon icon={faLocationDot} />
                <Link>{location.value}</Link>
            </Info>              
        </Container>
    );
}

export default Infos;
