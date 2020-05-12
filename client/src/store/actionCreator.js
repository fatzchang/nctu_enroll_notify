import axios from 'axios';
import departments from '../departments';


function isMemoized(state, departmentNumber) {
  return !!state.data[departmentNumber]; // 若已memoized回傳true
}

function fetchData(departmentCode, examCode, memoized) {
  return axios('/api/get', {
    params: {
      departmentCode,
      examCode,
      memoized
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

    const target = departments.find(item => item.number === departmentNumber)
    if (!target) {
      return;
    }

    // 如果同樣的資料再傳一次，直接reject
    if (target.name === state.selectedData.name && examCode === state.examCode) {
      return;
    }

    dispatch(loading());

    // 更新examCode
    dispatch(updateExamCode(examCode));

    const memoized = isMemoized(state, departmentNumber);
    fetchData(target.code, examCode, memoized).then(res => {
      if (!memoized) {
        dispatch(updateData(departmentNumber, res.data.data));
      }

      dispatch(selectDepartment(departmentNumber, target.name));
      dispatch(loaded());
    });
  }
}