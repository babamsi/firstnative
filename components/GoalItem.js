import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { StyleSheet } from 'react-native'

const GoalItem = (props) => (
    <TouchableOpacity activeOpacity={0.1} onPress={props.Delete.bind(this, props.id)}>
        <View style={styles.listItem}><Text>{props.title}</Text></View>
    </TouchableOpacity>
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