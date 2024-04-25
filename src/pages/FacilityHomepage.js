import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FacilityHomepage = ({ navigation }) => {
  const handlePress = (screenName) => {
    console.log(`Button for ${screenName} pressed`);
    navigation.navigate(screenName);
  };

  const CustomButton = ({ title, onPress, color = '#007bff' }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor: color }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomButton
        title="การจอง"
        onPress={() => handlePress('Booking')}
        color="#E91E63" // Pink
      />
      <CustomButton
        title="เเผนที่รถEV"
        onPress={() => handlePress('Evmap')}
        color="#9C27B0" // Purple
      />
      <CustomButton
        title="บริการด้านสุขภาพ"
        onPress={() => handlePress('HealthyService')}
        color="#3F51B5" // Indigo
      />
      <CustomButton
        title="หอใน"
        onPress={() => handlePress('Hornaii')}
        color="#2196F3" // Blue
      />
      <CustomButton
        title="ทุนการศึกษา"
        onPress={() => handlePress('Scholar')}
        color="#4CAF50" // Green
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5', // Light gray background
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 30, // Increased border radius for a modern look
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
    marginLeft: 10,
  },
});

export default FacilityHomepage;