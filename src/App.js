import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom'
import DonorChoose from './components/DonorChoose';
import NeedyFood from './components/NeedyFood'

function App() {
  return (
<<<<<<< HEAD
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
=======
    <div className="App">
<Contact/>
    </div>
>>>>>>> 753fe2ccaae25d3412cfcd56f111d4e3fbd82c72
  );
}

export default App;
