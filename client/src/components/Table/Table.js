import React from 'react';
import classes from './Table.module.scss';
import { useSelector } from 'react-redux';

const Table = () => {
  const { selected, examCode } = useSelector(state => {
    return { selected: state.selectedData, examCode: state.examCode }
  });

  return selected.data.length ? (
    <div className={classes.tableWrapper}>
      <h1 className={classes.departmentName}>{selected.name}</h1>
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
          {selected.data.map((item, index) => {
            let theme = '';
            switch (item.signed) {
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

            if (item.examCode === examCode) {
              theme = classes['me']
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
          })}
        </tbody>
      </table>
    </div>
  ) : null;
}

export default Table;