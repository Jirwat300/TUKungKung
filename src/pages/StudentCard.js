import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LostIDCardForm = () => {
  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [faculty, setFaculty] = useState('');
  const [program, setProgram] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    // Here, you can implement the logic to handle the form submission
    // This could involve sending the data to a server or performing any other necessary actions
    console.log('Form submitted:', { name, studentID, faculty, program, email, phone, reason });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Report Lost Student ID Card</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Student ID"
          placeholderTextColor="#999"
          value={studentID}
          onChangeText={setStudentID}
        />
        <TextInput
          style={styles.input}
          placeholder="Faculty"
          placeholderTextColor="#999"
          value={faculty}
          onChangeText={setFaculty}
        />
        <TextInput
          style={styles.input}
          placeholder="Program"
          placeholderTextColor="#999"
          value={program}
          onChangeText={setProgram}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#999"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Reason (lost, broken, etc..)"
          placeholderTextColor="#999"
          value={reason}
          onChangeText={setReason}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  formContainer: {
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LostIDCardForm;