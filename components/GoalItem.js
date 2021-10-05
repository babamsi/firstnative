import React from 'react'
import {View, Text} from 'react-native'
import { StyleSheet } from 'react-native'

const GoalItem = (props) => (
    <View style={styles.listItem}><Text>{props.title}</Text></View>
)

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'black'
      }
})

export default GoalItem