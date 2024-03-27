import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ScholarCard = ({ title, imageUrl, onApply }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      {/* Title Container with centered text */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onApply} style={styles.applyButton}>
        <Text style={styles.applyButtonText}>สมัคร</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: '#fff',
    position: 'relative',
    marginHorizontal: '50px',
    marginVertical: '20px',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  titleContainer: {
    // Align text to the center
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  applyButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'green', // Change to green
    padding: 8,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ScholarCard;
