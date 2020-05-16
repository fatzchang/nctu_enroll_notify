import React from 'react';
import classes from '../sass/App.module.scss';
import store from '../store/store';
import { Provider } from 'react-redux';

import SearchBar from './SearchBar';
import Table from '../components/Table/Table';
import Loader from '../components/Loader/Loader';
import Bug from '../components/Bug/Bug';


function App() {
  return (
    <Provider store={store}>
      <div className={classes.App}>
        <SearchBar />
        <main className={classes.main}>
          <Table />
          <Bug />
        </main>
        <Loader />
      </div>
    </Provider>
  );
}

export default App;
