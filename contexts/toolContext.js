import { createContext, useState, useContext } from "react";

const toolContext = createContext(null);

export const ToolProvider = (props) => {
  const [state, setState] = useState({
    inventory: [],
  });
  const updateInventory = (name) => {
    const inventory = [...state.inventory];
    const existing = inventory.find((i) => {
      return i.name === name;
    });
    if (!existing) {
      inventory.push({ name: name, inStock: true });
    } else {
      existing.inStock = !existing.inStock;
    }

    setState({
      ...state,
      inventory,
    });
  };

  return (
    <toolContext.Provider value={{ state, setState, updateInventory }}>
      {props.children}
    </toolContext.Provider>
  );
};

export const useToolProvider = () => {
  const data = useContext(toolContext);
  return data;
};