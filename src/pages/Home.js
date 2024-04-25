import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const Home = () => {
  // Array of image URLs for the Swiper
  const swiperImages = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
        {swiperImages.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.slideImage} />
        ))}
      </Swiper>

      <Text style={styles.subTitle}>Announce</Text>
      <View style={styles.imageBox}>
        <Image
          source={{ uri: 'https://example.com/announce-image.jpg' }}
          style={styles.image}
        />
        <Text style={styles.imageName}>Name of the Image</Text>
        <Text style={styles.imageDescription}>Description of what the image is about.</Text>
      </View>

      <Text style={styles.subTitle}>News</Text>
      <TouchableOpacity style={styles.newsBox}>
        <Image
          source={{ uri: 'https://example.com/news-image.jpg' }}
          style={styles.image}
        />
        {/* You can add a Text component here for a label if needed */}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
  },
  wrapper: {
    height: 200,
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  imageBox: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
  imageName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
  newsBox: {
    height: 150,
    width: 150,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default Home;