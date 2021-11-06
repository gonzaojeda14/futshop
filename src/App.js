import './App.css';
import Home from './pages/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './container/ItemListContainer.js';
import ItemDetailContainer from './container/ItemDetailContainer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar_ from './components/Navbar.jsx';


function App() {
  return (
    <BrowserRouter>
    <Navbar_ />
    <Switch>
       <Route path="/camisetas/:catId/:id" component={ItemDetailContainer} />
        <Route path="/camisetas/:catId">
       <div className = 'shop'>
       <ItemListContainer />
       </div>
       </Route>
       <Route path="/camisetas">
       <div className = 'shop'>
       <ItemListContainer />
       </div>
       </Route>
       <Route path="/">
       <Home/>
        </Route>
       </Switch>
    </BrowserRouter>
    );
}

export default App;
