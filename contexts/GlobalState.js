import React from 'react';
import Context from './toolContext';

export default class GlobalState extends React.Component{
    state = {
        names: ["Greg","Ryan","Rob","Max"],
        tools: [
            {
                id: "tool-0",
                name: "Blower",
                location: "",
               // location: this.context.names
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
        ],
    }

    compare = (name, tool) => {
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
    render(){
        return(
            <Context.Provider
                value={{
                    names: this.state.names,
                    compare: this.compare
                }}
            >
            {this.props.children}
            </Context.Provider>
        )
    }
    
}