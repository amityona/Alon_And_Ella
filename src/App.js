import logo from './logo.svg';
import './App';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import DonorChoose from './components/DonorChoose';
import FoodDetails from './components/FoodDetails'
import DonorFile from './components/DonorFile'
import AddressDetails from './components/AddressDetails';
import DonorFinish from './components/DonorFinish'
import foodTransfer from './components/foodTransfer'
import HelperList from './components/HelperList'
import Activist from './components/Activist/Activist'
import DonorHome from './components/DonorHome';
import AllOrders from './components/AllOrders';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/donor">
          <DonorHome />
        </Route>
        <Route exact path="/donor/all-orders">
          <AllOrders />
        </Route>
        <Route exact path="/donor/choose">
          <DonorChoose />
        </Route>
        <Route exact path="/needy/food">
          <FoodDetails />
        </Route>
        <Route exact path="/donor/food">
          <FoodDetails />
        </Route>
        <Route exact path="/donor/file">
          <DonorFile />
        </Route>
        <Route exact path="/donor/address-details">
          <AddressDetails />
        </Route>
        <Route exact path="/needy/address-details">
          <AddressDetails />
        </Route>
        <Route exact path="/donor/finish">
          <DonorFinish />
        </Route>


        <Route exapt path ="/activsit"> <Activist/> </Route>
        <Route path="/foodTransfer" component={foodTransfer} />
       <Route path="/HelperList" component={HelperList} />


      </div>
    </BrowserRouter>
  );
}

export default App;
