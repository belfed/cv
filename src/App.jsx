import styled from 'styled-components'

import Divider from './components/Divider'
import Header from './components/header/Header'
import Skills from './components/skills/Skills';
import WorkExperience from './components/work-experience/WorkExperience';
import Education from './components/education/Education';

import data from "./data/data.json";

const Page = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 21cm;
`;

const App = () => {
  const { header, skills, workExperience, education } = data;

  return (
    <Page>
      <Content>
        <Header header={header} />
        <Divider />
        <Skills skills={skills} />
        <Divider />
        <WorkExperience workExperience={workExperience} />
        <Divider />
        <Education education={education} />
      </Content>
    </Page>
  )
}

export default App
