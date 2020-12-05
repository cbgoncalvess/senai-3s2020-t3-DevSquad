import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
//import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  return (
    <View style={styles.login}>
      <View style={styles.sessaoLogar}>
        <View style={styles.divisionLogar}>
          <View style={styles.divisionLogarTitle}>
            <Text style={styles.divisionLogarTitleText}>login</Text>
            <Text style={styles.subTitulo}>Bem-vindo ao SENAI | TechVagas</Text>
          </View>

          <View style={styles.formlogar}>
            <View style={styles.divisionCampo}>
              <Text style={styles.divisionCampoText}>Usuário ou E-mail:</Text>
              {/* <input type="text" name="email" style={styles.inputUser} placeholder="exemplo@exemplo.com / mariasantos" onChange={e => setEmail(e.target.value)} /> */}
              <TextInput
                placeholder={"exemplo@exemplo.com "}
                style={styles.inputUser}
              />
            </View>

            <View style={styles.divisionCampo} style={styles.divisionPassword}>
              <Text style={styles.divisionCampoText}>Senha:</Text>
              {/* <input type="password" name="password" placeholder="******" style={styles.inputPassword} onChange={e => setSenha(e.target.value)} /> */}
              <TextInput
                placeholder={"********"}
                style={styles.inputPassword}
                secureTextEntry={true}
              />
              <Text style={styles.recuperarPassword}>Recuperar senha</Text>
            </View>
          </View>

          <View style={styles.divisionBtn}>
            <TouchableOpacity
              style={styles.btnLogar}
              onPress={() => navigation.navigate("ListarVagaEmpresa")}
            >
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Image style={styles.imglogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  sessaoLogar: {
    flexDirection: "colunm",
    alignItems: "center",
    justifyContent: "center",
    width: "400px",
  },

  formLogar: {
    height: "22vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "spaceBetween",
  },

  divisionLogar: {
    borderWidth: "none",
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    width: "611px",
    height: "596px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  divisionLogarTitle: {
    flexDirection: "column",
    height: "8vh",
    justifyContent: "space-between",
    alignItems: "center",
  },

  divisionLogarTitleText: {
    fontSize: "36px",
    color: "#005767",
    textTransform: "capitalize",
    fontWeight: "400",
  },

  divisionCampo: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "8vh",
    alignItems: "flex-start",
    marginBottom: 25
  },

  divisionPassword: { height: "11vh" },

  divisionCampoText: { fontWeight: "600"},

  inputUser: {
    paddingLeft: "1em",
    borderRadius: "4px",
    width: "295px",
    height: "44.51px",
    backgroundColor: "#f3f3f3",
  },

  inputPassword: {
    paddingLeft: "1em",
    borderRadius: "4px",
    width: "295px",
    height: "44.51px",
    backgroundColor: "#f3f3f3",
    borderWidth: 0,
  },

  divisionBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
  },

  btnLogar: {
    textDecoration: "none",
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "38px",
    backgroundColor: "#005767",
    borderRadius: "4px"
  },

  textLogin:{
    fontSize: "16px",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white"},

    recuperarPassword:{
        marginLeft: 90,
        marginRight: 10,
        color: "#707070",
        fontSize: 14}
});
