import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FacilityHomepage = ({ navigation }) => {
  const handlePress = (screenName) => {
    console.log(`Button for ${screenName} pressed`);
    navigation.navigate(screenName);
  };

  const CustomButton = ({ title, onPress, color = '#FFD13F', iconName }) => (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, { backgroundColor: color }]}>
      <View style={styles.buttonContent}>
        <View style={styles.buttonIconContainer}>
          <Icon name={iconName} size={24} color="#C3002F" />
        </View>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <CustomButton
        title="การจอง"
        onPress={() => handlePress('Booking')}
        color="#FFD13F"
        iconName="event-note"
      />
      <CustomButton
        title="เเผนที่รถEV"
        onPress={() => handlePress('Evmap')}
        color="#FFD13F"
        iconName="map"
      />
      <CustomButton
        title="บริการด้านสุขภาพ"
        onPress={() => handlePress('HealthyService')}
        color="#FFD13F"
        iconName="favorite"
      />
      <CustomButton
        title="หอใน"
        onPress={() => handlePress('Hornaii')}
        color="#FFD13F"
        iconName="home"
      />
      <CustomButton
        title="ทุนการศึกษา"
        onPress={() => handlePress('Scholar')}
        color="#FFD13F"
        iconName="school"
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
    backgroundColor: '#F5F5F5',
  },
  buttonContainer: {
    width: '90%',
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIconContainer: {
    marginRight: 8,
  },
  buttonText: {
    color: '#C3002F',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FacilityHomepage;