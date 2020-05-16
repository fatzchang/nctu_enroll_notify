import React from 'react';
import classes from './Loader.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFan } from '@fortawesome/free-solid-svg-icons'

const Loader = () => {
  const isLoading = useSelector(state => state.isLoading);

  return isLoading ? (
    <div className={classes.loader}>
      <FontAwesomeIcon icon={faFan} className={classes.icon} />
    </div>
  ) : null;
}

export default Loader;