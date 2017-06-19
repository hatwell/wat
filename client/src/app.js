import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import { HashRouter, Route, IndexRoute } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
    <MuiThemeProvider>
      <HashRouter >
        <div className='container'>
          <Header />
          <Route exact path="/" component={MainContainer} />
        </div>
        </HashRouter>

    </MuiThemeProvider>
  )
    }

}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
