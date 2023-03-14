import { Component } from 'solid-js';
import Counter from '../components/Counter';

const Main: Component = () => {
  return (
    <main class="flex items-center justify-center flex-grow">
      <Counter />
      <p class="text-4xl text-green-700 text-center py-20">
        Hello{' '}
        <a
          class="text-pink-600 hover:font-bold hover:border-1"
          href="https://antfu.me/posts/reimagine-atomic-css"
          target="atomic-css"
        >
          Atomic CSS
        </a>
        !
      </p>
    </main>
  );
};

export default Main;
