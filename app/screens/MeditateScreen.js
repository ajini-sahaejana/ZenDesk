import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useTailwind } from "tailwind-rn";
import colors from "../config/colors";

// import KeyboardWrapper from "../components/forms/KeyboardWrapper";
import Screen from "../components/Screen";

const items = [
  {
    id: 1,
    title: "1. What is Mindfulness - 2 Minute practice",
    url: "https://zendesk-edge.web.app/assets/1.png",
  },
  {
    id: 2,
    title: "2. Get Started - 1 Minute Practice",
    url: "https://zendesk-edge.web.app/assets/2.png",
  },
  {
    id: 3,
    title: "3. The Next Step - 6 minute Practice",
    url: "https://zendesk-edge.web.app/assets/3.png",
  },
];

export default function ({ navigation }) {
  const tw = useTailwind();

  return (
    // <KeyboardWrapper>
    <Screen>
      <View style={[stylesinline.container]}>
        <View>
          <Text style={stylesinline.text}>Let's Meditate!</Text>
        </View>
        <View style={stylesinline.space}></View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tw(
                "flex flex-col items-center justify-start p-4 w-1/2 relative"
              )}
              onPress={() => navigation.navigate("Meditation")}
            >
              <View>
                <Image
                  source={{
                    uri: item.url,
                    resizeMode: "contain",
                    width: "30",
                    height: "20",
                  }}
                  style={tw("w-32 h-32")}
                />
              </View>
              <Text style={tw("mt-2 text-xs")}>{item.title}</Text>
              <Image
                source={require("../assets/audio-ico.png")}
                style={tw("w-12 h-12 absolute top-1 left-2")}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </Screen>
  );
}

const stylesinline = StyleSheet.create({
  container: {
    marginTop: -25,
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
    marginTop: 100,
  },
});
