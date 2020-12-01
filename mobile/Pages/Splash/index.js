import React, { useState } from "react";
import { View, Image, StatusBar } from "react-native";

import icone from "../../assets/Logo.png";

import styles from "./style";

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4f6d7a" barStyle="light-content" />
      <Image style={styles.logo} source={icone}></Image>
    </View>
  );
}
