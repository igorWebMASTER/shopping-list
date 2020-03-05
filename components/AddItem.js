import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity } 
from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddItem = ({ title, addItem }) => {
  const [text, setText] = useState('');
  
  const onchange = (textValue) => setText(textValue);

  return (
    <View>
        <TextInput 
        placeholder="Add Item..." 
        style={styles.input} 
        onChangeText={onchange} />
        <TouchableOpacity 
        style={styles.btn} 
        onPress={() => addItem(text)} >
           <Text style={styles.btnText}>
             <Ionicons name="md-add" size={20} color="darkslateblue"/> Add Item</Text>
        </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText:{
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddItem;