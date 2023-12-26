import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.span`
    font-size: 1.25em;
    font-weight: bold;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
`;

const Period = styled.span`
    white-space: nowrap;
    font-size: 1.25em;
    font-weight: bold;
`;

const Name = styled.span`
    flex-wrap: wrap;
`;

const Education = ({ education }) => {
    return (
        <Container>
            <Title>Education</Title>
            {
                education.map((item, key) => (
                    <Item key={key}>
                        <Period>{`${item.start} - ${item.end}`}</Period>
                        <Name>{`${item.name} (${item.location})`}</Name>
                    </Item>
                ))
            }
        </Container>
    );
}

export default Education;