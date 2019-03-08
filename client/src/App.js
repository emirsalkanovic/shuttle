import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Shuttle from './components/Shuttle';
import RentACar from './components/RentACar';
import Transfers from './components/Transfers';
import Contacts from './components/Contacts';

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Main} />
            <Route exact path="/airport" component={Shuttle} />
            <Route exact path="/rent" component={RentACar} />
            <Route exact path="/transfers" component={Transfers} />
            <Route exact path="/contacts" component={Contacts} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
