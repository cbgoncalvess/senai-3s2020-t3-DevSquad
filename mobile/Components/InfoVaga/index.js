import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function InfoVaga(props) {
  return (
    <View style={styles.InfoVagas}>
    <Image style={styles.ImageInfoVaga} source={props.nomeImage}/>
      <Text style={styles.h5}>{props.NomeProp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    InfoVagas: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px',
    flexWrap: 'wrap'
  },
    ImageInfoVaga:{
    width:'25px',
    height:'25px', 
    marginRight:'9px'
  }
});
