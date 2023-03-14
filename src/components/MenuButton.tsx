import { Component, createSignal } from 'solid-js';

const MenuButton: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <button
      type='button'
      class="block lg:hidden border-1"
      onClick={handleClick}>
      <i class="i-mdi-light-menu"></i>
    </button >
  );
};

export default MenuButton;
