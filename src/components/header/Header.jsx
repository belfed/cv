import styled from "styled-components";
import Infos from "./Infos";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Name = styled.span`
    font-size: 1.5em;
    font-weight: bold;
`;

const Role = styled(Name)`
    font-size: 1.25em;
`;

const Header = ({ header }) => {
    const { name, role, infos } = header;

    return (
        <Container>
            <Name>{name}</Name>
            <Role>{role}</Role>
            <Infos infos={infos}/>
        </Container>
    );
}

export default Header;