import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
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
    fontSize: 25,
  },
  TextoTitulo: {
    textAlign: "center",
    fontSize: 25,
    padding: 30,
    fontWeight: "bold",
  },
  Vaga: {
    backgroundColor: "#FAFAFA",
    marginBottom: "20px",
    flexDirection: "column",
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
    textAlign: "center",
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
  },
  nomeCandidato: {
    borderBottomColor: "black",
    borderWidth: 1,
  },
  btnRevogar: {
    backgroundColor: "red",
    borderWidth: 0,
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
  },
  texBtIns: {
    color: "#fff",
    fontWeight: "bold",
  },
});
