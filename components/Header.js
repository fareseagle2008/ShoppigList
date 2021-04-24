import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {GlobalStyles} from '../Styles/globalStyles';

export default function Header(props) {
  return (
    <View style={GlobalStyles.header}>
      <Text style = {GlobalStyles.text}>{props.title}</Text>
    </View>
  );
}
Header.defaultProps = {
    title: 'Shopping List'
}
