<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { View, Image, Text, StatusBar } from "react-native";
=======
import { View,Text, StatusBar } from "react-native";
>>>>>>> 92dab8fe1b170f96594d7d0e6681f35544d144ee

import styles from "./style";

<<<<<<< HEAD
export default function Splash({ navigation }) {
  setTimeout(() => navigation.navigate("Login"), 10000);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      <Text style={styles.texto}>SENAI | TechVagas</Text>
      <Image source={icone}></Image>
=======
export default function Splash({ navigation }) {  
  setTimeout(() => navigation.navigate("Login"), 2000);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      <Text style={styles.texto} >SENAI | TechVagas</Text>
>>>>>>> 92dab8fe1b170f96594d7d0e6681f35544d144ee
    </View>
  );
}
