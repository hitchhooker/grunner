import { Component } from 'solid-js';
import NavItem from './NavItem';
import { mobileMenu } from '../stores/nav';

const Navigation: Component = () => {

  return (
    <>
      <div class={
        `text-sm md:flex-grow md:items-center md:text-md md:block ${mobileMenu.isOpen ? '' : 'hidden'
        }`
      }>
        <ul>
          <NavItem href="/" icon={<i class="i-mdi-light-view-dashboard mr-2 text-4xl"></i>} text="Dashboard" />
          <NavItem href="/deploy" icon={<i class="i-healthicons-lymph-nodes-outline mr-2 text-4xl"></i>} text="Deploy" />
          <NavItem href="/monitoring" icon={<i class="i-mdi-light-chart-areaspline mr-2 text-4xl"></i>} text="Monitoring" />
          <NavItem href="/settings" icon={<i class="i-mdi-light-settings mr-2 text-4xl"></i>} text="Settings" />
          <NavItem href="/login" icon={<i class="i-mdi-light-logout mr-2 text-4xl"></i>} text="Logout" />
        </ul>
      </div>
    </>
  );
};

export default Navigation;
