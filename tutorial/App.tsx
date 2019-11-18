import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  
  const [enteredGoals, setEnteredGoals] = useState([]);

  const addGoalHandler = goal => {
    setEnteredGoals([...enteredGoals, {uid: Math.random().toString, value: goal}]);
  }


  return (
    <View style={{ padding: 50 }}>
      <GoalInput onAddGoal={addGoalHandler}/>
      
      <FlatList keyExtractor={(item, index)=>item.uid}
        data={enteredGoals} renderItem={itemData=><GoalItem text={itemData.item.value} />} />
    </View>
  );
}


