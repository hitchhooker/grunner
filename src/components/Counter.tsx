import { Component, createSignal } from 'solid-js';

const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <button
      type='button'
      class='z-10 p-5 rounded-3xl bg-zinc-400 shadow-xl text-4xl active:bg-zinc-4 m-5 active:shadow-none duration-100'
      onClick={() => {
        setCount((count) => count + 1);
      }}>
      {count()}
    </button>
  );
};

export default Counter;
