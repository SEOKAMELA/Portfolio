import React from 'react';
import './App.css';
import ScreenOne from './views/screen_one/Screen_one';


const App = () => {
  return (
    <body className='App-body'>
      <div id='Background-image'>
        <ScreenOne />
        {/* <ScreenTwo />
        <ScreenThree /> */}
      </div>
    </body>
  );
}

export default App;
