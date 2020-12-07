import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet,Text, View, Image,TouchableOpacity,ScrollView,Alert} from "react-native";
import InfoVaga from "../../Components/InfoVaga/index";
import Tag from "../../Components/Tag/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function VagaCompleta({navigation}) {
  
  const [Experiencia, setExperiencia] = useState("");
  const[IdVaga,setIdVaga]=useState(0);
  const [TipoContrato, setTipoContrato] = useState("");
  const [Salario, setSalario] = useState("");
  const [DescricaoBeneficio, setDescricaoBeneficio] = useState("");
  const [DescricaoEmpresa, setDescricaoEmpresa] = useState("");
  const [DescricaoVaga, setDescricaoVaga] = useState("");
  const [Tecnologias, setTecnologias] = useState([]);
  const [Cidade, setCidade] = useState("");
  const [TituloVaga, setTituloVaga] = useState("");
  const [Area, setArea] = useState("");
  const [RazaoSocial, setRazaoSocial] = useState("");
  const [tipoPresenca, setTipoPresenca] = useState("");
  const [Logradouro, setLogradouro] = useState("");
  const [Complemento, setComplemento] = useState("");
  const [CaminhoImagem, setCaminho] = useState("");

  useEffect(() => {
    listar();
  }, []);

  const listar =async () => {
    fetch("http://localhost:5000/api/Usuario/BuscarPorId/" + (await AsyncStorage.getItem("VagaSelecionadaCandidato")), {
      method: "GET",
      headers: {
        authorization: "Bearer " + await AsyncStorage.getItem("token"),
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setIdVaga(dados.idVaga);
        setArea(dados.nomeArea);
        setTipoPresenca(dados.tipoPresenca);
        setRazaoSocial(dados.razaoSocial);
        setTituloVaga(dados.tituloVaga);
        setLogradouro(dados.logradouro);
        setTipoContrato(dados.tipoContrato);
        setSalario(dados.salario);
        setTecnologias(dados.tecnologias);
        setComplemento(dados.complemento);
        setCidade(dados.localidade);
        setExperiencia(dados.experiencia);
        setDescricaoBeneficio(dados.descricaoBeneficio);
        setDescricaoEmpresa(dados.descricaoEmpresa);
        setDescricaoVaga(dados.descricaoVaga);
        setCaminho(dados.caminhoImagem);
      })
      .catch((err) => console.error(err));
  };

  const SeCandidatar =async () => {
    const form = {
      idVaga: IdVaga,
    };
    fetch("http://localhost:5000/api/Candidato/AdicionarInscricao", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        authorization: "Bearer " + await AsyncStorage.getItem("token"),
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        Alert.alert(dados);
        navigation.navigate("Inscricoes");
      })
      .catch((err) => console.error(err));
  };

  return (
      <ScrollView>
<View>
      <View>
        <ImageBackground
          source={require("../../assets/Images/bannerVisualizarVaga.webp")}
          style={styles.BannerVizualizarVagaEmpresa}
        >
          <View style={styles.TextoHeader}>
          <Text style={styles.Title}>{TituloVaga}</Text>
              {Tecnologias.map((item)=>{
                  return(
                      <Tag NomeTag={item}/>
                  );
              })}
          </View>
        </ImageBackground>
      </View>
      <View style={styles.Vaga}>
        <View style={styles.VagaCompleta}>
          <Image
            style={styles.ImagemEmpresa}
            source={{uri:'http://localhost:5000/imgPerfil/'+CaminhoImagem}}
          />
          <View style={styles.MainVaga}>
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
                NomeProp={tipoPresenca}
                nomeImage={require("../../assets/Images/global.png")}
              ></InfoVaga>
              <InfoVaga
                NomeProp={Area}
                nomeImage={require("../../assets/Images/web-programming.webp")}
              ></InfoVaga>
            </View>
          </View>
        </View>
      </View>
      <View styles={styles.Descricoes}>
          <View style={styles.BoxDescricaoEmpresa}>
            <Text style={styles.TituloDescricao}>Descrição empresa</Text>
            <Text style={styles.Descricao}>{DescricaoEmpresa}</Text>    
          </View>

          <View style={styles.BoxRequisitosVaga}>
            <Text style={styles.TituloDescricao}>Requisitos da vaga</Text>
            <Text style={styles.Descricao}>{DescricaoVaga}</Text>    
          </View>

          <View style={styles.BoxDescricaoBeneficio}>
            <Text style={styles.TituloDescricao}>Descrição dos beneficios</Text>
            <Text style={styles.Descricao}>{DescricaoBeneficio}</Text>    
          </View>
      </View>
      <View style={styles.Encolher}>
      <View styles={styles.btSeCandidatar}>
          <TouchableOpacity style={styles.btCandidatar} onPress={()=>SeCandidatar()}>
              <Text style={styles.textBtn}>Se candidatar</Text>
          </TouchableOpacity>
      </View>
      </View>
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    Encolher:{
    padding:50
    },
    Title:{
        fontWeight:'bold',
        color:'#fff',
        fontSize:25
    },
    Descricoes:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    },
    btCandidatar:{
    backgroundColor:'#FF000F', 
    alignItems:'center',
    padding:5,
    borderRadius:5,
    borderWidth: 0,
    },
    textBtn:{
    fontWeight:'bold',
    color:'#fff'
    },
    TituloDescricao:{
    fontSize:20,
    marginBottom:10
    },
    Descricao:{
     marginBottom:20,
    },
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
    borderRadius:100
  },
  TituloVaga: {
    fontSize: 17,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  }
});
