// src/App.tsx
import React from 'react';
import NavigationBar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <About />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
};

export default App;
