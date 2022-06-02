import { FlatList, Button, View } from "react-native";
import CategoryGridTile from "../components/categoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import QRScanner from "./QRScanner";

function HomeScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("QRScanner");
  }
  function toolPressHandler() {
    navigation.navigate("ToolList");
  }
  return (
    <View>
      <Button title={"QR Scanner"} onPress={pressHandler} />
      <Button title={"Tool List"} onPress={toolPressHandler} />
    </View>
  );
}

export default HomeScreen;
