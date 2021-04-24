import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert,Image, ImageBackground } from 'react-native';
import  Header  from './components/Header';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {GlobalStyles} from './Styles/globalStyles';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-black': require('./assets/fonts/Nunito-Black.ttf'),
  'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
  'nunito-semibold': require('./assets/fonts/Nunito-SemiBold.ttf')
});

export default function App() {


  const [fontsLoaded, setFontsLoaded] = useState(false);

  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'}
  ])

  const deleteItem = (id) =>{
    Alert.alert(
      "Warning",
      "Are you sure",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        { text: "OK", onPress: () =>     setItems(prevItem => {
          return prevItem.filter(item => item.id != id);
        }) }
      ]
    );



  }

  const addItem =(text) =>{
    if(!text) {
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems(prevItems =>{
        return [{id: uuidv4(), text}, ...prevItems];
      });
    }
   
  }

  if(fontsLoaded){
    return (
      
      <View style={GlobalStyles.container}>
        <ImageBackground style={GlobalStyles.backgroundImage} source={require('./assets/shopping.jpg')} opacity={0.1}>
        <Header />
          <AddItem addItem = {addItem} />
          <FlatList data={items} renderItem={({item}) => (
            <ListItem item = {item} deleteItem = {deleteItem} />
          )} />
          </ImageBackground>
          <StatusBar style="auto" />
      </View>
      
        
    );
    
  }else{
    return(
      <AppLoading 
      startAsync={getFonts} 
      onFinish={()=>setFontsLoaded(true)}
      onError={console.warn}
      />
    )
    
  }

}


