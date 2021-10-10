
import './App.css';
import Homepage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop/shop';
import {Route, Switch} from 'react-router-dom';
import Header from './Components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
