import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import InfoVaga from "./Components/InfoVaga/index";
import Tag from "./Components/Tag/index";

export default function App() {
  useEffect(() => {
    idVaga = localStorage.getItem("idVagaSelecionadaEmpresa");
    listarCandidatos();
    BuscarPorId();
    listarVagas();
  }, []);

  const [Inscricoes, setInscricoes] = useState([]);
  let [idVaga, setIdVaga] = useState(0);
  const [idInscricao, setInscricao] = useState(0);
  const [Experiencia, setExperiencia] = useState("");
  const [TipoContrato, setTipoContrato] = useState("");
  const [Salario, setSalario] = useState("");
  const [Tecnologias, setTecnologias] = useState([]);
  const [Cidade, setCidade] = useState("");
  const [TituloVaga, setTituloVaga] = useState("");
  const [NomeArea, setNomeArea] = useState("");
  const [TipoPresenca, setTipoPresenca] = useState("");
  const [RazaoSocial, setRazaoSocial] = useState("");
  const [ListarVagas, setListarVagas] = useState([]);

  const listarCandidatos = () => {
    fetch("http://localhost:5000/api/Empresa/ListarCandidatosInscritos/" + 2, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setInscricoes(dados);
      })
      .catch((err) => console.error(err));
  };

  const BuscarPorId = () => {
    fetch("http://localhost:5000/api/Usuario/BuscarPorId/" + 2, {
      method: "GET",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((dados) => {
        setIdVaga(dados.idVaga);
        setTituloVaga(dados.tituloVaga);
        setTipoContrato(dados.tipoContrato);
        setSalario(dados.salario);
        setTecnologias(dados.tecnologias);
        setCidade(dados.localidade);
        setExperiencia(dados.experiencia);
        setNomeArea(dados.nomeArea);
        setTipoPresenca(dados.tipoPresenca);
        setRazaoSocial(dados.razaoSocial);
      })
      .catch((err) => console.error(err));
  };

  const Aprovar = () => {
    fetch("http://localhost:5000/api/Empresa/Aprovar/" + idInscricao, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (respose) {
        if (respose.status !== 200) {
          alert("Não foi possivel aprovar este candidato");
        }
        listarCandidatos();
      })
      .catch((err) => console.error(err));
  };

  const Reprovar = () => {
    fetch("http://localhost:5000/api/Empresa/Reprovar/" + idInscricao, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(function (respose) {
        if (respose.status !== 200) {
          alert("Não foi possivel Reprovar este candidato");
        }
        listarCandidatos();
      })
      .catch((err) => console.error(err));
  };

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

  return (
    <View style={styles.teste}>
      <View>
        <ImageBackground
          source={require("../mobile/assets/Images/bannerVisualizarVaga.webp")}
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
                  source={require("../mobile/assets/Images/Teste.webp")}
                />
                <View style={styles.MainVaga}>
                  <Text style={styles.TituloVaga}>{teste2.tituloVaga}</Text>
                  <View style={styles.InfoVagas}>
                    <InfoVaga
                      NomeProp={teste2.razaoSocial}
                      nomeImage={require("../mobile/assets/Images/building.webp")}
                    ></InfoVaga>
                    <InfoVaga
                      NomeProp={teste2.cidade}
                      nomeImage={require("../mobile/assets/Images/big-map-placeholder-outlined-symbol-of-interface.webp")}
                    ></InfoVaga>
                    <InfoVaga
                      NomeProp={teste2.experiencia}
                      nomeImage={require("../mobile/assets/Images/rocket-launch.webp")}
                    ></InfoVaga>
                    <InfoVaga
                      NomeProp={teste2.tipoContrato}
                      nomeImage={require("../mobile/assets/Images/gears.webp")}
                    ></InfoVaga>
                    <InfoVaga
                      NomeProp={teste2.salario}
                      nomeImage={require("../mobile/assets/Images/money (1).webp")}
                    ></InfoVaga>
                    <InfoVaga
                      NomeProp={teste2.tipoPresenca}
                      nomeImage={require("../mobile/assets/Images/global.png")}
                    ></InfoVaga>
                    <InfoVaga
                      NomeProp={teste2.nomeArea}
                      nomeImage={require("../mobile/assets/Images/web-programming.webp")}
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

      {/* <View >
        <ImageBackground source={require('../mobile/assets/Images/bannerVisualizarVaga.webp')} style={styles.BannerVizualizarVagaEmpresa}>
          <Text style={styles.TextoHeader}>Veja quem se inscreveu para esta vaga</Text>
        </ImageBackground>
      </View>

      <View style={styles.Vaga}>
        <View style={styles.VagaCompleta}>
          <Image style={styles.ImagemEmpresa} source={require('../mobile/assets/Images/Teste.webp')} />
          <View style={styles.MainVaga}>
            <Text style={styles.TituloVaga}>{TituloVaga}</Text>
            <View style={styles.InfoVagas}>
              <InfoVaga NomeProp={RazaoSocial} nomeImage={require('../mobile/assets/Images/building.webp')}></InfoVaga>
              <InfoVaga NomeProp={Cidade} nomeImage={require('../mobile/assets/Images/big-map-placeholder-outlined-symbol-of-interface.webp')}></InfoVaga>
              <InfoVaga NomeProp={Experiencia} nomeImage={require('../mobile/assets/Images/rocket-launch.webp')}></InfoVaga>
              <InfoVaga NomeProp={TipoContrato} nomeImage={require('../mobile/assets/Images/gears.webp')}></InfoVaga>
              <InfoVaga NomeProp={Salario} nomeImage={require('../mobile/assets/Images/money (1).webp')}></InfoVaga>
              <InfoVaga NomeProp={TipoPresenca} nomeImage={require('../mobile/assets/Images/global.png')}></InfoVaga>
              <InfoVaga NomeProp={NomeArea} nomeImage={require('../mobile/assets/Images/web-programming.webp')}></InfoVaga>
            </View>
            <View style={styles.TecnologiasVaga}>
              {
                Tecnologias.map((item)=>{
                  return(
                    <Tag NomeTag={item}></Tag>
                  );
                })
              }
            </View>
          </View>
        </View>
      </View>

      <View style={styles.ListaInscricoes}>
        {
          Inscricoes.map((item) => {
            return (
              <View key={item.idInscricao} style={styles.Inscricao}>
                <View style={styles.HeaderInscricao}>
                  <Image style={styles.imagemCandidato} source={require('./assets/Images/android-character-symbol.webp')}></Image>
                <Text>{item.nomeCandidato}</Text>
                  <Text style={styles.nomeCandidato}></Text>
            <Text style={styles.h5}>{item.nomeCurso}</Text>
                </View>

                <View style={styles.BodyInscricao}>
                  <Tag NomeTag={"Email:"+item.email}></Tag>
                  <Tag NomeTag={"Telefone:"+item.telefone}></Tag>
                </View>
                <View style={styles.AprovarRecusar}>
                  <TouchableOpacity style={styles.btAprovar}><Text style={styles.texBtIns}>Aprovar</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.btReprovar}><Text style={styles.texBtIns}>Recusar</Text></TouchableOpacity>
                </View>
              </View>
            );
          })
        }
      </View> */}

      {/* <View >
        <ImageBackground source={require('../mobile/assets/Images/bannerVisualizarVaga.webp')} style={styles.BannerVizualizarVagaEmpresa}>
          <Text style={styles.TextoHeader}>Veja quem se inscreveu para essa vaga</Text>
        </ImageBackground>
      </View>

      <View style={styles.Vaga}>
        <View style={styles.VagaCompleta}>
          <Image style={styles.ImagemEmpresa} source={require('../mobile/assets/Images/Teste.webp')} />
          <View style={styles.MainVaga}>
            <Text style={styles.TituloVaga}>Desenvolvedor Teste</Text>
            <View style={styles.InfoVagas}>
              <InfoVaga NomeProp={"NomeEmpresa"} nomeImage={require('../mobile/assets/Images/building.webp')}></InfoVaga>
              <InfoVaga NomeProp={"Cidade"} nomeImage={require('../mobile/assets/Images/big-map-placeholder-outlined-symbol-of-interface.webp')}></InfoVaga>
              <InfoVaga NomeProp={"Experiencia"} nomeImage={require('../mobile/assets/Images/rocket-launch.webp')}></InfoVaga>
              <InfoVaga NomeProp={"TipoContarto"} nomeImage={require('../mobile/assets/Images/gears.webp')}></InfoVaga>
              <InfoVaga NomeProp={"Salario"} nomeImage={require('../mobile/assets/Images/money (1).webp')}></InfoVaga>
              <InfoVaga NomeProp={"Tipo presenca"} nomeImage={require('../mobile/assets/Images/global.png')}></InfoVaga>
              <InfoVaga NomeProp={"Area"} nomeImage={require('../mobile/assets/Images/web-programming.webp')}></InfoVaga>
            </View>
            <View style={styles.TecnologiasVaga}>
              <Tag NomeTag={"C#"}></Tag>
              <Tag NomeTag={"C#"}></Tag>
              <Tag NomeTag={"C#"}></Tag>
              <Tag NomeTag={"C#"}></Tag>
              <Tag NomeTag={"C#"}></Tag>
              <Tag NomeTag={"C#"}></Tag>
              <Tag NomeTag={"C#"}></Tag>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.ListaInscricoes}>
        <View style={styles.Inscricao}>
          <View style={styles.HeaderInscricao}>
            <Image style={styles.imagemCandidato} source={require('./assets/Images/android-character-symbol.webp')}></Image>
            <Text>Nome do candidato</Text>
            <Text style={styles.nomeCandidato}></Text>
          </View>

          <View style={styles.BodyInscricao}>
            <Tag NomeTag={"Email:ssfdfsdfsdfsdf"}></Tag>
            <Tag NomeTag={"Telefone:2321323423"}></Tag>
          </View>
        </View>
      </View> */}
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
  Inscricao: {
    width: "275px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    marginBottom: "50px",
  },
  AprovarRecusar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: "2vh",
  },
  btAprovar: {
    backgroundColor: "#00982B",
    height: "36px",
    width: "107px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    textAlign: "center",
    justifyContent: "center",
  },
  btReprovar: {
    backgroundColor: "#FD0F00",
    height: "36px",
    width: "107px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    textAlign: "center",
    justifyContent: "center",
  },
  texBtIns: {
    color: "#fff",
    fontWeight: "bold",
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
