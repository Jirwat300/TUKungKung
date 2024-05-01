import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
const buttonWidth = width / 2 - 30;  // Adjust this value to change the spacing and size

const FacilityHomepage = ({ navigation }) => {
  const handlePress = (screenName) => {
    console.log(`Button for ${screenName} pressed`);
    navigation.navigate(screenName);
  };

  const CustomButton = ({ title, onPress, color, iconName }) => (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { backgroundColor: color, width: buttonWidth, height: buttonWidth }]}>
      <View style={styles.buttonIcon}>
        <Icon name={iconName} size={60} color="#FFFFFF" />
      </View>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomButton
        title="การจอง"
        onPress={() => handlePress('Booking')}
        iconName="event-note"
        color="#F37DE3" // Red
      />
      <CustomButton
        title="เเผนที่รถEV"
        onPress={() => handlePress('Evmap')}
        iconName="map"
        color="#4D96FF" // Blue
      />
      <CustomButton
        title="บริการด้านสุขภาพ"
        onPress={() => handlePress('HealthyService')}
        iconName="favorite"
        color="#FF6B6B" // Yellow
      />
      <CustomButton
        title="หอใน"
        onPress={() => handlePress('Hornaii')}
        iconName="home"
        color="#4CAF50" // Green
      />
      <CustomButton
        title="ทุนการศึกษา"
        onPress={() => handlePress('Scholar')}
        iconName="school"
        color="#BA68C8" // Purple
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#F5F5F5',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  buttonIcon: {
    marginBottom: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FacilityHomepage;
