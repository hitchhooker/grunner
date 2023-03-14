import { Component } from 'solid-js';
import MenuButton from './MenuButton';
import NavItem from './NavItem';
import LogoutButton from "./LogoutButton";

const Navigation: Component = () => {
  return (
    <nav
      class="bg-#EFAAAA text-black flex items-center justify-between flex-wrap p-6 md:w-64 md:flex-col"
    >
      <div class="flex items-center flex-row mr-6 p-0 md:p-4">
        <i class="i-carbon-logo-google text-2xl text-#4285F4"></i>
        <span class="font-bold text-xl tracking-tight">runner</span>
      </div>
      <MenuButton />
      <div class="text-sm md:flex-grow  md:items-center md:text-md">
        <NavItem href="#" icon={<i class="i-mdi-light-view-dashboard text-lg"></i>} text="Dashboard" />
        <NavItem href="#" icon={<i class="i-healthicons-lymph-nodes-outline text-lg"></i>} text="Deploy" />
        <NavItem href="#" icon={<i class="i-mdi-light-chart-areaspline text-lg"></i>} text="Monitoring" />
        <NavItem href="#" icon={<i class="i-mdi-light-settings text-lg"></i>} text="Settings" />
      </div>
      <div>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navigation;
