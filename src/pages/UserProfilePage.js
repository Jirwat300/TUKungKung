import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import StudentInfoCard from '../components/StudentInfoCard';
import { useNavigation } from '@react-navigation/native';

const studentMockupData = {
  name: 'John Doe',
  faculty: 'Faculty/Department',
  studentId: '6510742239',
  gpax: '3.99',
  credit: '99',
  imageUri: 'https://scontent.fbkk2-8.fna.fbcdn.net/v/t39.30808-6/363840240_993237351715016_170958913534740124_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEuWDZupAKZH1WwUYPD794-yiBimRV-ZsPKIGKZFX5mwx3gvJJJA2y0Dk-dhc5_1G-SaJrB_gTn3JaAaGlTR7Qh&_nc_ohc=G3dRcROFpKoAX_rA1wD&_nc_ht=scontent.fbkk2-8.fna&cb_e2o_trans=t&oh=00_AfCbqIS0umMEoK98EQrpLQHrS9LE3R5Gvkvsh9N7-hGlKw&oe=6609DF90',
};

const UserProfilePage = () => {
  const navigation = useNavigation();

  const handleUserInfoPress = () => {
    navigation.navigate('UserInfo');
  };

  const handleStudentCardPress = () => {
    navigation.navigate('StudentCard');
  };

  const handleEditPersonalInfoPress = () => {
    navigation.navigate('EditInfo'); // Ensure 'EditInfo' matches the route name in your stack navigator
  };

  return (
    <ScrollView style={styles.container}>
      <StudentInfoCard studentData={studentMockupData} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buttonShadow, { backgroundColor: '#FFA500' }]}
          onPress={handleUserInfoPress}
        >
          <Text style={styles.buttonText}>ข้อมูลนักศึกษา</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonShadow, { backgroundColor: '#FF7F50' }]}
          onPress={handleStudentCardPress}
        >
          <Text style={styles.buttonText}>ทำบัตรนักศึกษา</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonShadow, { backgroundColor: '#FF6347' }]}
          onPress={handleEditPersonalInfoPress}
        >
          <Text style={styles.buttonText}>เเก้ไขประวัติส่วนตัว</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonShadow, { backgroundColor: '#FF4500' }]}
        >
          <Text style={styles.buttonText}>ผลการเรียน</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonShadow, { backgroundColor: '#FF0000' }]}
        >
          <Text style={styles.buttonText}>ตารางเรียน/ตารางสอบ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfilePage;
