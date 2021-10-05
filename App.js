import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEntredGoal] = useState('');
  const [courseGoal, setCourseGoal] = useState([]);

  const InputHandler = (enteredText) => {
    setEntredGoal(enteredText);
  }
  const setGoalHandler = () => {
    setCourseGoal([...courseGoal, {id: Math.random().toString(), value: enteredGoal}]);
  }
  return (
    <View style={styles.screen}>
      <GoalInput 
        InputHandler={InputHandler}
        enteredGoal={enteredGoal}
        setGoalHandler={setGoalHandler}
        />
      <FlatList 
        data={courseGoal}
        renderItem={itemData => <GoalItem title={itemData.item.value}/>}
      />
       
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});
