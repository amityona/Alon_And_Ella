import logo from "./logo.svg";
import "./App";
import Home from "./components/Home";
import { BrowserRouter, Route } from "react-router-dom";
import DonorChoose from "./components/DonorChoose";
import NeedyFood from "./components/NeedyFood";
import DonorFile from "./components/DonorFile";
import AddressDetails from "./components/AddressDetails";
import DonorFinish from "./components/DonorFinish";
import Activist from "./components/Activist/Activist";

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
          <NeedyFood />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
