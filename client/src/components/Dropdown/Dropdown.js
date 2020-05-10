import React, { useState } from 'react';
import classes from './Dropdown.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import data from '../../departments';

const Dropdown = () => {
  const [extend, setExtend] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const focusHandler = () => {
    setExtend(true)
  }

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  }

  const clickHandler = (id) => () => {
    setInputValue(data[id].number)
    setExtend(false)
  }


  return (
    <div className={classes.dropdown} onFocus={focusHandler}>
      <SearchInput placeholder='系所編號' onChange={changeHandler} value={inputValue} />
      {extend ?
        (<div className={classes.content}>
          {data.filter(item => {
            const reg = new RegExp(inputValue);
            return reg.test(item.number)
          }).map(item =>
            <p key={item.id} className={classes.text} onClick={clickHandler(item.id)} >{item.name}</p>
          )}
        </div>) : null
      }

    </div>
  );
}

export default Dropdown;