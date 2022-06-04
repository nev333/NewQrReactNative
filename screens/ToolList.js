import { FlatList, View, TextInput, Text, StyleSheet, ScrollView } from "react-native";

import { useState } from "react";


  const tools = [
    {
      id: "tool-0",
      name: "Blower",
      location: "",
    },
    {
      id: "tool-1",
      name: "SDS Drill",
      location: "",
    },
    {
      id: "tool-2",
      name: "Concrete saw",
      location: "",
    },
    {
      id: "tool-3",
      name: "Jig Saw",
      location: "",
    },
    {
      id: "tool-4",
      name: "Heat Gun",
      location: "",
    },
    {
      id: "tool-5",
      name: "Sander",
      location: "",
    },
    {
      id: "tool-6",
      name: "Planer",
      location: "",
    },
    {
      id: "tool-7",
      name: "Router",
      location: "",
    },
    {
      id: "tool-8",
      name: "Grinder Small",
      location: "",
    },
    {
      id: "tool-9",
      name: "Grinder Big",
      location: "",
    },
    {
      id: "tool-10",
      name: "Chanisaw Small",
      location: "",
    },
    {
      id: "tool-11",
      name: "Chainsaw Big",
      location: "",
    },
    {
      id: "tool-12",
      name: "Compactor Small",
      location: "",
    },
    {
      id: "tool-13",
      name: "Compactor Big",
      location: "",
    },
    {
      id: "tool-14",
      name: "Breaker",
      location: "",
    },
    {
      id: "tool-15",
      name: "Concrete Mixer",
      location: "",
    },
    {
      id: "tool-16",
      name: "Water Blaster",
      location: "",
    },
    {
      id: "tool-17",
      name: "Drop Saw Ryobi",
      location: "",
    },
    {
      id: "tool-18",
      name: "Drop Saw Dewault",
      location: "",
    },
    {
      id: "tool-19",
      name: "Post Hole Borer",
      location: "",
    },
    {
      id: "tool-20",
      name: "2 Stroke Petrol Can",
      location: "",
    },
    {
      id: "tool-21",
      name: "Finishing Gun Hitachi",
      location: "",
    },
    {
      id: "tool-22",
      name: "Finishing Gun Paslode",
      location: "",
    },
    {
      id: "tool-23",
      name: "Saber Saw 1",
      location: "",
    },
    {
      id: "tool-24",
      name: "Saber Saw 2",
      location: "",
    },
    {
      id: "tool-25",
      name: "Rattle Gun",
      location: "",
    },
    {
      id: "tool-26",
      name: "Submersible Pump",
      location: "",
    },
    {
      id: "tool-27",
      name: "Concrete Vibrator",
      location: "",
    },
    {
      id: "tool-28",
      name: "Cutter Bender",
      location: "",
    },
  ];

  export default function ToolList({ navigation }) {
 
const [name, setName] = useState("")
const [data, setData] = useState(tools)

const handleChange = (value) => {
  setName(value)
  filterData(value)
}

const filterData = (value) => {
  const lowerCaseValue = value.toLowerCase().trim();
  if (!lowerCaseValue) {
    setData(tools);
  } else {
    const filteredData = tools.filter((item) => {
      return Object.keys(item).some((key) => {
        return item[key].toString().toLowerCase().includes(lowerCaseValue);
      });
    });

    setData(filteredData);
  }
};

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput 
        style={styles.input}
        placeholder="Search Tools"
        value={name}
        onChangeText={(inputText) => handleChange(inputText)}
        
        />
        <View>
      {data.map((data) => {
        return (
          <View style={styles.tool}>
          <View style={[styles.innerContainer]}>
            <Text style={styles.title} key={data.id} >{data.name}</Text>
          </View>
          </View>
        )
      })}
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  tool: {
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
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    
  },
  input: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  }
})
