import React from 'react';
import ViewImageScreen from './ViewImageScreen';
import { Text, ImageBackground, StyleSheet, View, Image } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ViewImageScreen/>
  //   <ImageBackground 
  //   style={styles.background}
  //   source= {require('../Assets/Motiv.jpg')}
  //   >
  //     <View style={styles.logoContainer}>
  //       <Image style={styles.motivLogo} source={require("../Assets/Motiv_logo.png")}/>
  //       <Text style={styles.slogen}>Unleach Your Team's Potential</Text>
  //     </View>
  //     <View style={styles.loginButton}></View>
  //     <View style={styles.signUp}></View>
  //   </ImageBackground>
  // );
  )}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#fc5c65",
  },
  signUp: {
    width: '100%',
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  motivLogo: {
    width: 250,
    height: 100,
    padding:0,
  },
  logoContainer:{
    position: "absolute",
    top: 30,
    alignItems: 'center',
      },
  slogen:{
    fontWeight: 'bold',
    fontSize: 25,
    padding:0,
  }
});

export default WelcomeScreen;

