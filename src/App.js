import React from 'react';
import './App.css';
import ScreenOne from './views/screen_one/Screen_one';
import ScreenTwo from './views/screen_two/Screen_two';


const App = () => {
  return (
    <body className='App-body'>
      <div id='Background-image'>
        <ScreenOne />
      </div>
      <ScreenTwo />

    </body>
  );
}

export default App;
