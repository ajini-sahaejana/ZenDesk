import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import { ListItem, ListItemSeparator } from "../components/lists";
import { FlatList } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const items = [
  {
    id: 1,
    title: "Meditation Retreat Part 1",
    summary: "Day one of the event summary pretty long text description",
    targetScreen: "Messages",
    date: "18/04/2022",
  },
  {
    id: 2,
    title: "Meditation Retreat Part 2",
    summary: "The second day of the event summary pretty long text description",
    targetScreen: "Messages",
    date: "18/04/2022",
  },
  {
    id: 3,
    title: "Meditation Retreat Part 2",
    summary: "The second day of the event summary pretty long text description",
    targetScreen: "Messages",
    date: "18/04/2022",
  },
  {
    id: 4,
    title: "Meditation Retreat Part 2",
    summary: "The second day of the event summary pretty long text description",
    targetScreen: "Messages",
    date: "18/04/2022",
  },
  {
    id: 5,
    title: "Meditation Retreat Part 2",
    summary: "The second day of the event summary pretty long text description",
    targetScreen: "Messages",
    date: "18/04/2022",
  },
  {
    id: 6,
    title: "Meditation Retreat Part 2",
    summary: "The second day of the event summary pretty long text description",
    targetScreen: "Messages",
    date: "18/04/2022",
  },
];
export default function EventScreen() {
  const tw = useTailwind();
  const [selected, setSelected] = useState([]);

  const toggleLike = (id) => {
    const items = { ...selected };
    items[id] = !items[id];
    setSelected(items);
  };
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <View
            style={tw(
              "bg-teal-500 bg-opacity-30 px-4 py-3 rounded-md mx-3 mb-3"
            )}
          >
            <View style={tw("flex flex-row justify-between mb-2")}>
              <Text style={tw("text-lg")}>{item.title}</Text>
              <MaterialCommunityIcons
                onPress={() => toggleLike(item.id)}
                name={`${selected[item.id] ? "heart" : "heart-outline"}`}
                size={24}
                style={tw("text-red-500")}
              />
            </View>
            <Text style={tw("text-sm")}>{item.summary}</Text>
            <View style={tw("flex flex-row justify-between mt-2")}>
              <Text>{item.date}</Text>
              <View style={tw("flex flex-row items-center")}>
                <Text style={tw("underline mr-1 text-blue-600")}>
                  Add to Calendar
                </Text>
                <MaterialCommunityIcons
                  name={"calendar"}
                  size={24}
                  style={tw("text-blue-600")}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
