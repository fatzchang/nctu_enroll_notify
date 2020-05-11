import React, { createContext, useState, useContext } from 'react';
import classes from '../sass/SearchBar.module.scss';
import { useDispatch } from 'react-redux';
import Button from '../components/Button/Button';
import SearchInput from '../components/SearchInput/SearchInput';
import Dropdown from '../components/Dropdown/Dropdown';
import { submitSearch } from '../store/actionCreator';

// context
export const searchBarContext = createContext();
const SearchBarContextProvider = ({ children }) => {
  let [examCode, setExamCode] = useState('');
  let [departmentNumber, setDepartmentNumber] = useState('');

  return (
    <searchBarContext.Provider value={{ examCode, departmentNumber, setExamCode, setDepartmentNumber }}>
      {children}
    </searchBarContext.Provider>
  )
}


// component
const SearchBar = () => {
  const { departmentNumber, examCode, setExamCode } = useContext(searchBarContext);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(submitSearch(departmentNumber, examCode));
  }

  return (
    <form className={classes.searchBar} onSubmit={submitHandler}>
      <Dropdown />
      <SearchInput value={examCode} onChange={(e) => { setExamCode(e.target.value) }} placeholder='准考證號碼' />
      <Button text='查詢' />
    </form>
  );
}

export default () => (
  <SearchBarContextProvider>
    <SearchBar />
  </SearchBarContextProvider>
)