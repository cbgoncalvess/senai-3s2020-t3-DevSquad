import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InfoVaga from "../../Components/InfoVaga/index";
import Tag from "../../Components/Tag/index";
import { Picker } from "@react-native-community/picker";

export default function Principal({ navigation }) {
  const [ListarVagas, setListarVagas] = useState([]);
  const [Tecnologias, setTecnologias] = useState([]);
  const [VagaTecnologia, setVagaTecnologia] = useState([]);
  const [Opcao, setOpcao] = useState('');

  useEffect(() => {
    listarVagas();
    Vizualizar();
    listarTecnologias();
  }, []);

  const FiltrarTecnologia = (tecnologia) => {
    for (var i = 0; i < ListarVagas.length; i++) {
      let Tecnologias = ListarVagas[i].tecnologias;
      for (var o = 0; o < Tecnologias.length; o++) {
        if (Tecnologias[o] == tecnologia) {
          VagaTecnologia.push(ListarVagas[i]);
          break;
        }
      }
    }
  };

  const listarVagas = () => {
    fetch("http://localhost:5000/api/Candidato/ListarVagasPrincipal", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setListarVagas(dados);
      })
      .catch((err) => console.error(err));
  };

  const listarTecnologias = () => {
    fetch("http://localhost:5000/api/Usuario/ListarTecnologia", {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setTecnologias(dados);
      })
      .catch((err) => console.error(err));
  };

function Vizualizar(){
if (Opcao== "") {
  return(<View style={styles.MainVaga}>
    {ListarVagas.map((teste2) => {
      return (
        <View style={styles.Vaga} key={teste2.idVaga}>
          <View style={styles.VagaCompleta}>
            <Image
              style={styles.ImagemEmpresa}
              source={{
                uri:
                  "http://localhost:5000/imgPerfil/" +
                  teste2.caminhoImagem,
              }}
            />
            <View style={styles.MainVaga}>
              <Text
                style={styles.TituloVaga}
                onPress={(e) => {
                  e.preventDefault();
                  AsyncStorage.setItem(
                    "VagaSelecionadaCandidato",
                    teste2.idVaga
                  );
                  navigation.navigate("VagaCompleta");
                }}
              >
                {teste2.tituloVaga}
              </Text>
              <View style={styles.InfoVagas}>
                <InfoVaga
                  NomeProp={teste2.razaoSocial}
                  nomeImage={require("../../assets/Images/building.webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={teste2.localidade}
                  nomeImage={require("../../assets/Images/big-map-placeholder-outlined-symbol-of-interface.webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={teste2.experiencia}
                  nomeImage={require("../../assets/Images/rocket-launch.webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={teste2.tipoContrato}
                  nomeImage={require("../../assets/Images/gears.webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={teste2.salario}
                  nomeImage={require("../../assets/Images/money (1).webp")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={teste2.tipoPresenca}
                  nomeImage={require("../../assets/Images/global.png")}
                ></InfoVaga>
                <InfoVaga
                  NomeProp={teste2.nomeArea}
                  nomeImage={require("../../assets/Images/web-programming.webp")}
                ></InfoVaga>
              </View>
              <View style={styles.TecnologiasVaga}>
                {teste2.tecnologias.map((teste3) => {
                  return <Tag NomeTag={teste3}></Tag>;
                })}
              </View>
            </View>
          </View>
        </View>
      );
    })}
  </View>
  );
  }else if (Opcao.length >= 1) {
    VagaTecnologia.splice(0, Number.MAX_VALUE);
    console.log(Opcao)
    FiltrarTecnologia(Opcao);
    console.log(VagaTecnologia);
    return(
<View style={styles.MainVaga}>
          {
           VagaTecnologia.map((teste2) => {
            return (
              <View style={styles.Vaga} key={teste2.idVaga}>
                <View style={styles.VagaCompleta}>
                  <Image
                    style={styles.ImagemEmpresa}
                    source={{
                      uri:
                        "http://localhost:5000/imgPerfil/" +
                        teste2.caminhoImagem,
                    }}
                  />
                  <View style={styles.MainVaga}>
                    <Text
                      style={styles.TituloVaga}
                      onPress={(e) => {
                        e.preventDefault();
                        AsyncStorage.setItem(
                          "VagaSelecionadaCandidato",
                          teste2.idVaga
                        );
                        navigation.navigate("VagaCompleta");
                      }}
                    >
                      {teste2.tituloVaga}
                    </Text>
                    <View style={styles.InfoVagas}>
                      <InfoVaga
                        NomeProp={teste2.razaoSocial}
                        nomeImage={require("../../assets/Images/building.webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={teste2.localidade}
                        nomeImage={require("../../assets/Images/big-map-placeholder-outlined-symbol-of-interface.webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={teste2.experiencia}
                        nomeImage={require("../../assets/Images/rocket-launch.webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={teste2.tipoContrato}
                        nomeImage={require("../../assets/Images/gears.webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={teste2.salario}
                        nomeImage={require("../../assets/Images/money (1).webp")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={teste2.tipoPresenca}
                        nomeImage={require("../../assets/Images/global.png")}
                      ></InfoVaga>
                      <InfoVaga
                        NomeProp={teste2.nomeArea}
                        nomeImage={require("../../assets/Images/web-programming.webp")}
                      ></InfoVaga>
                    </View>
                    <View style={styles.TecnologiasVaga}>
                      {teste2.tecnologias.map((teste3) => {
                        return <Tag NomeTag={teste3}></Tag>;
                      })}
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
    );
  }
}

  return (
    <ScrollView>
      <View style={styles.teste}>
        <View>
          <ImageBackground
            source={require("../../assets/Images/bannerVisualizarVaga.webp")}
            style={styles.BannerVizualizarVagaEmpresa}
            >
            <Text style={styles.TextoHeader}>Busque sua vaga aqui</Text>
            <Picker style={styles.select}
              onValueChange={(itemValue, itemIndex)=>{
              setOpcao(itemValue)
              }}
            >
              <Picker.Item label={"Busque a vaga pela tecnologia"} value={""}/>
              {Tecnologias.map((item) => {
                return (
                  <Picker.Item
                    label={item.nomeTecnologia}
                    value={item.nomeTecnologia}
                  />
                );
              })}
            </Picker>
          </ImageBackground>
        </View>
        {
          Vizualizar()
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  select:{
   width:250,
   height:25,
   marginTop:10
  },
  teste: {
    backgroundColor: "#DFDFDF",
  },
  imagemCandidato: {
    height: 60,
    width: 60,
    marginTop: 9,
  },
  TextoTitulo: {
    color: "black",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20px",
  },
  BannerVizualizarVagaEmpresa: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: "300px",
    padding: "5vh",
  },
  TextoHeader: {
    color: "#fff",
    fontSize: 25,
  },
  Vaga: {
    backgroundColor: "#FAFAFA",
    marginBottom: "20px",
    flexDirection: "column",
    marginBottom: 20,
  },
  VagaCompleta: {
    flexDirection: "row",
    borderRadius: 4,
    padding: "3vh",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  MainVaga: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    padding: 15,
  },
  InfoVagas: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  TecnologiasVaga: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ImagemEmpresa: {
    height: "100px",
    width: "100px",
    borderRadius: 100,
  },
  TituloVaga: {
    fontSize: 17,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
  nomeCandidato: {
    borderBottomColor: "black",
    borderWidth: 1,
  },
});
