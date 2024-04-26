import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserInfopage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Information</Text>
      {/* Add your user information components here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default UserInfopage;