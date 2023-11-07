import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Navbar = props => {
  return (
    <View style={styles.navbar}>
      <Text styles={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
