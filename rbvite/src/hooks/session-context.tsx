import {
  createContext,
  createRef,
  PropsWithChildren,
  useContext,
  useRef,
  useState,
} from 'react';
import { LoginHandler } from '../components/Login';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type LoginUser = typeof SampleSession.loginUser;
type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

const contextInitValue = {
  session: SampleSession,
  logout: () => {},
  login: (id: number, name: string) => {
    console.log(id, name);
  },
  removeCartItem: (id: number) => console.log(id),
  addCartItem: (name: string, price: number) => console.log(name, price),
  loginRef: createRef<LoginHandler>(),
};

type SessionContextProps = Omit<typeof contextInitValue, 'session'> & {
  session: Session;
};
const SessionContext = createContext<SessionContextProps>(contextInitValue);

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<Session>(SampleSession);
  const loginRef = useRef<LoginHandler>(null);

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (id: number, name: string) => {
    if (!id) {
      alert('사용자 ID를 입력하시오.');
      console.log('>>>', loginRef.current);
      return loginRef.current?.focus('id');
    }
    if (!name) {
      alert('사용자 ID를 입력하시오.');
      return loginRef.current?.focus('name');
    }

    setSession({
      ...session,
      loginUser: { id, name },
    });
  };

  const addCartItem = (name: string, price: number) => {
    const id = Math.max(...session.cart.map(({ id }) => id), 0) + 1;
    setSession({ ...session, cart: [...session.cart, { id, name, price }] });
  };

  const removeCartItem = (toRemoveId: number) => {
    setSession({
      ...session,
      cart: session.cart.filter(({ id }) => id !== toRemoveId),
    });
  };
  return (
    <>
      <SessionContext.Provider
        value={{
          session,
          logout,
          login,
          addCartItem,
          removeCartItem,
          loginRef,
        }}
      >
        {children}
      </SessionContext.Provider>
    </>
  );
};

export const useSession = () => useContext(SessionContext);
