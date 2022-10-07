import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState } from "react";
import colors from "../config/colors";
import { ListItem, ListItemSeparator } from "../components/lists";

import { FlatList } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import KeyboardWrapper from "../components/forms/KeyboardWrapper";

const items = [
  {
    id: 1,
    title: "Introduction to Mindfulness",
    summary:
      "An overview of the role and relevance of mindfulness in the workplace.",
    targetScreen: "Messages",
    date: "60mins - 18/04/2022",
  },
  {
    id: 2,
    title: "Calm (Stress Management)",
    summary:
      "Learn to manage stress and emotional responses at work more effectively using mindfulness.n",
    targetScreen: "Messages",
    date: "60mins - 18/04/2022",
  },
  {
    id: 3,
    title: "Leadership Program",
    summary:
      "Creating a Thriving Team Culture (2-Part Workshop Series): Learn mindfulness-based social and emotional skills to more effectively manage yourself and foster the development of a high performing and mentally fit team, as well as broader organisational culture.",
    targetScreen: "Messages",
    date: "60mins - 11/06/2022",
  },
  {
    id: 4,
    title: "Connection (Relationships)",
    summary:
      "Mindfulness skills can support us to develop more self awareness and self respect, and in turn more collaborative team relationships as well as authentic leadership skills.",
    targetScreen: "Messages",
    date: "30mins - 8/04/2022",
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
    <KeyboardWrapper>
      <View>
        <View style={[stylesinline.container]}>
          <View>
            <Text style={stylesinline.text}>Event Planner</Text>
          </View>
          <View style={stylesinline.space}></View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <View
                style={[
                  tw(
                    "bg-teal-500 bg-opacity-30 px-4 py-3 rounded-md mx-3 mb-2"
                  ),
                  {
                    marginTop: 10,
                  },
                ]}
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
                  <TouchableOpacity
                    style={tw("flex flex-row items-center")}
                    onPress={() =>
                      Linking.openURL(
                        "https://calendar.google.com/calendar/r/eventedit?add=evets@zendesk-lk.tech"
                      )
                    }
                  >
                    <Text style={tw("underline mr-1 text-blue-600")}>
                      Add to Calendar
                    </Text>
                    <MaterialCommunityIcons
                      name={"calendar"}
                      size={24}
                      style={tw("text-blue-600")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </KeyboardWrapper>
  );
}
const stylesinline = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    // alignItems: "center",
  },
  text: {
    color: colors.primary,
    fontSize: 40,
    marginTop: 0,
  },
  space: {
    // fontSize: 20,
    marginTop: 50,
  },
});
