import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "My Progress",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        {/* <View style={[stylesinline.container]}> */}
        <View>
          <Text style={stylesinline.text}>My Account</Text>
        </View>
        <View style={stylesinline.space}></View>
        <ListItem
          title="Ajini Perera"
          subTitle="asperera.slir@gmail.com"
          image={require("../assets/img/reading.png")}
        />
        {/* </View> */}

        <View style={styles.container2}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => menuItem.title}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            )}
          />
        </View>

        <ListItem
          title="Log Out"
          IconComponent={
            <Icon name="logout" backgroundColor={colors.primary} />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.lightGreen,
    padding: 10,
    paddingTop: 10,
    // marginVertical: 20,
    marginBottom: 20,
    paddingBottom: 80,
  },
  screen: {
    margin: 0,
    padding: 20,
    marginTop: -35,
    // backgroundColor: colors.light,
  },
  container2: {
    // backgroundColor: colors.lightGreen,
    marginBottom: 165,
  },
});
const stylesinline = StyleSheet.create({
  container: {
    margin: 0,
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
export default AccountScreen;
