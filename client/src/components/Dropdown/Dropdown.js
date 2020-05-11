import React, { useState, useContext } from 'react';
import classes from './Dropdown.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import data from '../../departments';
import { searchBarContext } from '../../containers/SearchBar';

const Dropdown = () => {
  const { departmentNumber, setDepartmentNumber } = useContext(searchBarContext);
  const [extend, setExtend] = useState(false);

  const focusHandler = () => {
    setExtend(true)
  }

  const changeHandler = (e) => {
    setDepartmentNumber(e.target.value);
  }

  const clickHandler = (id) => (e) => {
    setDepartmentNumber(data[id].number)
    setExtend(false)
  }

  // const blurHandler = () => {
  //   setExtend(false)
  // }


  return (
    <div className={classes.dropdown} onFocus={focusHandler} >
      <SearchInput placeholder='系所編號' onChange={changeHandler} value={departmentNumber} />
      {extend ?
        (<div className={classes.content}>
          {data.filter(item => {
            const reg = new RegExp(departmentNumber);
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