import axios from 'axios';
import departments from '../departments';


function shouldFetchData(state, departmentNumber) {
  return !state.data[departmentNumber]; // 空的就回傳true
}

function fetchData(departmentCode, examCode) {
  return axios('/api/get', {
    params: {
      departmentCode,
      examCode
    },
  });
}

function selectDepartment(departmentNumber, departmentName) {
  return {
    type: 'SELECT_DEPARTMENT',
    payload: {
      departmentName,
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

function updateExamCode(examCode) {
  return {
    type: 'UPDATE_EXAM_CODE',
    payload: {
      examCode
    }
  }
}

export function submitSearch(departmentNumber, examCode) {
  return function (dispatch, getState) {
    dispatch(updateExamCode(examCode));

    if (shouldFetchData(getState(), departmentNumber)) {
      // get department code
      const target = departments.find(item => item.number === departmentNumber)
      if (target) {
        fetchData(target.code, examCode).then(res => {
          dispatch(updateData(departmentNumber, res.data.data));
          dispatch(selectDepartment(departmentNumber, target.name));
        })
      }
    } else {
      dispatch(selectDepartment(departmentNumber));
    }
  }
}