import { useReducer, createContext, Suspense } from 'react';
import Loading from './components/Loading';
import Router from './routes';
import './App.css';
import ThemeProvider from './theme';
import ScrollToTop from './components/ScrollToTop';
import { initialState, reducer } from './reducer/UseReducer';
import Support from './components/Support';

import { ContextProvider } from './context/Context';
import { SettingsProvider } from './components/settings';

export const UserContext = createContext();
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <ContextProvider>
        <SettingsProvider>
          <ThemeProvider>
            <Support />
            <ScrollToTop />
            <Suspense fallback={<Loading />}>
              <Router />
            </Suspense>
          </ThemeProvider>
        </SettingsProvider>
      </ContextProvider>
    </UserContext.Provider>
  );
}
