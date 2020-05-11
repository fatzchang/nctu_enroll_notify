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

function loading() {
  return {
    type: 'LOADING',
  }
}

function loaded() {
  return {
    type: 'LOADED',
  }
}

export function submitSearch(departmentNumber, examCode) {
  return function (dispatch, getState) {
    const state = getState();
    if (state.isLoading) {
      return;
    }

    // if (!examCode || examCode.length !== 7) {
    //   return;
    // }

    dispatch(updateExamCode(examCode));

    const target = departments.find(item => item.number === departmentNumber)
    if (target) {
      dispatch(loading());

      if (shouldFetchData(state, departmentNumber)) {
        fetchData(target.code, examCode).then(res => {
          dispatch(updateData(departmentNumber, res.data.data));
          dispatch(selectDepartment(departmentNumber, target.name));
          dispatch(loaded());
        });
      } else {
        dispatch(selectDepartment(departmentNumber, target.name));
        dispatch(loaded());
      }
    }
  }
}