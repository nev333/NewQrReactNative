import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ToolList from "./screens/ToolList";
import QRScanner from "./screens/QRScanner";
import GlobalState from "./contexts/GlobalState";
import React from 'react';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ToolList" component={ToolList} />
      <Stack.Screen name="QRScanner" component={QRScanner} />
    </Stack.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default class App extends React.Component {
  render(){
    return (
      <GlobalState>
        <StatusBar style="dark" />
        
        <NavigationContainer>

          <Stack.Navigator>

            <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ToolList" component={ToolList} />
            <Stack.Screen name="QRScanner" component={QRScanner} />
            
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalState>
    );
  }
  
}

// function App() {
//   return (
//     <GlobalState>
//       <StatusBar style="dark" />
//       <NavigationContainer>
//         <Stack.Navigator>
          
//           <Stack.Screen name="HomeScreen" component={HomeScreen} />
//           <Stack.Screen name="ToolList" component={ToolList} />
//           <Stack.Screen name="QRScanner" component={QRScanner} />
          
//         </Stack.Navigator>
//       </NavigationContainer>
//     </GlobalState>
//   );
// }

//export default App;

const styles = StyleSheet.create({
  container: {},
});
