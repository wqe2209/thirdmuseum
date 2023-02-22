import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './common/haeder';
import Footer from './common/footer';
import Main from './pages/main';
import intro from './pages/intro';
import location from './pages/location';
import now from './pages/now';
import past from './pages/past';
import programe from './pages/programe';
import reserve from './pages/reserve';
import attention from './pages/attention';
import notice from './pages/notice';
import login from './pages/login';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/intro" component={intro} />
        <Route exact path="/location" component={location} />
        <Route exact path="/now" component={now} />
        <Route exact path="/past" component={past} />
        <Route exact path="/programe" component={programe} />
        <Route exact path="/reserve" component={reserve} />
        <Route exact path="/attention" component={attention} />
        <Route exact path="/notice" component={notice} />
        <Route exact path="/login" component={login} />
      </Switch>
    <Footer/>
    </>
  );
}

export default App;
