import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FacilityHomepage = ({ navigation }) => {
  const handlePress = (screenName) => {
    console.log(`Button for ${screenName} pressed`);
    navigation.navigate(screenName);
  };

  const CustomButton = ({ title, onPress, color = '#007bff' }) => (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { backgroundColor: color }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomButton title="การจอง" onPress={() => handlePress('Booking')} color="#4CAF50" />
      <CustomButton title="เเผนที่รถEV" onPress={() => handlePress('Evmap')} color="#4CAF50" />
      <CustomButton title="บริการด้านสุขภาพ" onPress={() => handlePress('HealthyService')} color="#4CAF50"/>
      <CustomButton title="หอใน" onPress={() => handlePress('Hornaii')} color="#4CAF50"/>
      <CustomButton title="ทุนการศึกษา" onPress={() => handlePress('Scholar')} color="#4CAF50" />
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
    buttonContainer: {
      flexDirection: 'row', // Align icon and text horizontally
      width: '90%',
      paddingVertical: 15,
      paddingHorizontal: 20,
      margin: 10,
      borderRadius: 10, // Rounded corners
      alignItems: 'center',
      elevation: 3, // Shadow for Android
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 10, // Add space between icon and text
    },
    iconStyle: {
      marginRight: 10, // Space before text
    },
  });

// Export the FacilityHomepage component
export default FacilityHomepage;
