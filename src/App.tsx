import type { Component } from 'solid-js';
import Navigation from './components/Navigation';
import Main from './components/Main';

const App: Component = () => {
  return (
    <>
      <Navigation />
      <Main />
    </>
  );
};

export default App;
