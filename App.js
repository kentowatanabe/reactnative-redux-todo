import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers/'
import Container from './components/Container'

const store = createStore(Reducers)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <Container />
            </Provider>
        )
    }
}
