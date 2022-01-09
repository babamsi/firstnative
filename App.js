import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [courseGoals, setCourseGoal] = useState([]);
  const [addModal, setAddModal] = useState(false);

  const setGoalHandler = goalTitle => {
    setCourseGoal([...courseGoals, {id: Math.random().toString(), value: goalTitle}]);
    setAddModal(false)
  }
  const DeleteHandler = goalId => {
       setCourseGoal(courseGoals => {
        return courseGoals.filter((goalItem) => goalItem.id !== goalId)
      })
  }
  const hideModal = () => {
    setAddModal(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Course Goal" onPress={() => setAddModal(true)}/>
      <GoalInput 
        visible={addModal}
        setGoalHandler={setGoalHandler}
        hideModal={hideModal}
        />
      <FlatList 
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} Delete={DeleteHandler} title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

});
