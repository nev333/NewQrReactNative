import { FlatList, View, TextInput } from "react-native";
import CategoryGridTile from "../components/categoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { useState } from "react";

function ToolList({ navigation }) {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const handleChange = (value) => {
    setName(value);
    filterData(value);
  };
  const filterData = (value) => {
    const lowerCaseValue = value.toString().toLowercase().trim();
    if (!lowerCaseValue) {
      setData(tools);
    } else {
      const filteredData = tools.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().includes(lowerCaseValue);
        });
      });

      setData(filteredData);
    }
  };
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("ToolList");
    }
    return (
      <View>
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      </View>
    );
  }

  return (
    <View>
      <TextInput 
      placeholder="Search Here"
      onChangeText={(value) => handleChange(value)}
      value={name}
      />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

export default ToolList;
