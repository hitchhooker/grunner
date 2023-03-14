import { Component } from 'solid-js';
import { mobileMenu } from '../stores/nav';

const MenuButton: Component = () => {
  const handleClick = () => {
    mobileMenu.toggle();
  };

  return (
    <button
      type="button"
      class="block md:hidden border-1 bg-red-400 text-rose-200 p-1 rounded"
      onClick={handleClick}
    >
      {mobileMenu.isOpen ? (
        <i class="i-ic-sharp-menu-open text-3xl"></i>
      ) : (
        <i class="i-ic-sharp-menu text-3xl"></i>
      )}
    </button>
  );
};

export default MenuButton;

