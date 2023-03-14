import type { Component } from 'solid-js';
import Navbar from './components/Navbar';
import Main from './components/Main';

const App: Component = () => {
  return (
    <div class="flex flex-col md:flex-row w-screen h-screen">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
