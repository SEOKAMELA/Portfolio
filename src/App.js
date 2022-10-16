import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Contact from './views/contact/Contact';
import ProjectsView from './views/projects_view/Projects_view';
import ScreenOne from './views/screen_one/Screen_one';
import ScreenTwo from './views/screen_two/Screen_two';

const App = () => {
  return (
    <div className='App-body'>      
      <NavBar />
      <ScreenOne />
      <ScreenTwo />
      <ProjectsView />
      <Contact />
    </div>
  );
}

export default App;
