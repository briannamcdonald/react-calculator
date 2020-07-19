import React from 'react';
import './App.css';

import {ThemeProvider, CSSReset, Text} from '@chakra-ui/core';
import Calculator from './containers/Calculator/Calculator';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="Div">
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="gray.700"
          padding="10px"
        >Simple Calculator</Text>
        <Calculator />
        <div className="artContainer">
          <div className="heart"></div>
          <div className="heart"></div>
          <div className="heart"></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
