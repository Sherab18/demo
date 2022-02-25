import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
const SignIn = () => {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require("../assets/logo.png")} />
    <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.signinBtn}>
        <Text style={styles.loginText}>SignIn</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.loginText}>SignUp</Text>
      </TouchableOpacity>
        
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#5F9EA0",
    borderRadius: 15,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  signinBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#008B8B",
  },
});
export default SignIn;