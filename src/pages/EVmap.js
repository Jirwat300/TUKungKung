import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

const EvMapPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('../../public/Evmap.jpg')}
      resizeMode="auto"
      style={styles.imageBackground}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default EvMapPage;