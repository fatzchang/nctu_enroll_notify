import React from 'react';
import classes from '../sass/SearchBar.module.scss';
import Button from '../components/Button/Button';
import SearchInput from '../components/SearchInput/SearchInput';

const SearchBar = () => {
  return (
    <form className={classes.searchBar}>
      <SearchInput />
      <Button text='查詢' />
    </form>
  );
}

export default SearchBar;