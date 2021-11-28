import Header from 'components/Header';
import Loading from 'components/Loading';
import CartFeature from 'features/Cart';
import ProductFeature from 'features/Product';
import TodoFeature from 'features/Todo';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import NotFound from './components/NotFound';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    const loadingTimeout = setTimeout(() => {
      setLoader(false);
    }, 5000);
    console.log('abc');
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {loader && <Loading loading={loader} />}
      {!loader && (
        <div className='app'>
          <div className='header'>
            <Header />
          </div>

          <Switch>
            <Route path='/' component={Loading} exact />
            <Route path='/list' component={TodoFeature} />
            <Route path='/products' component={ProductFeature} />
            <Route path='/cart' component={CartFeature} />

            <Route component={NotFound} />
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
