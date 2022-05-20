import React from "react";
import { View, Image, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn";
const items = [
  {
    id: 1,
    title: "Meditation Retreat",
  },
  {
    id: 2,
    title: "Meditation Retreat",
  },
  {
    id: 3,
    title: "Meditation Retreat",
  },
  {
    id: 4,
    title: "Meditation Retreat",
  },
  {
    id: 5,
    title: "Meditation Retreat",
  },
  {
    id: 6,
    title: "Meditation Retreat",
  },
];
export default function () {
  const tw = useTailwind();
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View
            style={tw(
              "flex flex-col items-center justify-start p-4 w-1/2 relative"
            )}
          >
            
            <View style={tw("bg-teal-500 bg-opacity-20 p-4 rounded-md ")}>
              <Image
                source={require("../assets/icon.png")}
                style={tw("w-32 h-32")}
              />
            </View>
            <Text style={tw("mt-2 text-xs")}>{item.title}</Text><Image
              source={require("../assets/audio-ico.png")}
              style={tw("w-12 h-12 absolute top-1 left-2")}
              resizeMode="contain"
            />
          </View>
        )}
      />
    </View>
  );
}
