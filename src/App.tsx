import type { Component } from 'solid-js';
import { Main } from './components/Main';
import { Navigation } from './components/Navigation';

const App: Component = () => {
  return (
    <>
      <Navigation />
      <Main />
    </>
  );
};

export default App;
