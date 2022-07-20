import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Button from "../components/ui/Button";
import { StyleSheet, Text, View } from "react-native";

import { AuthContext } from "../store/auth-context";


function WelcomeScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("QRScanner");
  }
  function toolPressHandler() {
    navigation.navigate("ToolList");
  }

  const [fetchedMessage, setFetchedMessage] = useState("");
 

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://tool-qr-code-scanner-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });

    
  }, [token]);




  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You are logged in as </Text>
      <Text>Would you like to scan a tool out?</Text>
      <Button title={"QR Scanner"} onPress={pressHandler}>
        QR Scanner
      </Button>
      <Text>Or would you like to locate a tool from the tool list?</Text>
      <Button title={"Tool List"} onPress={toolPressHandler}>
        Tool List
      </Button>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}


export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
