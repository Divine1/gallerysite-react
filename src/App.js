import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import IndexPage from './pages/index'
function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={IndexPage} />
    </BrowserRouter>
  );
}

export default App;
