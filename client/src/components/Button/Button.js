import React from 'react';
import classes from './Button.module.scss';

const Button = ({ text }) => {
  return (
    <button className={classes.button}>{text}</button>
  );
}

export default Button;