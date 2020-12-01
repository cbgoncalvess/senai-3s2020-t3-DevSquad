import React from "react";
import { View, Image } from "react-native";

import icone from "../../assets/icon.webp";

import styles from "./style";

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icone}></Image>
    </View>
  );
}
