import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {GlobalStyles} from '../Styles/globalStyles';

export default function AddItem({ addItem}) {

  // const [textInput, setTextInput] = useState()  
  const [text, setText] = useState('');

    const onChange = (textValue) => 
    {
      setText(textValue);
    }
  return (
    <View>
      <TextInput value={text} placeholder='Add Item...' style={GlobalStyles.input} onChangeText={onChange}/>
      <TouchableOpacity style={GlobalStyles.btn} onPress={() => addItem(text)} onPressOut={()=> setText('')}>
        <Text style={GlobalStyles.btnText}><MaterialIcons name="add-shopping-cart" size={24} color="#fff" />Add Item</Text>
      </TouchableOpacity>
    </View>
  );

  }
