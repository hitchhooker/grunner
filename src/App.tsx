import type { Component } from 'solid-js';
import Navigation from './components/Navigation';
import Main from './components/Main';

const App: Component = () => {
  return (
    <div flex flex-col md:flex-row>
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
