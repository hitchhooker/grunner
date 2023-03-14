import { createStore } from 'solid-js/store';

type MobileMenu = {
  isOpen: boolean;
  toggle: () => void;
};


export const [mobileMenu, setMobileMenu] = createStore<MobileMenu>({
  isOpen: false,
  toggle: () =>
    setMobileMenu((state) => ({
      ...state,
      isOpen: !state.isOpen,
    })),
});

export const [wMenu, setWMenu] = createStore<MobileMenu>({
  isOpen: true,
  toggle: () =>
    setWMenu((state) => ({
      ...state,
      isOpen: !state.isOpen,
    })),
});
