import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SmsChatWindow from './components/SmsChatWindow';

function App() {
  return (
    <NavigationContainer>
      <SmsChatWindow />
    </NavigationContainer>
  );
}

export default App;
