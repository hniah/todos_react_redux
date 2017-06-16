const default_todos = [ {id: 1, text: 'Task 1', completed: false},
                        {id: 2, text: 'Task 2', completed: true}
                      ]
const todos = (state = default_todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos
