let nextId = 0

export default (state = { todos: [] }, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.todo) {
                state.todos.push({
                    id: ++nextId,
                    completed: false,
                    text: action.todo.text
                })
            }
            return Object.assign({}, state)

        case 'COMPLETE_TODO':
            state.todos = state.todos.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } :todo
            )
            return Object.assign({}, state)

        case 'REMOVE_TODO':
            state.todos = state.todos.filter(todo =>
                todo.id !== action.id
            )
            return Object.assign({}, state)

        default:
            return state
    }
}
