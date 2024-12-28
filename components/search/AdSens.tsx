import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AdSens() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AdSens</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    height: 143,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20, 
    fontWeight: '500',
    color: 'black',
  },
});

