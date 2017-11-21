import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3a7ed6',
    },
    title: {
        color: '#fff'
    },
    form: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        paddingLeft: 20
    },
    completed: {
        textDecorationLine: 'line-through'
    }
})

export default styles
