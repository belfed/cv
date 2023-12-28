import styled from "styled-components";

const Header = styled.div`
    display: flex;
    flex-direction: column;
`;

const Role = styled.span`
    font-size: 1.25em;
    font-weight: bold;
`;

const Period = Role;

const Company = styled.a`
    color: inherit;
`;

const Detail = styled.li`
    text-align: justify;
    hyphens: auto;
`;

const Experience = ({ experience }) => {
    return (
        <Header>
            <Role>
                {`${experience.role}, `}
                <Company href={experience.website}>{`${experience.company}`}</Company>
                {` (${experience.type})`}
            </Role>
            <Period>{`${experience.start} - ${experience.end}`}</Period>
            <ul>
                {
                    experience.details.map((detail, key) => <Detail key={key}>{detail}</Detail>)
                }
            </ul>
        </Header>
    );
}

export default Experience;