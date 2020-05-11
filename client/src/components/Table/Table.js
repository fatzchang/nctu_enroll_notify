import React from 'react';
import classes from './Table.module.scss';
import { useSelector } from 'react-redux';
import Statisic from '../Statisic/Statisic';

const decideTheme = (signed) => {
  let theme = '';
  switch (signed) {
    case '已報到!':
      theme = classes['signed'];
      break
    case '放棄':
      theme = classes['abandon'];
      break;
    case '自動取消':
      theme = classes['cancelled'];
      break;
    default:
  }
  return theme;
}

const Table = () => {
  const { selected, examCode } = useSelector(state => {
    return { selected: state.selectedData, examCode: state.examCode }
  });

  if (!selected.data.length) {
    return null
  }


  let order = 0;
  let firstWaiting = 0;
  let abandon = 0;
  let flag = false;

  // distance = position - firstWaiting - abandon;

  const tableData = selected.data.map((item, index) => {
    let theme = decideTheme(item.signed);

    if (item.signed === '備取' && !firstWaiting) {
      firstWaiting = index + 1;
      flag = true; // 打開開關
    }

    if (item.signed === '自動取消' && flag) {
      abandon++
    }

    if (item.examCode === examCode) {
      theme = classes['me']
      order = index + 1;
      flag = false;
    }

    return (
      <tr className={[classes.tr, theme].join(' ')} id={item.examCode} key={item.id}>
        <td className={classes.td}>{index + 1}</td>
        <td className={classes.td}>{item.examCode}</td>
        <td className={classes.td}>{item.admit}</td>
        <td className={classes.td}>{item.type}</td>
        <td className={classes.td}>{item.signed}</td>
      </tr>
    );
  })

  const waiting = order - firstWaiting - abandon;

  return selected.data.length ? (
    <div className={classes.tableWrapper}>
      <h1 className={classes.departmentName}>{selected.name}</h1>
      <Statisic
        order={order}
        firstWaiting={firstWaiting}
        abandon={abandon}
        waiting={waiting >= 0 ? waiting : 0} />
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
          {tableData}
        </tbody>
      </table>
    </div>
  ) : null;
}

export default Table;