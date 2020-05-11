import React from 'react';
import classes from './Button.module.scss';

const Button = ({ text }) => {
  return (
    <button type='submit' className={classes.button}>{text}</button>
  );
}

export default Button;