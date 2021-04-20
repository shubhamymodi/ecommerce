
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./home";

import GroceryCard from "./groceryCard";
import ElectronicsCard from "./electronicsCard";
import HouseCard from "./houseCard";
import FashionCard from "./fashionCard";
import MobileCard from "./mobileCard";
import Cart from "./cart";


function App() {
  return (
    <div className="App" >
     {/* <img src={msd} alt="bg" style={{zIndex: "-1", width:"100%", height:"800px",filter: "brightness(0.5)"}} /> */}
    {/* <Menu /> */}
    <Router>
    
    <Switch>

    
      <Route path="/" exact component={Home} />
    
      
      <Route  path="/grocery" exact component={GroceryCard}/>
      <Route  path="/electronics" exact component={ElectronicsCard}/>
      <Route  path="/house" exact component={HouseCard}/>
      <Route  path="/fashion" exact component={FashionCard}/>
      <Route  path="/mobile" exact component={MobileCard}/>
      <Route  path="/cart" exact component={Cart}/>
     


      
    </Switch>

    </Router>
      
    </div>
  );
}

export default App;
