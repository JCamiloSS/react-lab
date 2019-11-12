import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [enteredGoals, setEnteredGoals] = useState([]);


  const goalInputHandler = (enteredText)=>{
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = ()=>{
    setEnteredGoals([...enteredGoals, enteredGoal]);
  }


  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems:'center'}}>
        <TextInput placeholder="Items:" value={this.name}
        style={{borderBottomColor: 'black', width: '80%', borderWidth: 1, padding: 5}}
        onChangeText={goalInputHandler}/>

        <Button title="ADD" onPress={addGoalHandler}/>
        
      </View>
      <View>
        {enteredGoals.map((goal)=><Text>{goal}</Text>)}
      </View>
    </View>
  );
}


