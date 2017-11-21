import React from 'react'
import { Alert } from 'react-native'
import { Form, Item, Input } from 'native-base';
import styles from '../stylesheets/style'

const form = ({ addTodo }) => (
    <Form style={ styles.form }>
        <Item last>
            <Input
                placeholder='new todo'
                returnKeyType='next'
                onSubmitEditing={
                    (event) => {
                        event.nativeEvent.text
                            ? addTodo({ text: event.nativeEvent.text })
                            : Alert.alert('ToDoを入力してください')
                        this.input._root.clear()
                    }
                }
                ref={ ref => { this.input = ref } }
            />
        </Item>
    </Form>
)

export default form
