import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  select: {
    width: 250,
    height: 25,
    marginTop: 10,
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
