import React, { useState } from 'react';

// Components
import Navbar from './components/Navbar'
import Mainarea from './components/Mainarea'

import styled from 'styled-components'

const AppDiv = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.dark ? '#545454' : '#eeeeee' };
`;

function App() {

  // Declare a new state variable, which we'll call "count"
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    <AppDiv dark={darkMode}>
      <Navbar dark={darkMode}></Navbar>
      <Mainarea dark={darkMode}></Mainarea>
    </AppDiv>
  );
}

export default App;
