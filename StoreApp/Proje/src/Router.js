import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';



import Products from './Pages/Product';
import Details from './Pages/Detail/Detail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} options={{
        title:'Dükkan',
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:'#64b5f6'},
        headerTitleStyle:{color:'white'}
      }} />
      <Stack.Screen name="Details" component={Details} options={{
        title:'Dükkan',
        headerTitleAlign:'center',
        headerStyle:{backgroundColor:'#64b5f6'},
        headerTitleStyle:{color:'white'},
        headerTintColor:'white',
      }} />
    </Stack.Navigator>  
    </NavigationContainer>
  );
}