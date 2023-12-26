import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    font-size: 1.25em;
    font-weight: bold;
`;

const Content = styled.span`
    flex-wrap: wrap;
`;

const Skills = ({ skills }) => {
    return (
        <Container>
            <Title>Skills</Title>
            <Content>{ skills.join(", ") }</Content>
        </Container>
    );
}

export default Skills;