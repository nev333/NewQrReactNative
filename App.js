import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ToolList from "./screens/ToolList";
import QRScanner from "./screens/QRScanner";
import GlobalState from "./contexts/GlobalState";
import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Colors } from "./constants/styles";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import IconButton from "./components/ui/IconButton";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit}"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ToolList" component={ToolList} />
      <Stack.Screen name="QRScanner" component={QRScanner} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

// export default class App extends React.Component {
//   render() {
//     return (
//       <GlobalState>
//         <StatusBar style="dark" />

//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignupScreen} />
//             <Stack.Screen name="HomeScreen" component={HomeScreen} />
//             <Stack.Screen name="ToolList" component={ToolList} />
//             <Stack.Screen name="QRScanner" component={QRScanner} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </GlobalState>
//     );
//   }
// }

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return <AppLoading />;
  }

  return <Navigation />;
}

function App() {
  return (
    <GlobalState>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </GlobalState>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {},
});
