import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import DonorChoose from './components/DonorChoose';
import NeedyFood from './components/NeedyFood'

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
      </div>
        </BrowserRouter>
  );
}

export default App;
