import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  let[Token,setToken]=useState('');
  const[MensagemErro,SetMensagem]=useState('')



  function parseJwt(){  
    if(Token.length>10){
        var base64Url =Token.split('.')[1];
        var base64 =base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(window.atob(base64));
    }
  }

  function login() {
    const loginForm = {
      email: email,
      senha: senha,
    };
    fetch("http://localhost:5000/api/Login", {
      method: "POST",
      body: JSON.stringify(loginForm),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json()
    )
      .then(dados => {  
        if(dados.token!==undefined)
      {
        AsyncStorage.setItem("token",dados.token)
        Token =dados.token;
        if (parseJwt().Role === "2") {
          navigation.navigate("ListarVagasInscritas");
        } else if (parseJwt().Role === "3") {
          navigation.navigate("ListarVagaEmpresa");}
      }else{
        SetMensagem("Suas credencias não são válidas");
      }
      })
      .catch((err) => console.error(err));
  }

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
              <TextInput
                placeholder={"exemplo@exemplo.com "}
                style={styles.inputUser}
                onChange={(e) => setEmail(e.target.value)}
              />
            </View>

            <View style={styles.divisionCampo} style={styles.divisionPassword}>
              <Text style={styles.divisionCampoText}>Senha:</Text>
              <TextInput
                placeholder={"********"}
                style={styles.inputPassword}
                secureTextEntry={true}
                onChange={(e) => setSenha(e.target.value)}
              />
            </View>
              <View style={styles.lbErro} nativeID={"lbErro"}><Text style={styles.lbErroText}>{MensagemErro}</Text></View>
              <Text style={styles.recuperarPassword}>Recuperar senha</Text>
          </View>

          <View style={styles.divisionBtn}>
            <TouchableOpacity style={styles.btnLogar} onPress={() => login()}>
              <Text style={styles.textLogin}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "400px",
  },

  formLogar: {
    height: "22vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  divisionLogar: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    width: "611px",
    height: "596px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
lbErro:{
  alignItems:'center'
},
  divisionLogarTitle: {
    flexDirection: "column",
    height: "8vh", //Não funciona vh no mobile
    justifyContent: "space-between",
    alignItems: "center",
  },

  divisionLogarTitleText: {
    fontSize: 36,
    color: "#005767",
    textTransform: "capitalize",
    fontWeight: "400",
  },

  divisionCampo: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "12vh",
    alignItems: "flex-start",
    marginBottom: 25,
  },
lbErroText:{
  color:'red'
},
  divisionPassword: { height: "12vh" },

  divisionCampoText: { fontWeight: "600" },

  inputUser: {
    paddingLeft: "1em",
    borderRadius: 4,
    width: "295px",
    height: "44.51px",
    backgroundColor: "#f3f3f3",
  },

  inputPassword: {
    paddingLeft: "1em",
    borderRadius: 4,
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
    textDecorationLine: "none",
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "38px",
    backgroundColor: "#005767",
    borderRadius: 4,
  },

  textLogin: {
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
  },

  recuperarPassword: {
    marginLeft: 90,
    marginRight: 10,
    color: "#707070",
    fontSize: 14,
  },
});
