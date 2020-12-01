import React, { useEffect, useState } from "react";
import {ImageBackground,StyleSheet,Text, View, Image,} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import InfoVaga from "../../Components/InfoVaga/index";
import Tag from "../../Components/Tag/index";


export default function ListarVagasEmpresa({navigation}) {
  useEffect(() => {
    listarVagas();
  }, []);
  let [idVaga, setIdVaga] = useState(0);
  const [ListarVagas, setListarVagas] = useState([]);

const listarVagas = () => {
    fetch("http://localhost:5000/api/Empresa/ListarVagasPublicadas", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((dados) => {
        setListarVagas(dados);
      })
      .catch((err) => console.error(err));
};

async function ArmazenarIdVaga(){
try{ 
await AsyncStorage.setItem("VagaSelecionada",idVaga);
navigation.navigate('VagaEmpresa')
}catch(e){
  console.log(e);
}
}
return (
  <View style={styles.teste}>
    <View>
      <ImageBackground
        source={require("../../assets/Images/bannerVisualizarVaga.webp")}
        style={styles.BannerVizualizarVagaEmpresa}
      >
        <Text style={styles.TextoHeader}>Vagas que você publicou</Text>
      </ImageBackground>
    </View>

    <Text style={styles.TextoTitulo}>Vagas que você publicou</Text>
    <View style={styles.MainVaga}>
      {ListarVagas.map((teste2) => {
        return (
          <View style={styles.Vaga} key={teste2.idVaga}>
            <View style={styles.VagaCompleta}>
              <Image
                style={styles.ImagemEmpresa}
                source={require("../../assets/Images/Teste.webp")}
              />
              <View style={styles.MainVaga}>
                <Text style={styles.TituloVaga} onPress={(e) => {
                      e.preventDefault();
                      idVaga = teste2.idVaga;
                      ArmazenarIdVaga();
                    }}>{teste2.tituloVaga}</Text>
                <View style={styles.InfoVagas}>
                  <InfoVaga
                    NomeProp={teste2.razaoSocial}
                    nomeImage={require("../../assets/Images/building.webp")}
                  ></InfoVaga>
                  <InfoVaga
                    NomeProp={teste2.cidade}
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
</View>
);
}

const styles = StyleSheet.create({
  teste: {
    backgroundColor: "#DFDFDF",
  },
  imagemCandidato: {
    height: 60,
    width: 60,
    marginTop: 9,
  },
  TextoTitulo: {
    color: 'black',
    fontSize: '22px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '20px'
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
    fontSize: "25px",
  },
  Vaga: {
    backgroundColor: "#FAFAFA",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  VagaCompleta: {
    flexDirection: "row",
    borderRadius: "4px",
    padding: "3vh",
    flexWrap: "wrap",
  },
  MainVaga: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    width: "90%",
  },
  InfoVagas: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  TecnologiasVaga: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ImagemEmpresa: {
    height: "100px",
    width: "100px",
  },
  TituloVaga: {
    fontSize: "17px",
  },
  nomeCandidato: {
    borderBottomColor: "black",
    borderWidth: 1,
  },
});
