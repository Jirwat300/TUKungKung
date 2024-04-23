import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Evmap from '../../public/Evmap.jpg'

const EvMapPage = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/295285943_5279438925426201_1384382554618136603_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zLHgCWbSwn4Ab6Q3QJg&_nc_ht=scontent.fbkk29-8.fna&cb_e2o_trans=t&oh=00_AfD0oNBQQOk9OjNtapNbQGo4Fx2dY_T8kSt17xGreZR05w&oe=662DC279'}} // Replace with your image URL
        resizeMode="fit" // This prop ensures the image covers the whole screen
        style={styles.imageBackground}
      >
      </ImageBackground>
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
    justifyContent: 'center', // This aligns children components (like text) to the center
  },
  text: {
    color: 'white',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0', // Semi-transparent background for better readability
  }
});

export default EvMapPage;
