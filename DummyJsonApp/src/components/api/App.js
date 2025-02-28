import React from 'react';
import { NavigationContainer } from '@react-navigationnative';
import { createStackNavigator } from '@react-navigationstack';
import ItemListScreen from '.srcscreensItemListScreen';
import ItemDetailScreen from '.srcscreensItemDetailScreen';

const Stack = createStackNavigator();

const App = () = {
  return (
    NavigationContainer
      Stack.Navigator initialRouteName=ItemList
        Stack.Screen name=ItemList component={ItemListScreen} 
        Stack.Screen name=ItemDetail component={ItemDetailScreen} 
      Stack.Navigator
    NavigationContainer
  );
};

export default App;