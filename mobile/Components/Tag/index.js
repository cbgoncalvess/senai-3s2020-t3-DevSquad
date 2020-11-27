import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tag(props) {
  return (
    <View style={styles.Tag}>
      <Text style={styles.h5}>{props.NomeTag}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Tag: {
    backgroundColor: '#F3F3F3',
    margin: '10px',
    padding: '5px',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '2px'
  },
  h5:{
      fontSize:'13px'
  }
});
