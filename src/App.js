import './App.css';
import { Switch,Route } from 'react-router';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component = {ShopPage} />
      </switch>
    </div>
  );
}

export default App;
