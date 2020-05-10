import React from 'react';
import classes from './Table.module.scss';

const Table = () => {
  fetch('/api/get', {
    method: 'POST',
    body: JSON.stringify({ examCode: '1101322' }),
    headers: {
      'content-type': 'application/json'
    },
  }).then(res => { console.log(res) });


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
        <tr className={classes.tr}>
          <td className={classes.td}>1</td>
          <td className={classes.td}>1101352</td>
          <td className={classes.td}>正取</td>
          <td className={classes.td}>一般生</td>
          <td className={classes.td}>報到</td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>1</td>
          <td className={classes.td}>1101352</td>
          <td className={classes.td}>正取</td>
          <td className={classes.td}>一般生</td>
          <td className={classes.td}>報到</td>
        </tr>
        <tr className={classes.tr}>
          <td className={classes.td}>1</td>
          <td className={classes.td}>1101352</td>
          <td className={classes.td}>正取</td>
          <td className={classes.td}>一般生</td>
          <td className={classes.td}>報到</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;