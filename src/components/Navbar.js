import React from 'react';
import styled from 'styled-components'

const Bar = styled.div`
    height: 5vh;
    background-color: ${props => props.dark ? '#000000': '#ffffff'};
`;

function Navbar(props) {
    return (
      <Bar {...props}>
          This is a Navbar
      </Bar>

    );
  }
  
  export default Navbar;