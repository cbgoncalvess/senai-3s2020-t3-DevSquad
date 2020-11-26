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
    justifycontent: 'space-between',
    alignitems: 'center',
    margin: '10px',
    flexwrap: 'wrap'
  },
    ImageInfoVaga:{
    width:'25px',
    height:'25px', 
    marginright:'9px'
  }
});
