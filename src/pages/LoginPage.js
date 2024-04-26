import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

const LoginPage = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = route.params;

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigation.navigate('Home');
  };

  const handleForget = () => {
    console.log("forget password");
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiper}
        showsButtons={false}
        loop={false}
        autoplay
        autoplayTimeout={3}
      >
        <View style={styles.slide}>
          <Image source={require('../../assets/tuview.png')} style={styles.slideImage} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/tuview2.png')} style={styles.slideImage} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/tuview3.png')} style={styles.slideImage} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../../assets/tuview4.png')} style={styles.slideImage} />
        </View>
      </Swiper>

      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/tulogo.png')} style={styles.logo} />
          <View style={styles.kungContainer}>
            <Image source={require('../../assets/kung.png')} style={styles.kungImage} />
            <Text style={styles.kungText}>2 KUNG</Text>
          </View>
        </View>

        <TextInput
          placeholder="Student ID"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholderTextColor="#999"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#999"
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgetButton} onPress={handleForget}>
          <Text style={styles.forgetButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  swiper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
  },
  kungContainer: {
    alignItems: 'center',
  },
  kungImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  kungText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  forgetButton: {
    alignItems: 'center',
    marginBottom: 10,
  },
  forgetButtonText: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;