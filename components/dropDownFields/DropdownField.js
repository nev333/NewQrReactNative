import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import isEmpty from "lodash/isEmpty";
//import styles from './DropdownFieldStyle';

// type Props = {
//   value: string;
//   label?: string;
//   placeholder?: string;
//   onChange: (value: string) => any;
//   list: string[];
// };

const DropdownField = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      {!isEmpty(props.label) && <Text style={styles.label}>{props.label}</Text>}
      <TouchableWithoutFeedback onPress={() => setOpen(!open)}>
        <View style={styles.input}>
          {isEmpty(props.value) ? (
            <Text style={styles.placeholder}>{props.placeholder}</Text>
          ) : (
            <Text style={styles.inputText}>{props.value}</Text>
          )}
        </View>
      </TouchableWithoutFeedback>
      {open && (
        <FlatList
          nestedScrollEnabled
          style={styles.listContainer}
          data={props.list}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                props.onChange(item);
                setOpen(false);
              }}
            >
              <View style={styles.listItem}>
                <Text style={styles.listItemText}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
          keyExtractor={(item, index) => item + index}
        />
      )}
    </View>
  );
};

DropdownField.defaultProps = {
  
  value: "",
  label: "",
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "30%",
    backgroundColor: "white",
  },
  label: {
    color: "blue",
    marginBottom: 4,
  },
  input: {
    borderWidth: 2,
    borderRadius: 9,
    paddingLeft: 14,
    height: 50,
    borderColor: "blue",
    justifyContent: "center",
  },
  inputText: {
    color: "blue",
  },
  placeholder: {
    color: "red",
  },
  dropdownContainer: {
    marginTop: 6,
    borderWidth: 2,
    borderRadius: 9,
    borderColor: "blue",
    color: "blue",
  },
  listContainer: {
    marginTop: 4,
    borderWidth: 2,
    borderRadius: 9,
    borderColor: "blue",
    color: "blue",
    height: "35%",
  },
  listItem: {
    height: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  listItemText: {
    color: "blue",
  },
  listSeperator: {
    height: 0.5,
    backgroundColor: "red",
  },
});

export default DropdownField;
