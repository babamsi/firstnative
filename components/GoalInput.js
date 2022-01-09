import React, {useState} from 'react';
import { View, TextInput, Button, Modal } from 'react-native';
import { StyleSheet } from 'react-native';


const GoalInput = (props) => {
  const [enteredGoal, setEntredGoal] = useState('');
  const InputHandler = (enteredText) => {
    setEntredGoal(enteredText);
  }
  const goalHandler = () => {
    props.setGoalHandler(enteredGoal);
    setEntredGoal('')
  }
    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goals"
        onChangeText={InputHandler}
        value={enteredGoal}
        style={styles.input} />
        <View style={styles.buttonContainer}>
          <Button title='CANCEL' color={'red'} onPress={props.hideModal}/>
          <Button title="ADD " onPress={goalHandler}/>
        </View>
      </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
      }

})

export default GoalInput
