import React from 'react';
import classes from '../sass/App.module.scss';

import SearchBar from './SearchBar';
import Table from '../components/Table/Table';


function App() {
  return (
    <div className={classes.App}>
      <SearchBar />
      <main className={classes.main}>
        <Table />
      </main>
    </div>
  );
}

export default App;
