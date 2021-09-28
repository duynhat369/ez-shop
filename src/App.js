import Header from 'components/Header';
import ProductFeature from 'features/Product';
import TodoFeature from 'features/Todo';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Clock from './components/Clock';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>

      <Switch>
        <Route path='/' component={Clock} exact />
        {/* <Route path='/clock' component={Clock} exact />
        <Route path='/counter' component={Counter} exact />
        <Route path='/box' component={Box} exact /> */}
        <Route path='/list' component={TodoFeature} />
        <Route path='/products' component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
