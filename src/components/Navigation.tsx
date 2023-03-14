import { Component } from 'solid-js';
import MenuButton from './MenuButton';
import NavItem from './NavItem';
import LogoutButton from "./LogoutButton";

const Navigation: Component = () => {
  return (
    <nav
      class="bg-#EFAAAA md:h-screen text-black flex items-center justify-between flex-wrap p-6 md:w-64 md:flex-col"
    >
      <div class="flex items-center flex-row mr-6 p-0 md:p-4">
        <i class="i-carbon-logo-google text-2xl text-#4285F4"></i>
        <span class="font-bold text-xl tracking-tight">runner</span>
      </div>
      <MenuButton />
      <ul class="text-sm md:flex-grow  md:items-center md:text-md">
        <NavItem href="#" icon={<span class="i-mdi-light-view-dashboard text-lg"></span>} text="Dashboard" />
        <NavItem href="#" icon={<span class="i-healthicons-lymph-nodes-outline text-lg"></span>} text="Deploy" />
        <NavItem href="#" icon={<span class="i-mdi-light-chart-areaspline text-lg"></span>} text="Monitoring" />
        <NavItem href="#" icon={<span class="i-mdi-light-settings text-lg"></span>} text="Settings" />
      </ul>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navigation;
