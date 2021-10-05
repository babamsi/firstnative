import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';


const GoalInput = (props) => (
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goals"
        onChangeText={props.InputHandler}
        value={props.enteredGoal}
        style={styles.input} />
        <Button title="ADD" onPress={props.setGoalHandler}/>
      </View>
)

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'
      },
      input: {
        width: '80%', borderColor: 'black', borderWidth: 1, padding: 10
      }
})

export default GoalInput
