import { Button, View, StyleSheet } from "react-native";


export default function HomeScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("QRScanner");
  }
  function toolPressHandler() {
    navigation.navigate("ToolList");
  }
  return (
    <View style={styles.container}>
      <Button style={styles.button} title={"QR Scanner"} onPress={pressHandler} />
      <Button style={styles.button} title={"Tool List"} onPress={toolPressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  button: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    padding: 10,
  }
})
