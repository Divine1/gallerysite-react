import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import IndexPage from './pages/index'
function App() {
  return (
    <HashRouter>
        <Route path="/" component={IndexPage} />
    </HashRouter>
  );
}

export default App;
