import styled from "styled-components";
import Experience from "./Experience";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1em;
`;

const Title = styled.span`
    font-size: 1.25em;
    font-weight: bold;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
`;

const WorkExperience = ({ workExperience }) => {
    return (
        <Container>
            <Title>Work Experience</Title>
            <Items>
                {
                    workExperience.map((experience, key) => <Experience key={key} experience={experience} />)
                }
            </Items>
        </Container>
    );
}

export default WorkExperience;