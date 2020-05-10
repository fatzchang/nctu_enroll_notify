const initialState = {
  data: {
    '113': []
  },
  selectedData: [{
    examCode: '1101352',
  }, {
    examCode: '1101357',
  }],
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
        selectedData: [
          ...state.data[action.payload.departmentNumber]
        ]
      }

    default:
      return state;
  }
}