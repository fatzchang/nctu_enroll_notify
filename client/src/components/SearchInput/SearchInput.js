import React from 'react';
import classes from './SearchInput.module.scss';

const SearchInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      type='tel'
      className={classes.searchInput}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={7} />
  );
}

export default SearchInput;