import React from 'react';
import './App.css';
import ScreenOne from './views/screen_one/Screen_one';
import ScreenTwo from './views/screen_two/Screen_two';


const App = () => {
  return (
    <div className='App-body'>
      <ScreenOne />
      <ScreenTwo />      
    </div>
  );
}

export default App;
