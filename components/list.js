import React from 'react'
import { SwipeRow, Button, Icon, View, Text } from 'native-base';
import styles from '../stylesheets/style'


const list = ({ state, actions }) => (
    <View>
        { state.todos.map(todo => (
            <SwipeRow
                key={ todo.id }
                leftOpenValue={75}
                rightOpenValue={-75}
                left={
                    <Button success onPress={ () => actions.completeTodo(todo.id) }>
                        <Icon active name={ todo.completed ? 'ios-redo' : 'ios-checkmark' } />
                    </Button>
                }
                body={
                    <View>
                        <Text style={ [styles.list, todo.completed ? styles.completed : ''] }>{ todo.text }</Text>
                    </View>
                }
                right={
                    <Button danger onPress={ () => actions.removeTodo(todo.id) }>
                        <Icon active name="trash" />
                    </Button>
                }
            />
        )) }
    </View>
)

export default list
