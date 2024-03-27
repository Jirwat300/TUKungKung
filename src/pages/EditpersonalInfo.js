import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker

const PersonalInfoForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [idNumber, setIdNumber] = useState(''); // State for ID number
  const [birthdate, setBirthdate] = useState(''); // State for birthdate
  const [addressID, setAddressID] = useState(''); // State for address on ID
  const [currentAddress, setCurrentAddress] = useState(''); // State for current address
  // Placeholder image URL - replace with your own image URL or local require
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150"); // Default image URL

  const handleSubmit = () => {
    // Here, you'd handle the submission of the form
    console.log(name, surname, idNumber, birthdate, addressID, currentAddress);
    // Typically, you would send this data to a backend server or store it locally
  };

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setProfilePic(result.assets[0].uri); // Access the uri from the first item in the assets array
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
      {/* Centered Profile Picture */}
      <TouchableOpacity onPress={pickImage} style={styles.profilePicContainer}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
      </TouchableOpacity>


      {/* Name and Surname Text - Optionally can remove or keep based on design */}
      <Text style={styles.nameText}>{name} {surname}</Text>

      <Text style={styles.label}>ชื่อ:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>เลขบัตรประชาชน:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setIdNumber}
        value={idNumber}
        placeholder="Enter your ID number"
      />

      <Text style={styles.label}>วัน/เดือน/ปีเกิด:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setBirthdate}
        value={birthdate}
        placeholder="DD/MM/YYYY"
        keyboardType="numeric"
      />

      <Text style={styles.label}>ที่อยู่บัตรประชาชน:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAddressID}
        value={addressID}
        placeholder="Enter address as per ID"
      />

      <Text style={styles.label}>ที่อยู่ปัจจุบัน:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCurrentAddress}
        value={currentAddress}
        placeholder="Enter your current address"
      />

      <Button title="Confirm Edit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profilePicContainer: {
    marginBottom: 20,
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 40,
  },
  nameText: {
    fontSize: 18,
    textAlign: 'center',
  },
  label: {
    alignSelf: 'stretch',
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignSelf: 'stretch',
  },
});

export default PersonalInfoForm;
