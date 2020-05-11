import React from 'react';
import classes from './Loader.module.scss';
import { useSelector } from 'react-redux';

const Loader = () => {
  const isLoading = useSelector(state => state.isLoading);

  return isLoading ? (
    <div className={classes.loader}>
      <p style={{ color: '#fff' }}>請稍等...</p>
    </div>
  ) : null;
}

export default Loader;