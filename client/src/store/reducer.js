const initialState = {
  data: {},
  examCode: '',
  selectedData: {
    name: '',
    data: []
  },
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_DATA':
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.departmentNumber]: action.payload.data
        }
      }

    case 'SELECT_DEPARTMENT':
      return {
        ...state,
        selectedData: {
          name: action.payload.departmentName,
          data: [
            ...state.data[action.payload.departmentNumber]
          ]
        }
      }
    case 'UPDATE_EXAM_CODE':
      return {
        ...state,
        examCode: action.payload.examCode
      }

    default:
      return state;
  }
}