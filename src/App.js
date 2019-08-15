import React from 'react';
import {GrobalStyle} from './style';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store'
import {IconFont} from '../src/statics/iconfont/iconfontStyle';
import Header from './common/header';
import Home from '../src/page/home';
import Login from '../src/page/login';
import Details from '../src/page/details';
function App() {
  return (
    <Provider store={store}>
        <GrobalStyle/>
        <IconFont/>
        <Router>
          <Header />
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/details/:id" component={Details}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Router>
        
      </Provider>
  );
}

export default App;
