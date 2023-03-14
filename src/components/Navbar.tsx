import { Component } from 'solid-js';
import LogoMark from './LogoMark';
import MenuButton from './MenuButton';
import Navigation from './Navigation';

const Navbar: Component = () => {
  return (
    <nav
      bg-gradient='to-tr from-yellow-300 to-orange-300'
      class="md:h-full w-full md:w-56 text-#00008b flex
      items-left justify-between flex-col p-6"
    >
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row items-center">
          <LogoMark />
        </div>
        <div>
          <MenuButton />
        </div>
      </div>
      <Navigation />
    </nav>
  );
};

export default Navbar;
