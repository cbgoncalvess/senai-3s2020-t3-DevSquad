import React, { useEffect, useState } from 'react';
import {ImageBackground,StyleSheet,Text,View,TouchableOpacity,Image,Alert} from "react-native";
import InfoVaga from "../../Components/InfoVaga/index";
import Tag from "../../Components/Tag/index";
export default function ListarVagasInscritas() {

    const [ListarVagasInscritas, setListarVagasInscritas] = useState([]);

    useEffect(() => {
        listarVagasInscritas();
    }, []);

    const listarVagasInscritas = () => {
        fetch("http://localhost:5000/api/Candidato/ListarVagasInscritas", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((dados) => {
            setListarVagasInscritas(dados);
          })
          .catch((err) => console.error(err));
    };


return (
    <View style={styles.Fundo}>
        <View style={styles.teste}>
            <ImageBackground source={require('../../assets/Images/bannerVisualizarVaga.webp')} style={styles.BannerVizualizarVagaEmpresa}>
            <Text style={styles.TextoHeader}>Bem-vindo Candidato</Text>
            </ImageBackground>
        </View>
        <View>
            <Text style={styles.TextoTitulo}>Vagas em que você se inscreveu</Text>
        </View>
        {ListarVagasInscritas.map((item) => {
        return (
            <View style={styles.Vaga} key={item.idVaga}>
                <View style={styles.VagaCompleta}>
                    <Image
                        style={styles.ImagemEmpresa}
                        source={require("../../assets/Images/Teste.webp")}
                    />
                    <View style={styles.MainVaga}>
                        <Text style={styles.TituloVaga} onPress={(e) => {
                            e.preventDefault();
                            idVaga = item.idVaga;
                            ArmazenarIdVaga();
                            }}>{item.tituloVaga}</Text>
                        <View style={styles.InfoVagas}>
                            <InfoVaga
                                NomeProp={item.razaoSocial}
                                nomeImage={require("../../assets/Images/building.webp")}
                            ></InfoVaga>
                            <InfoVaga
                                NomeProp={item.cidade}
                                nomeImage={require("../../assets/Images/big-map-placeholder-outlined-symbol-of-interface.webp")}
                            ></InfoVaga>
                            <InfoVaga
                                NomeProp={item.experiencia}
                                nomeImage={require("../../assets/Images/rocket-launch.webp")}
                            ></InfoVaga>
                            <InfoVaga
                                NomeProp={item.tipoContrato}
                                nomeImage={require("../../assets/Images/gears.webp")}
                            ></InfoVaga>
                            <InfoVaga
                                NomeProp={item.salario}
                                nomeImage={require("../../assets/Images/money (1).webp")}
                            ></InfoVaga>
                            <InfoVaga
                                NomeProp={item.tipoPresenca}
                                nomeImage={require("../../assets/Images/global.png")}
                            ></InfoVaga>
                            <InfoVaga
                                NomeProp={item.nomeArea}
                                nomeImage={require("../../assets/Images/web-programming.webp")}
                            ></InfoVaga>
                        </View>
                    <View style={styles.TecnologiasVaga}>
                    {item.tecnologias.map((subItem) => {
                    return <Tag NomeTag={subItem}></Tag>;
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

const styles = StyleSheet.create({
    Fundo: {
        backgroundColor: "#DFDFDF",
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
    TextoTitulo: {
        textAlign: "center",
        marginTop: "2vw",
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