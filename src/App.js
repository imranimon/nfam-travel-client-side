import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import SingleService from './components/SingleService/SingleService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/ManageOrders/MyOrders/MyOrders';
import AllOrders from './components/ManageOrders/AllOrders/AllOrders';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path='/services/:_id'>
              <SingleService></SingleService>
            </PrivateRoute>
            <PrivateRoute path='/my-orders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/all-orders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
