import { Component } from 'solid-js';
import LogoMark from './LogoMark';
import MenuButton from './MenuButton';
import Navigation from './Navigation';

const Navbar: Component = () => {
  return (
    <nav
      class="bg-rose-200 md:h-screen text-black flex items-center justify-between flex-wrap p-6 md:w-64 md:flex-col"
    >
      <LogoMark />
      <MenuButton />
      <Navigation />
    </nav>
  );
};

export default Navbar;
