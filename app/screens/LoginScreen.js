import { StatusBar } from "expo-status-bar";
import { React } from "react";
import { Text, View, SafeAreaView, Button, Image } from "react-native";
import { Formik } from "formik";
import { Octicons } from "@expo/vector-icons";

import { styles } from "../components/StyleSheet";
import colors from "../config/colors";

const Login = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar style="dark" />
      <View style={styles.InnerContainer}>
        <View style={styles.Logo}>
          <Image source={require("../assets/img/logoLight.png")} />
        </View>
        <Text style={styles.Title}>FinalProject</Text>
        <Text style={styles.SubTitle}>Account Login</Text>
        {/* <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.StyledFormArea}>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder="jini@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
              />
            </View>
          )}
        </Formik> */}
      </View>
    </SafeAreaView>
  );
};

// const MyTextInput = ({ label, icon, ...props }) => {
//   return (
//     <View>
//       <View style={styles.LeftIcon}>
//         <Octicons name={icon} size={30} color={colors.brand} />
//       </View>
//       {/* <Text style={styles.StyledInputLabel}>{label}</Text>
//       <TextInput style={styles.StyledTextInput}>{...props}</TextInput> */}
//     </View>
//   );
// };

export default Login;
