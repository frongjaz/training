import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Main from './components/Main';
import Multiple from './components/Form/form';
import Activity from './components/Form/activity';
import LabTabs from './components/Tabs/demoTab1';

function App() {
  return (
    <React.Fragment>
      <Wrapper>
        <Main>
          <div className="flex-container">
            <Multiple />
            <Activity />
          </div>
        </Main>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
