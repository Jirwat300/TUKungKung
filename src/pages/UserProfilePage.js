import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import StudentInfoCard from '../components/StudentInfoCard';

const studentMockupData = {
  name: 'จอห์น ดอ',
  faculty: 'คณะ/สาขา',
  studentId: '6510742239',
  gpax: '3.99',
  credit: '99',
  imageUri: 'https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/363840240_993237351715016_170958913534740124_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEuWDZupAKZH1WwUYPD394-yiBimRV-ZsPKIGKZFX5mwx3gvJJJA2y0Dk-dhc5_1G-SaJrB_gTn3JaAaGlTR7Qh&_nc_ohc=G3dRcROFpKoAX_rA1wD&_nc_ht=scontent.fbkk2-8.fna&cb_e2o_trans=t&oh=00_AfCbqIS0umMEoK98EQrpLQHrS9LE3R5Gvkvsh9N7-hGlKw&oe=6609DF90',
};

const UserProfilePage = () => {
  return (
    <ScrollView style={styles.container}>
      <StudentInfoCard studentData={studentMockupData} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>การลงทะเบียนเรียน</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ผลการลงทะเบียนเรียน</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ผลการเรียน</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>รายการชำระเงิน</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>แผนที่รถ EV</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default UserProfilePage;
