import * as React from 'react';
import { Appbar as Appear } from 'react-native-paper';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

Header= () => {
  

  

  const _handleMore = () => console.log('Shown more');

  return (
    <><Appear.Header style={{ backgroundColor: '#008080', padding: '45px' }}>

      <Appear.Action icon="home" onPress={_handleMore} style={{padding: '50px', size: '40'}} />

      <Appear.Action icon="logout" onPress={_handleMore} style={{marginLeft:'220px'}} />
    </Appear.Header>
    
    <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)} />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)} />
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

      </View></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8DC",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  inputView: {
    backgroundColor: "#5F9EA0",
    borderRadius: 15,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
  image: {
    marginBottom: 40,
    width: 190,
    height: 190,
  },
 
  TextInput: {
    height: 50,
    width:"90%",
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
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

  signupBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#008B8B",
  },
});


export default Header;