import React from 'react';
import classes from './Table.module.scss';
import { useSelector } from 'react-redux';

const Table = () => {
  const data = useSelector(state => state.selectedData);

  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.tr}>
          <th className={classes.th}>順序</th>
          <th className={classes.th}>考生編號</th>
          <th className={classes.th}>正備取</th>
          <th className={classes.th}>報考類別</th>
          <th className={classes.th}>報到狀態</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr className={classes.tr}>
            <td className={classes.td}>{index + 1}</td>
            <td className={classes.td}>{item.examCode}</td>
            <td className={classes.td}>正取</td>
            <td className={classes.td}>一般生</td>
            <td className={classes.td}>報到</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;