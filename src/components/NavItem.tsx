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
        class="block my-4 md:inline-block md:mt-0 text-#111131 hover:text-blue-800 mr-4"
      >
        {props.icon}
        {props.text}
      </a>
    </li>
  );
};

export default NavItem;
