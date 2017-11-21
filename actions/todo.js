export const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        todo
    }
}

export const completeTodo = id => {
    return {
        type: 'COMPLETE_TODO',
        id
    }
}

export const removeTodo = id => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}
