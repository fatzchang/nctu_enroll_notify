import React from 'react';
import classes from './Statisic.module.scss';

const Statisic = ({ order, waiting, firstWaiting, abandon }) => {
  return (
    <div className={classes.statistic}>
      <p className={classes.text}>你的順序: {order} 號</p>
      <p className={classes.text}>第一個在等的人: {firstWaiting} 號</p>
      <p className={classes.text}>其中自動取消的: {abandon} 個</p>
      <p className={classes.text}>所以你前面還有: {waiting} 個</p>
    </div>
  );
}

export default Statisic;