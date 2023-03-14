import { Component, JSX } from 'solid-js';

interface NavItemProps {
  href: string;
  icon: JSX.Element;
  text: string;
}

const NavItem: Component<NavItemProps> = (props) => {
  return (
    <a
      href={props.href}
      class="block mt-4 md:inline-block md:mt-0 hover:text-green-600 mr-4"
    >
      {props.icon}
      {props.text}
    </a>
  );
};

export default NavItem;
