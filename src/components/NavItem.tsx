import { Component, JSX } from 'solid-js';

interface NavItemProps {
  href: string;
  icon: JSX.Element;
  text: string;
}

const NavItem: Component<NavItemProps> = (props) => {
  return (
    <li text-lg>
      <a
        href={props.href}
        class="block my-4 md:inline-block md:mt-0 text-#000066 hover:text-#000033 mr-4"
      >
        {props.icon}
        {props.text}
      </a>
    </li>
  );
};

export default NavItem;
