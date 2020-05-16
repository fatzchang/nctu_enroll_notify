import React from 'react';
import classes from './Bug.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'

const Bug = () => {
  return (
    <a href="mailto:exam@fatz.tw?subject=錯誤回報（交大備取查詢）" className={classes.Bug}>
      <FontAwesomeIcon icon={faBug} className={classes.icon} />
    </a>
  );
}

export default Bug;