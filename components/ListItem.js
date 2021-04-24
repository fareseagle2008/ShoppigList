import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {GlobalStyles} from '../Styles/globalStyles';

export default function ListItem({item, deleteItem}) {
  return (
    <TouchableOpacity style={GlobalStyles.listItem}>
      <View style={GlobalStyles.listItemView}>
        <Text style={GlobalStyles.listItemText}>{item.text}</Text>
        <MaterialIcons name="remove-shopping-cart" size={24} color="#cc0000" onPress={() => deleteItem(item.id)} />
      </View>
    </TouchableOpacity>
  );
}
