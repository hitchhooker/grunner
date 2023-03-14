import { createStore, SetStoreFunction } from 'solid-js/store';

interface User {
  username: string;
}

interface UserStore {
  user: User | null;
  isLoggedIn: boolean;
  login: (username: string) => void;
  logout: () => void;
}

const createUserStore = (): UserStore => {
  const [state, setState] = createStore<UserStore>({
    user: null,
    isLoggedIn: false,
    login: (username: string) => {
      const user: User = { username };
      setState({
        user,
        isLoggedIn: true,
      });
    },
    logout: () => {
      setState({
        user: null,
        isLoggedIn: false,
      });
    },
  });

  return state;
};

export const user: UserStore = createUserStore();
