import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Bucket from './components/Bucket';
import BucketItem from './components/BucketItem';
import NewItem from './components/NewItem';
import EditItem from './components/EditItem';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/bucket" component={Bucket} />
        <Route path="/bucket-item" component={BucketItem} />
        <Route path="/new-item" component={NewItem} />
        <Route path="/edit-item" component={EditItem} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
