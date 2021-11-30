import { makeStyles } from '@material-ui/core';
import LandingLayout from 'components/layouts/LandingLayout';
import Loading from 'components/Loading';
import CartFeature from 'features/Cart';
import HomeFeature from 'features/Home';
import ProductFeature from 'features/Product';
import TodoFeature from 'features/Todo';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

const useStyles = makeStyles((theme) => ({
  app: {
    margin: '0 auto',
    '& .active-menu': {
      color: theme.palette.warning.light,
      textDecoration: 'none',
    },
  },
}));

function App() {
  const [loader, setLoader] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    setLoader(true);
    const loadingTimeout = setTimeout(() => {
      setLoader(false);
    }, 5000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {loader && <Loading loading={loader} />}
      {!loader && (
        <div className={classes.app}>
          <Switch>
            <Route path='/' component={HomeFeature} exact />
            <Route path='/list' component={TodoFeature} />

            <Route
              path='/products'
              component={() => (
                <LandingLayout>
                  <ProductFeature />
                </LandingLayout>
              )}
            />
            <Route
              path='/cart'
              component={() => (
                <LandingLayout>
                  <CartFeature />
                </LandingLayout>
              )}
            />

            <Route
              component={() => (
                <LandingLayout>
                  <NotFound />
                </LandingLayout>
              )}
            />
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
