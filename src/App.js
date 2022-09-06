import React from 'react';
import './App.css';
import ProjectsView from './views/projects_view/Projects_view';
import ScreenOne from './views/screen_one/Screen_one';
import ScreenTwo from './views/screen_two/Screen_two';


const App = () => {
  return (
    <div className='App-body'>
      <ScreenOne />
      <ScreenTwo />
      {/* <ScreenThree />      */}
      <ProjectsView />
    </div>
  );
}

export default App;
