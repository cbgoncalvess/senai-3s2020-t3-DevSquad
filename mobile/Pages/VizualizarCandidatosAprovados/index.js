import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import InfoVaga from "../../Components/InfoVaga/index";
import Tag from "../../Components/Tag/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function VizualizarVagaEmpresa() {
  const [Inscricoes, setInscricoes] = useState([]);
  const [Experiencia, setExperiencia] = useState("");
  const [TipoContrato, setTipoContrato] = useState("");
  const [Salario, setSalario] = useState("");
  const [Tecnologias, setTecnologias] = useState([]);
  const [Cidade, setCidade] = useState("");
  const [TituloVaga, setTituloVaga] = useState("");
  const [NomeArea, setNomeArea] = useState("");
  const [TipoPresenca, setTipoPresenca] = useState("");
  const [RazaoSocial, setRazaoSocial] = useState("");
  const [CaminhoImagem,setCaminho]=useState("");

  useEffect(() => {
    BuscarPorId();
    listarCandidatosAprovados();
  }, []);

  const listarCandidatosAprovados = async () => {
    fetch(
      "http://localhost:5000/api/Empresa/ListarCandidatosAprovados/" +
       (await AsyncStorage.getItem("VagaSelecionada")),
      {method: "GET", headers: {
        authorization: "Bearer " +await AsyncStorage.getItem("token"),
      }}
    )
      .then((response) => response.json())
      .then((dados) => {
        setInscricoes(dados);
      })
      .catch((err) => console.error(err));
  };

  const BuscarPorId = async () => {
    fetch(
      "http://localhost:5000/api/Usuario/BuscarPorId/" +
        (await AsyncStorage.getItem("VagaSelecionada")),
      {method: "GET",
      headers: {
        authorization: "Bearer " +await AsyncStorage.getItem("token"),
      }
    }
    )
      .then((response) => response.json())
      .then((dados) => {
        setTituloVaga(dados.tituloVaga);
        setTipoContrato(dados.tipoContrato);
        setSalario(dados.salario);
        setTecnologias(dados.tecnologias);
        setCidade(dados.localidade);
        setExperiencia(dados.experiencia);
        setNomeArea(dados.nomeArea);
        setTipoPresenca(dados.tipoPresenca);
        setRazaoSocial(dados.razaoSocial);
        setCaminho(dados.caminhoImagem);
      })
      .catch((err) => console.error(err));
  };


  return (
    <View>
      <View>
        <ImageBackground
          source={require("../../assets/Images/bannerVisualizarVaga.webp")}
          style={styles.BannerVizualizarVagaEmpresa}
        >
          <Text style={styles.TextoHeader}>
            Veja quem foi aprovado para esta vaga
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.Vaga}>
        <View style={styles.VagaCompleta}>
          <Image
            style={styles.ImagemEmpresa}
            source={{uri:'http://localhost:5000/imgPerfil/'+CaminhoImagem}}
          />
          <View style={styles.MainVaga}>
            <Text style={styles.TituloVaga}>{TituloVaga}</Text>
            <View style={styles.InfoVagas}>
              <InfoVaga
                NomeProp={RazaoSocial}
                nomeImage={require("../../assets/Images/building.webp")}
              ></InfoVaga>
              <InfoVaga
                NomeProp={Cidade}
                nomeImage={require("../../assets/Images/big-map-placeholder-outlined-symbol-of-interface.webp")}
              ></InfoVaga>
              <InfoVaga
                NomeProp={Experiencia}
                nomeImage={require("../../assets/Images/rocket-launch.webp")}
              ></InfoVaga>
              <InfoVaga
                NomeProp={TipoContrato}
                nomeImage={require("../../assets/Images/gears.webp")}
              ></InfoVaga>
              <InfoVaga
                NomeProp={Salario}
                nomeImage={require("../../assets/Images/money (1).webp")}
              ></InfoVaga>
              <InfoVaga
                NomeProp={TipoPresenca}
                nomeImage={require("../../assets/Images/global.png")}
              ></InfoVaga>
              <InfoVaga
                NomeProp={NomeArea}
                nomeImage={require("../../assets/Images/web-programming.webp")}
              ></InfoVaga>
            </View>
            <View style={styles.TecnologiasVaga}>
              {Tecnologias.map((item) => {
                return <Tag NomeTag={item}></Tag>;
              })}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.ListaInscricoes}>
        {Inscricoes.map((item) => {
          return (
            <View key={item.idInscricao} style={styles.Inscricao}>
              <View style={styles.HeaderInscricao}>
                <Image
                  style={styles.imagemCandidato}
                  source={require("../../assets/Images/android-character-symbol.webp")}
                ></Image>
                <Text>{item.nomeCandidato}</Text>
                <Text style={styles.nomeCandidato}></Text>
                <Text style={styles.h5}>{item.nomeCurso}</Text>
              </View>
              <View style={styles.BodyInscricao}>
                <Tag NomeTag={"Email:" + item.email}></Tag>
                <Tag NomeTag={"Telefone:" + item.telefone}></Tag>
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
  ListaInscricoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  imagemCandidato: {
    height: 60,
    width: 60,
    marginTop: 9,
  },
  HeaderInscricao: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
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
    display: "flex",
    flexDirection: "column",
  },
  VagaCompleta: {
    flexDirection: "row",
    borderRadius: 4,
    padding: "3vh",
    flexWrap: "wrap",
    justifyContent:'center'
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
    fontSize: 17,
  },
  Inscricao: {
    width: "275px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: "50px",
  },
  BodyInscricao: {
    textAlign: "center",
    padding: "2vh",
    width: "100%",
  },
  nomeCandidato: {
    borderBottomColor: "black",
    borderWidth: 1,
  },
});
