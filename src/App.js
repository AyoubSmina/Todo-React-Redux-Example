import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Header from './containers/Header';
import Body from './containers/Body';
import More from './components/More';
import store from './store/Confugere-store';
import { Route, BrowserRouter,Routes  } from 'react-router-dom'

///////// App
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
      <Header />
        <Routes>
          <Route exact path='/' element={<div>Welcome to Redux Example! :)</div>}/>
          <Route path='/Todo' element={<Body />}  />
          <Route path='/More' element={<More />}  />
        </Routes>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
