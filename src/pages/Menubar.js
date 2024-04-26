import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const Menubar = () => {
  const handlePress = (actionLabel) => {
    Alert.alert(actionLabel);
  };

  const CustomButton = ({ title, onPress, color = '#007bff' }) => (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.menubarContainer}>
        <CustomButton
          title="ลงทะเบียน/เพิ่ม-ถอนรายวิชา"
          onPress={() => handlePress('ลงทะเบียน/เพิ่ม-ถอนรายวิชา')}
          color="#2196F3"
        />
        <CustomButton
          title="ชำระค่าธรรมเนียมการศึกษา"
          onPress={() => handlePress('ชำระค่าธรรมเนียมการศึกษา')}
          color="#F44336"
        />
        <CustomButton title="รายการชำระเงิน" onPress={() => handlePress('รายการชำระเงิน')} color="#9C27B0" />
        <CustomButton title="ปฏิทินการศึกษา" onPress={() => handlePress('ปฏิทินการศึกษา')} color="#FF9800" />
        <CustomButton title="แจ้งเรื่องการร้องเรียน" onPress={() => handlePress('แจ้งเรื่องการร้องเรียน')} color="#673AB7" />
        <CustomButton title="ยื่นคำร้อง" onPress={() => handlePress('ยื่นคำร้อง')} color="#00BCD4" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  menubarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Menubar;