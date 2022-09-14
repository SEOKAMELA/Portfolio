import React from 'react';
import './App.css';
import Contact from './views/contact/Contact';
import ProjectsView from './views/projects_view/Projects_view';
import ScreenOne from './views/screen_one/Screen_one';
import ScreenTwo from './views/screen_two/Screen_two';
// import ScreenThree from './views/screen_three/Screen_three'

const App = () => {
  return (
    <div className='App-body'>
      <ScreenOne />
      <ScreenTwo />
      {/* <ScreenThree /> */}
      <ProjectsView />
      <Contact />
    </div>
  );
}

export default App;
