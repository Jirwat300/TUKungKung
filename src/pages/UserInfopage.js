import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const UserInfoPage = () => {
  const userData = {
    fullName: 'John Doe',
    birthDate: '01/01/1990',
    motherName: 'Jane Doe',
    fatherName: 'John Doe Sr.',
    currentAddress: '123 Main St, City, Country',
    birthAddress: '456 Oak St, Town, Country',
    studentId: '6510742239',
    faculty: 'Faculty of Engineering',
    program: 'Computer Science',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      <View style={styles.infoContainer}>
        <InfoRow label="Full Name" value={userData.fullName} />
        <InfoRow label="Birth Date" value={userData.birthDate} />
        <InfoRow label="Mother's Name" value={userData.motherName} />
        <InfoRow label="Father's Name" value={userData.fatherName} />
        <InfoRow label="Current Address" value={userData.currentAddress} />
        <InfoRow label="Birth Address" value={userData.birthAddress} />
        <InfoRow label="Student ID" value={userData.studentId} />
        <InfoRow label="Faculty" value={userData.faculty} />
        <InfoRow label="Program" value={userData.program} />
        <InfoRow label="Email" value={userData.email} />
        <InfoRow label="Phone" value={userData.phone} />
      </View>
    </ScrollView>
  );
};

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#2196F3', // Modern blue color
  },
  infoContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5', // Light gray background
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
    width: 150,
    color: '#333', // Dark gray color for labels
  },
  value: {
    flex: 1,
    fontSize: 16,
    color: '#555', // Light gray color for values
  },
});

export default UserInfoPage;