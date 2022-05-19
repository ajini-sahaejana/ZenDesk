import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { AntDesign, Entypo, Feather } from "react-native-vector-icons";
import Slider from "@react-native-community/slider";
import ProgressCircle from "react-native-progress-circle";
import { ScrollView } from "react-native-gesture-handler";

const Dev_Height = Dimensions.get("window").height;
const Dev_Width = Dimensions.get("window").width;

export default class MeditateScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View onStartShouldSetResponder={() => true}>
            <View style={styles.music_logo_view}>
              <Image
                source={require("../assets/icon.png")}
                style={styles.image_view}
              />
            </View>

            <View style={styles.name_of_song_View}>
              <Text style={styles.name_of_song_Text1}>#02 - Practice</Text>
              <Text style={styles.name_of_song_Text2}>Breathing exercises</Text>
            </View>

            <View style={styles.slider_view}>
              <Text style={styles.slider_time}> 4:10 </Text>
              <Slider
                style={styles.slider_style}
                minimumValue={0}
                maximumValue={12.02}
                minimumTrackTintColor="#e75480"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#e75480"
                value={3.5}
              />
              <Text style={styles.slider_time}>12:02</Text>
            </View>

            <View style={styles.functions_view}>
              <Entypo
                name="shuffle"
                size={24}
                color="#e75480"
                style={{ marginLeft: "9%" }}
              />
              <Entypo
                name="controller-fast-backward"
                size={24}
                color="#e75480"
                style={{ marginLeft: "12%" }}
              />
              <AntDesign
                name="pausecircle"
                size={50}
                color="#e75480"
                style={{ marginLeft: "12%" }}
              />
              <Entypo
                name="controller-fast-forward"
                size={24}
                color="#e75480"
                style={{ marginLeft: "12%" }}
              />
              <Feather
                name="repeat"
                size={20}
                color="#e75480"
                style={{ marginLeft: "10%" }}
              />
            </View>

            <View style={styles.recently_played_view}>
              <Text style={styles.recently_played_text}>
                {" "}
                Recently Listened to
              </Text>
              <View style={styles.recently_played_list}>
                <Image
                  source={require("../assets/icon.png")}
                  style={styles.recently_played_image}
                />
                <View style={styles.recently_played_list_text}>
                  <Text style={styles.recently_played_list_text1}>
                    {" "}
                    #01 - Start slowly{" "}
                  </Text>
                  <Text style={styles.recently_played_list_text2}>
                    {" "}
                    By Setup Cast - 15: 35{" "}
                  </Text>
                </View>
                <View>
                  <ProgressCircle
                    percent={40}
                    radius={25}
                    borderWidth={5}
                    color="#e75480"
                    shadowColor="#FFF"
                    bgColor="#fff"
                  >
                    <AntDesign
                      name="play"
                      size={37}
                      color="#e75480"
                      style={{ marginTop: "4%" }}
                    />
                  </ProgressCircle>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
  },
  mainbar: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  now_playing_text: {
    fontSize: 19,
    marginLeft: "24%",
  },
  music_logo_view: {
    height: "30%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image_view: {
    height: "100%",
    width: "50%",
    borderRadius: 10,
  },
  name_of_song_View: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  name_of_song_Text1: {
    fontSize: 19,
    fontWeight: "500",
  },
  name_of_song_Text2: {
    color: "#808080",
    marginTop: "4%",
  },
  slider_view: {
    height: "10%",
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  slider_style: {
    height: "70%",
    width: "60%",
  },
  slider_time: {
    fontSize: 15,
    marginLeft: "6%",
    color: "#808080",
  },
  functions_view: {
    flexDirection: "row",
    height: "10%",
    width: "100%",
    alignItems: "center",
  },
  recently_played_view: {
    height: "25%",
    width: "100%",
  },
  recently_played_text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#808080",
    marginLeft: "5%",
    marginTop: "6%",
  },
  recently_played_list: {
    backgroundColor: "#FFE3E3",
    height: "50%",
    width: "90%",
    borderRadius: 10,
    marginLeft: "5%",
    marginTop: "5%",
    alignItems: "center",
    flexDirection: "row",
  },
  recently_played_image: {
    height: "80%",
    width: "20%",
    borderRadius: 10,
  },
  recently_played_list_text: {
    height: "100%",
    width: "60%",
    justifyContent: "center",
  },
  recently_played_list_text1: {
    fontSize: 15,
    marginLeft: "8%",
  },
  recently_played_list_text2: {
    fontSize: 16,
    color: "#808080",
    marginLeft: "8%",
  },
});
