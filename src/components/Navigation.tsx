import { Component } from 'solid-js';
import NavItem from './NavItem';
import LogoutButton from "./LogoutButton";

const Navigation: Component = () => {
  return (
    <>
      <ul class="text-sm md:flex-grow  md:items-center md:text-md">
        <NavItem href="#" icon={<span class="i-mdi-light-view-dashboard text-3xl"></span>} text="Dashboard" />
        <NavItem href="#" icon={<span class="i-healthicons-lymph-nodes-outline text-3xl"></span>} text="Deploy" />
        <NavItem href="#" icon={<span class="i-mdi-light-chart-areaspline text-3xl"></span>} text="Monitoring" />
        <NavItem href="#" icon={<span class="i-mdi-light-settings text-3xl"></span>} text="Settings" />
      </ul>
      <div>
        <LogoutButton />
      </div>
    </>
  );
};

export default Navigation;
