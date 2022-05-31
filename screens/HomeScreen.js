import { FlatList, Button, View } from "react-native";
import CategoryGridTile from "../components/categoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import MealsOverviewScreen from "./MealsOverviewScreen";

function HomeScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("MealsOverview");
  }
  function toolPressHandler() {
    navigation.navigate("CategoriesScreen");
  }
  return (
    <View>
      <Button title={"Meals"} onPress={pressHandler} />
      <Button title={"Categories"} onPress={toolPressHandler} />
    </View>
  );
}

export default HomeScreen;
