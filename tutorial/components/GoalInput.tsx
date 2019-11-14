import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const [enteredGoal, setEnteredGoal] = useState("");

const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

const GoalInput = props => {
    return (
        <View style={styles.input}>
            <TextInput placeholder="Items:" 
                style={styles.textInput}
                onChangeText={goalInputHandler} />

            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        borderColor: 'black', 
        width: '80%', 
        borderWidth: 1,
        padding: 10
    }
});

export default GoalInput;