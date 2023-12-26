import styled from "styled-components";

const Line = styled.hr`
    color: #CCCCCC; 
    border-style: solid; 
    border-width: 1px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: 0;
    margin-right: 0;
`;

const Divider = () => {
    return <Line />
}

export default Divider;