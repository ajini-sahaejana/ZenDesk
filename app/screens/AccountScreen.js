import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

function AccountScreen(props) {
  return (
    <Screen>
      <View style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            title="Ajini Perera"
            subTitle="asperera.slir@gmail.com"
            image={require("../assets/img/reading.png")}
          />
        </View>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    // backgroundColor: colors.lightGreen,
  },
  container: {
    backgroundColor: colors.lightGreen,

    // paddingTop: 40,
    // marginVertical: 20,
    marginBottom: 50,
    // paddingBottom: 20,
  },
});

export default AccountScreen;
