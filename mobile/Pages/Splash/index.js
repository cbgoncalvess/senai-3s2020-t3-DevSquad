import React, { useState, useEffect } from "react";
import { View, Image, Text, StatusBar } from "react-native";

import icone from "../../assets/Images/Logo_TecVagas_Mobile.png";
import styles from "./style";

export default function Splash({ navigation }) {
  setTimeout(() => navigation.navigate("Login"), 10000);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      <Text style={styles.texto}>SENAI | TechVagas</Text>
      <Image source={icone}></Image>
    </View>
  );
}
