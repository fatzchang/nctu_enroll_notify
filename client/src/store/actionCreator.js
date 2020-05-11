import axios from 'axios';
import departments from '../departments';


function shouldFetchData(state, departmentNumber) {
  return !state.data[departmentNumber]; // 空的就回傳true
}

function fetchData(departmentCode) {
  return axios('/api/get', {
    params: {
      departmentCode
    },
  });
}

function selectDepartment(departmentNumber) {
  return {
    type: 'SELECT_DEPARTMENT',
    payload: {
      departmentNumber
    }
  }
}

function updateData(departmentNumber, data) {
  return {
    type: 'UPDATE_DATA',
    payload: {
      departmentNumber,
      data
    }
  }
}

export function submitSearch(departmentNumber) {
  return function (dispatch, getState) {
    if (shouldFetchData(getState(), departmentNumber)) {
      // get department code
      const target = departments.find(item => item.number === departmentNumber)
      if (target) {
        fetchData(target.code).then(res => {
          dispatch(updateData(departmentNumber, res.data.data));
          dispatch(selectDepartment(departmentNumber));
        })
      }
    } else {
      dispatch(selectDepartment(departmentNumber));
    }
  }
}