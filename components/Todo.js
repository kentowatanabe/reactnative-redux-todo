import React from 'react'
import { Container, Content } from 'native-base';
import Header from './header'
import Form from './form'
import List from './list'

const Todo = ({ state, actions }) => (
    <Container>
        <Header />
        <Content>
            <Form addTodo={ actions.addTodo } />
            <List state={ state } actions={ actions } />
        </Content>
    </Container>
)

export default Todo
