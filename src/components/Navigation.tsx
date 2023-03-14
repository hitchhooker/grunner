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
          <NavItem href="#" icon={<i class="i-mdi-light-view-dashboard text-5xl"></i>} text="Dashboard" />
          <NavItem href="#" icon={<i class="i-healthicons-lymph-nodes-outline text-5xl"></i>} text="Deploy" />
          <NavItem href="#" icon={<i class="i-mdi-light-chart-areaspline text-5xl"></i>} text="Monitoring" />
          <NavItem href="#" icon={<i class="i-mdi-light-settings text-5xl"></i>} text="Settings" />
          <NavItem href="#" icon={<i class="i-mdi-light-logout text-5xl"></i>} text="Logout" />
        </ul>
      </div>
    </>
  );
};

export default Navigation;
