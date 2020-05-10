import React from 'react';
import classes from '../sass/SearchBar.module.scss';
import { useDispatch } from 'react-redux';
import Button from '../components/Button/Button';
import SearchInput from '../components/SearchInput/SearchInput';
import Dropdown from '../components/Dropdown/Dropdown';
import { submitSearch } from '../store/actionCreator';

const SearchBar = () => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(submitSearch('111'));
  }

  return (
    <form className={classes.searchBar} onSubmit={submitHandler}>
      <Dropdown />
      <SearchInput placeholder='准考證號碼' />
      <Button text='查詢' />
    </form>
  );
}

export default SearchBar;