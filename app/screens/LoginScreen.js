import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

function LoginScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../assets/img/logoLight.png")}
        />
        <AppTextInput
          autoCapitalize="none"
          autocorrect={false}
          icon="email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          textConentType="emailAddress"
        />
        <AppTextInput
          autoCapitalize="none"
          autocorrect={false}
          icon="lock"
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
          textConentType="password"
        />
        <AppButton title="Login" onPress={() => console.log(email, password)} />
        {/* <TextInput
        clearButtonMode="always"
        secureTextEntry
        // keyboardType="numeric"
        maxLength={15}
        onChangeText={(text) => setFirstName(text)}
        placeholder="First Name"
        style={{
          borderBottomColor: "#ccc",
          borderBottomWidth: 1,
        }}
      /> */}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    padding: 20,
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default LoginScreen;

// import { StatusBar } from "expo-status-bar";
// import { React } from "react";
// import { Text, View, SafeAreaView, Button, Image } from "react-native";
// import { Formik } from "formik";
// import { Octicons } from "@expo/vector-icons";

// import { styles } from "../components/StyleSheet";
// import colors from "../config/colors";

// const Login = () => {
//   return (
//     <SafeAreaView style={styles.Container}>
//       <StatusBar style="dark" />
//       <View style={styles.InnerContainer}>
//         <View style={styles.Logo}>
//           <Image source={require("../assets/img/logoLight.png")} />
//         </View>
//         <Text style={styles.Title}>FinalProject</Text>
//         <Text style={styles.SubTitle}>Account Login</Text>
//         {/* <Formik
//           initialValues={{ email: "", password: "" }}
//           onSubmit={(values) => {
//             console.log(values);
//           }}
//         >
//           {({ handleChange, handleBlur, handleSubmit, values }) => (
//             <View style={styles.StyledFormArea}>
//               <MyTextInput
//                 label="Email Address"
//                 icon="mail"
//                 placeholder="jini@gmail.com"
//                 placeholderTextColor={darkLight}
//                 onChangeText={handleChange("email")}
//                 onBlur={handleBlur("email")}
//                 value={values.email}
//                 keyboardType="email-address"
//               />
//             </View>
//           )}
//         </Formik> */}
//       </View>
//     </SafeAreaView>
//   );
// };

// // const MyTextInput = ({ label, icon, ...props }) => {
// //   return (
// //     <View>
// //       <View style={styles.LeftIcon}>
// //         <Octicons name={icon} size={30} color={colors.brand} />
// //       </View>
// //       {/* <Text style={styles.StyledInputLabel}>{label}</Text>
// //       <TextInput style={styles.StyledTextInput}>{...props}</TextInput> */}
// //     </View>
// //   );
// // };

// export default Login;
