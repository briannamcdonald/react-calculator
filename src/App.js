import React from 'react';
import './App.css';

import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import Calculator from './containers/Calculator/Calculator';

function App() {

  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <div className="Div">
          <Calculator />
        </div>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
