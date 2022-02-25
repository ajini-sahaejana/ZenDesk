import React, { useState } from "react";
import { Image, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/StyleSheet";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  return (
    <Screen>
      <View style={stylesinline.container}>
        <Image
          style={stylesinline.logo}
          source={require("../assets/img/logoLight.png")}
        />
        <AppText style={[defaultStyles.text, { width: 300, height: 100 }]}>
          Login to ZenDesk now to continue using your account.
        </AppText>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleSubmit, errors }) => (
            <>
              <AppTextInput
                autoCapitalize="none"
                autocorrect={false}
                icon="email"
                keyboardType="email-address"
                // onChangeText={(text) => setEmail(text)}
                onChangeText={handleChange("email")}
                placeholder="Email"
                textConentType="emailAddress"
              />
              <AppText style={{ color: "red" }}>{errors.email}</AppText>
              <AppTextInput
                autoCapitalize="none"
                autocorrect={false}
                icon="lock"
                // onChangeText={(text) => setPassword(text)}
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textConentType="password"
              />
              <AppText style={{ color: "red", marginBottom: 20 }}>
                {errors.password}
              </AppText>

              <AppButton
                title="Login"
                // onPress={() => console.log(email, password)}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>

        {/* <AppTextInput
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
        <AppButton title="Login" onPress={() => console.log(email, password)} /> */}
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

const stylesinline = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    alignItems: "center",
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
