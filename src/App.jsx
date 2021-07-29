import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Loader } from 'components//Loader/Loader';

import ContactsView from 'views/ContactsView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import HomeView from 'views/HomeView';

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/contacts" exact>
            <ContactsView />
          </Route>
          <Route path="/register" exact>
            <RegisterView />
          </Route>
          <Route path="/login" exact>
            <LoginView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
