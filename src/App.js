
import './App.css';
import Homepage from './Pages/homepage/homepage';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;