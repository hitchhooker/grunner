import { Component } from 'solid-js';
import LogoMark from './LogoMark';
import MenuButton from './MenuButton';
import Navigation from './Navigation';

const Navbar: Component = () => {
  return (
    <nav
      class="bg-rose-300 md:h-screen w-screen md:w-64 text-blue-900 flex
      items-left justify-between flex-col p-6
      "
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
