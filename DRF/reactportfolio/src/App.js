import './App.css';
import Header from './Components/Header'
import About from './Pages/About'
import Landing from './Pages/Landing';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Header />
    <Router>
      <Switch>
        <Route path='/' exact component={Landing}/>
        <Route path='/about' exact component={About}/>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
