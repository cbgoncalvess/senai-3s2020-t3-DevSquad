import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  login: {
    marginTop: 90,
    justifyContent: "center",
    alignItems: "center",
  },

  sessaoLogar: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    width: "358px",
    height: "596px",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  lbErro: {
    alignItems: "center",
  },
  divisionLogarTitle: {
    flexDirection: "column",
    height: 90,
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
    height: 70,
    alignItems: "flex-start",
    marginBottom: 25,
  },
  lbErroText: { color: "red" },

  divisionPassword: {
    height: 100,
  },

  divisionCampoText: {
    fontWeight: "600",
    marginBottom: 10,
  },

  inputUser: {
    paddingLeft: 16,
    borderRadius: 4,
    width: "295px",
    height: "44.51px",
    backgroundColor: "#f3f3f3",
  },

  inputPassword: {
    paddingLeft: 16,
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
