import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import { ListItem, ListItemSeparator } from "../components/lists";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../components/Icon";
const menuItems = [
  {
    title: "Meditation Retreat Part 1",
    subTitle: "Day one of the event!",
    targetScreen: "Messages",
  },
  {
    title: "Meditation Retreat Part 2",
    subTitle: "The second day of the event!",
    targetScreen: "Messages",
  },
];
export default function EventScreen() {
  return (
    <View>
      <FlatList
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            onPress={() => navigation.navigate(item.targetScreen)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
