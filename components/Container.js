import { connect } from 'react-redux'
import { addTodo , completeTodo, removeTodo } from '../actions/todo'
import  Todo from './Todo'

const mapStateToProps = state => ({
    state: state.todo
})

const mapDispatchToProps = (dispatch, props) => ({
    actions: {
        addTodo: text => dispatch(addTodo(text)),
        completeTodo: id => dispatch(completeTodo(id)),
        removeTodo: id => dispatch(removeTodo(id))
    }
})

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)

export default Container
