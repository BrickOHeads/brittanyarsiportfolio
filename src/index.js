import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './Component/Homepage.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Baselayout from './Component/Baselayout.js';

ReactDOM.render(
  <BrowserRouter>
    <Baselayout>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </Baselayout>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
