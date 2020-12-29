import logo from './logo.svg';
import './App';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import DonorChoose from './components/DonorChoose';
import FoodDetails from './components/FoodDetails'
import DonorFile from './components/DonorFile'
import AddressDetails from './components/AddressDetails';
import DonorFinish from './components/DonorFinish'
import FoodTransfer from './components/FoodTransfer'
import HelperList from './components/HelperList'
import GiveFood from './components/GiveFood'
import AddImage from './components/AddImage'
import Activist from './components/Activist/Activist'
import FoodType from './components/FoodType'
import Groceries from './components/Groceries '
import CookedFood from './components/CookedFood'
import ClientFinish from './components/ClientFinish'
import LastGroceries from './components/LastGroceries' 
import ClientHome from './components/ClientHome' 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Home />
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
      
        <Route path="/foodTransfer"> <FoodTransfer/> 
        </Route>
        <Route path="/HelperList"> <HelperList/> 
        </Route>
        
        <Route path="/GiveFood"> <GiveFood/> 
        </Route>
        <Route path="/AddImage"> <AddImage/> 
        </Route>

        <Route path="/CookedFood"> <CookedFood/> 
        </Route>
        <Route path="/FoodType"> <FoodType/> 
        </Route>
        <Route path="/Groceries"> <Groceries/> 
        </Route>
        <Route path="/ClientFinish"> <ClientFinish/> 
        </Route>
        <Route path="/LastGroceries"> <LastGroceries/> 
        </Route>

        <Route path="/donor/ClientHome">
          <ClientHome />
        </Route>



      </div>
    </BrowserRouter>
  );
}

export default App;
