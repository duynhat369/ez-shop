import { Button } from '@material-ui/core';
import Header from 'components/Header';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import './App.scss';
import Box from './components/Box';
import Clock from './components/Clock';
import NotFound from './components/NotFound';
import Counter from './features/Counter';
import Pages from './features/Todo';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    (async () => {
      try {
        const params = {
          _limit: 10,
        };
        const productList = await productApi.getAll(params);
      } catch (error) {
        console.error('Failed to fetch product list');
      }
    })();
  }, []);

  const showNoti = () => {
    enqueueSnackbar('This is a notifycations', { variant: 'error' });
  };

  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>

      <Button onClick={showNoti}>Show notifications stack</Button>

      <Switch>
        <Route path='/' component={Clock} exact />
        <Route path='/clock' component={Clock} exact />
        <Route path='/counter' component={Counter} exact />
        <Route path='/box' component={Box} exact />
        <Route path='/list' component={Pages} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
