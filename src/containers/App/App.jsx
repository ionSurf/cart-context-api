import React, { Component } from "react"
import LoginPage from "../LoginPage/LoginPage"
import GlobalContext from '../../contexts/GlobalContext'
import { Router, Route } from 'react-router-dom';
import { PrivateRoute } from "../../components/PrivateRoute"
import { history } from "../../helpers"
import ShopPage from "../ShopPage/ShopPage"

class App extends Component {
  render = () => (
      <div className="App">
        <GlobalContext>
          <Router history={history}>
            <div>
              <PrivateRoute exact path="/" component={ShopPage} />
              <Route path='/login' component={LoginPage} />
            </div>
          </Router>
        </GlobalContext>
      </div>
    );
}

export default App;