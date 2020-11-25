import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import InfoVaga from './Components/InfoVaga/index';
import Tag from './Components/Tag/index';

export default function App() {
  const tes = '../mobile/assets/Images/gears.webp';
  return (
    <View style={styles.teste}>
      <View >
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
          <View style={styles.AprovarRecusar}>
            <TouchableOpacity style={styles.btAprovar}><Text style={styles.texBtIns}>Aprovar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btReprovar}><Text style={styles.texBtIns}>Recusar</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teste: {
    backgroundColor: '#DFDFDF'
  },
  imagemCandidato:{
    height: 60,
    width: 60,
    marginTop:9
  },
  HeaderInscricao:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  BannerVizualizarVagaEmpresa: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '300px',
    padding: '5vh'
  },
  TextoHeader: {
    color: '#fff',
    fontSize: '25px'
  },
  Vaga: {
    backgroundColor: '#FAFAFA',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column'
  },
  VagaCompleta: {
    flexDirection: 'row',
    borderRadius: '4px',
    padding: '3vh',
    flexWrap: 'wrap'
  },
  MainVaga: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '90%'
  },
  InfoVagas: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  TecnologiasVaga: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  ImagemEmpresa: {
    height: '100px',
    width: '100px'
  },
  TituloVaga: {
    fontSize: '17px'
  },
  Inscricao:{
    width: '275px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '5px',
    marginBottom: '50px'
  },
  AprovarRecusar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: '2vh'
  },
  btAprovar: {
    backgroundColor: '#00982B',
    height: '36px',
    width: '107px',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textAlign:'center',
    justifyContent:'center',
  },
  btReprovar: {
    backgroundColor: '#FD0F00',
    height: '36px',
    width: '107px',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textAlign:'center',
    justifyContent:'center',
  },
  texBtIns:{
    color:'#fff',
    fontWeight:'bold'
  },
  BodyInscricao:{
    textAlign: 'center',
    padding: '2vh',
    width: '100%'
  },
  nomeCandidato:{
    borderBottomColor: 'black',
    borderWidth:1,
  }
});
