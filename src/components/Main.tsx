import { Component } from 'solid-js';
import Counter from '../components/Counter';

const Main: Component = () => {
  return (
    <main class="flex items-center justify-center flex-grow">
      <Counter />
    </main>
  );
};

export default Main;
