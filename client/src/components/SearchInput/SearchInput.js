import React from 'react';
import classes from './SearchInput.module.scss';

const SearchInput = () => {
  return (
    <input
      type='tel'
      className={classes.searchInput}
      type="text"
      placeholder='請輸入准考證號碼'
      maxLength={7} />
  );
}

export default SearchInput;