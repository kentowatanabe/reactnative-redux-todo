import React from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
import styles from '../stylesheets/style'

const header = () => (
    <Header style={ styles.header }>
        <Left/>
            <Body>
                <Title style={ styles.title }>Todo</Title>
            </Body>
        <Right />
    </Header>
)

export default header
