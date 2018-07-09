const persons = (state = { data: [] }, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        data: [
          ...state.data,
          {
            id: action.id,
            mail: action.mail,
            name: action.name,
            completed: false
          }
        ]
      }
    case 'TOGGLE_PERSON':
      return {
        data: state.data.map(todo =>
          (todo.id === action.id)
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      }
    case "GET_DATA":
      return {
        ...state,
        data: action.payload

      }
    case "DELETE":
      return {
        ...state,
        data: state.data.filter(item => !item.checked)

      }
   
    case 'TOGGLE_CHECKED':
      return {
        data: state.data.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, checked: !todo.checked }
          }
          return todo
        }
        )
      }
    default:
      return state
  }
}

export default persons