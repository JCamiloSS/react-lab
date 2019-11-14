import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItems}>
            <Text>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black'
    }
});

export default GoalItem;