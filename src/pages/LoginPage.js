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
    navigation.navigate('DemoScholar');
  };

  const handleForget = () => {
    console.log("forget password");
  };

  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <Swiper style={styles.wrapper} showsButtons={false} loop={false}>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/tuview.png')}
              style={styles.imageTop}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/tuview2.png')}
              style={styles.imageTop}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/tuview3.png')}
              style={styles.imageTop}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../../assets/tuview4.png')}
              style={styles.imageTop}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/tulogo.png')}
            style={styles.logo}
          />
          <View style={styles.kungContainer}>
            <Image
              source={require('../../assets/kung.png')}
              style={styles.kungImage}
            />
            <Text style={styles.kungText}>2 KUNG</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Student-ID</Text>
          <TextInput
            placeholder="รหัสนักศึกษา"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="รหัสผ่าน"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgetbutton} onPress={handleForget}>
          <Text style={styles.forgetButtonText}>ลืมรหัสผ่าน</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  wrapper: {},
  swiper: {
    height: 200,
    marginBottom: 20,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTop: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  kungContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  kungImage: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  kungText: {
    fontSize: 18,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 20,
    flex: 1,
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 100,
  },
  loginButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 120,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  forgetbutton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 120,
  },
  forgetButtonText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;