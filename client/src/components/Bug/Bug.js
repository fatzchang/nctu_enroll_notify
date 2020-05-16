import React from 'react';
import classes from './Bug.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

const Bug = () => {
  return (
    <a href="mailto:exam@fatz.tw" className={classes.Bug}>
      <FontAwesomeIcon icon={faBug} className={classes.icon} />
    </a>
  );
}

export default Bug;