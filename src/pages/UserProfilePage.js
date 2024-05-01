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
  imageUri: require('../../public/peet.jpg'),
};

const UserProfilePage = () => {
  const navigation = useNavigation();

  // Navigation handlers for different user options
  const handleUserInfoPress = () => navigation.navigate('UserInfo');
  const handleStudentCardPress = () => navigation.navigate('StudentCard');
  const handleEditPersonalInfoPress = () => navigation.navigate('EditInfo');
  const handleSchoolRecordPress = () => navigation.navigate('SchoolRecord');
  const handleCourseRegistrationPress = () => navigation.navigate('CourseRegistration');
  const handlePaymentPress = () => navigation.navigate('Payment');
  const handleTransactionListPress = () => navigation.navigate('TransactionList');
  const handleAcademicCalendarPress = () => navigation.navigate('AcademicCalendar');
  const handleComplaintPress = () => navigation.navigate('Complaint');
  const handlePetitionPress = () => navigation.navigate('Petition');
  const handleExStudentCardPress = () => navigation.navigate('ExStudentCard');

  return (
    <ScrollView style={styles.container}>
      <StudentInfoCard studentData={studentMockupData} />
      <View style={styles.buttonContainer}>
        {/* Existing buttons */}
        <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#FFA500' }]} onPress={handleUserInfoPress}>
          <Text style={styles.buttonText}>ข้อมูลนักศึกษา</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#FF7F50' }]} onPress={handleStudentCardPress}>
          <Text style={styles.buttonText}>ทำบัตรนักศึกษา</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#FF6347' }]} onPress={handleEditPersonalInfoPress}>
          <Text style={styles.buttonText}>เเก้ไขประวัติส่วนตัว</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#FF4500' }]} onPress={handleSchoolRecordPress}>
          <Text style={styles.buttonText}>ผลการเรียน</Text>
        </TouchableOpacity>

        {/* Grouped buttons */}
        <View style={styles.groupedButtonContainer}>
          <Text style={styles.groupTitle}>อื่นๆ</Text>
          <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#9370DB' }]} onPress={handleCourseRegistrationPress}>
            <Text style={styles.buttonText}>ลงทะเบียนเพิ่ม/ถอนรายวิชา</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#8A2BE2' }]} onPress={handlePaymentPress}>
            <Text style={styles.buttonText}>ชำระค่าธรรมเนียมการศึกษา</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#6A5ACD' }]} onPress={handleTransactionListPress}>
            <Text style={styles.buttonText}>รายการชำระเงิน</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#483D8B' }]} onPress={handleAcademicCalendarPress}>
            <Text style={styles.buttonText}>ปฏิทินการศึกษา</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#DAA520' }]} onPress={handleComplaintPress}>
            <Text style={styles.buttonText}>เเจ้งเรื่องการร้องเรียน</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonShadow, { backgroundColor: '#B22222' }]} onPress={handlePetitionPress}>
            <Text style={styles.buttonText}>ยื่นคำร้อง</Text>
          </TouchableOpacity>
        </View>
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
    textAlign: 'center',
  },
  groupedButtonContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default UserProfilePage;