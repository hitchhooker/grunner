import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App: Component = () => {
  return (
    <div flex flex-col md:flex-row>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
