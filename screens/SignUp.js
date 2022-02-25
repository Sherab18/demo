import * as React from 'react';
import { Appbar as Appear } from 'react-native-paper';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const SignUp= () => {
  
  const _handleMore = () => console.log('Shown more');

  return (
    <><Appear.Header style={{ backgroundColor: '#008080', padding: '45px' }}>

      <Appear.Action icon="home" onPress={_handleMore} style={{padding: '50px', size: '40'}} />

      <Appear.Action icon="logout" onPress={_handleMore} style={{marginLeft:'220px'}} />
    </Appear.Header>
    
    <View style={styles.container}>
    <View style={{marginBottom:'60px', alignItems:'center', justifyContent:'center'}}>
      <h2 style={{color:"#ff0000"}}>SIGNUP</h2><br></br><br></br>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)} />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Student ID"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)} />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Department"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)} />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email Address"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)} />
        </View>

        <form>
          <label style={{alignItems:'center', justifyContent:'center', marginLeft:'25px'}}> Choose the module of the semester</label><br></br><br></br>
            <select style={{padding: '10px', fontSize:'2', 
            backgroundColor:'#FFF8DC', width:"90%",  borderColor: "#00000",
            marginLeft: 20,}}>
              <option>Cloud Computing</option>
              <option>Data Warehousing</option>
              <option>Entrepreneurship Development Program</option>
            </select>
        </form>


        <TouchableOpacity style={styles.signinBtn}>
          <Text style={styles.loginText}>NEXT</Text>
        </TouchableOpacity>
    </View>
    

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
    width: "30vh",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    width:"90%",
    padding: 10,
    marginLeft: 20,
    borderColor: "#00000",
    borderBottomWidth: 1,
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


export default SignUp;