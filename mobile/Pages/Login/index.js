import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
// import parseJwt from '../../token.js';

export default function Login({ navigation }) {

  function parseJwt(){
    
    var token = AsyncStorage.getItem("token");
    console.log(token);
    if(token){
 
        //codificação para transferência de conteúdo - tipo de criptografia do jwt
        //a chave [1] faz com que seja armazenado na variável apenas o payload, que é o que interessa agora
        //linha do split, basicamente tá pegando todo o token e cortando em partes separadas pelo ponto, aí separa o token em 3: header, payload e signature
        var base64Url = token.split('.')[1];
      console.log(base64Url);
        // EXPERESSÕES REGULARES - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
        //replace substitui uma sequência de caracteres por outra
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

         
        //A função window.atob(base64) ou WindowBase64.atob()
        //decodifica uma string de dados que foi codificada através da codificação base-64
        //decodifica a base64 para string, através do método atob
        //e converte a string para JSON
        let c = JSON.parse(window.atob(base64));
        console.log(c);
        return JSON.parse(window.atob(base64));
    }}

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const login = async () => {
  
    const loginForm = {
      email: email,
      senha: senha
    }
    fetch('http://localhost:5000/api/Login', {
  
      method: 'POST',
      body: JSON.stringify(loginForm),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json()
    )
      .then(dados => {
        if (dados.token !== undefined) {          

          AsyncStorage.setItem("token", dados.token)

          if (parseJwt().Role === "2") {
            navigation.navigate("ListarVagasInscritas");
          } else if (parseJwt().Role === "3") {
            navigation.navigate("ListarVagaEmpresa");
          }
        }
      })
      .catch(err => console.error(err))
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
              {/* <input type="text" name="email" style={styles.inputUser} placeholder="exemplo@exemplo.com / mariasantos"  /> */}
              <TextInput
                placeholder={"exemplo@exemplo.com "}
                style={styles.inputUser}
                onChange={e => setEmail(e.target.value)}
              />
            </View>

            <View style={styles.divisionCampo} style={styles.divisionPassword}>
              <Text style={styles.divisionCampoText}>Senha:</Text>
              {/* <input type="password" name="password" placeholder="******" style={styles.inputPassword}/> */}
              <TextInput
                placeholder={"********"}
                style={styles.inputPassword}
                secureTextEntry={true}
                onChange={e => setSenha(e.target.value)}
              />
              <Text style={styles.recuperarPassword}>Recuperar senha</Text>
            </View>
          </View>

          <View style={styles.divisionBtn}>
            <TouchableOpacity
              style={styles.btnLogar}
<<<<<<< HEAD
              onPress={() => login()}
=======
              onPress={() => navigation.navigate("ListarVagaEmpresa")}
>>>>>>> 1c49cebb915d066b134f465c45da720db8126ed0
            >
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

  divisionCampoText: { fontWeight: "600" },

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

  textLogin: {
    fontSize: "16px",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white"
  },

  recuperarPassword: {
    marginLeft: 90,
    marginRight: 10,
    color: "#707070",
    fontSize: 14
  }
});
