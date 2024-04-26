import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <Image source={require('../../public/Talangrian.jpg')} style={styles.image} resizeMode="contain" />
    <TouchableOpacity style={styles.overlay} activeOpacity={0.7}>
      {/* Any overlay content can go here */}
    </TouchableOpacity>
    <View style={styles.textBoxContainer}>
      <View style={[styles.textBox, { backgroundColor: '#FFC107' }]}>
        <Text style={styles.header}>CH171</Text>
        <Text style={styles.description}>13.30 - 16.30</Text>
        <Text style={styles.description}>Doctor Stephen Strange</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#4CAF50' }]}>
        <Text style={styles.header}>CN311</Text>
        <Text style={styles.description}>09.30 - 12.30</Text>
        <Text style={styles.description}>Mr. Henry Hum</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#2196F3' }]}>
        <Text style={styles.header}>CN321</Text>
        <Text style={styles.description}>09.30 - 12.30</Text>
        <Text style={styles.description}>Mrs. Samantha Gorilla</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#9C27B0' }]}>
        <Text style={styles.header}>PC280</Text>
        <Text style={styles.description}>16.30 - 19.30</Text>
        <Text style={styles.description}>Mr. Pomm SheFu</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#FF9800' }]}>
        <Text style={styles.header}>SF221</Text>
        <Text style={styles.description}>13.30 - 16.30</Text>
        <Text style={styles.description}>Doctor Argh Semo</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#673AB7' }]}>
        <Text style={styles.header}>SF222</Text>
        <Text style={styles.description}>13.30 - 16.30</Text>
        <Text style={styles.description}>Doctor Augay Kuaytiew</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#00BCD4' }]}>
        <Text style={styles.header}>SF231</Text>
        <Text style={styles.description}>09.30 - 12.30</Text>
        <Text style={styles.description}>Mr. Andrew Nombig</Text>
      </View>
    </View>
  </ScrollView>
);

const SecondRoute = () => (
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <Image source={require('../../public/Talangsob.jpg')} style={styles.image} resizeMode="contain" />
    <TouchableOpacity style={styles.overlay} activeOpacity={0.7}>
      {/* Any overlay content can go here */}
    </TouchableOpacity>
    <View style={styles.textBoxContainer}>
      <View style={[styles.textBox, { backgroundColor: '#FFC107' }]}>
        <Text style={styles.header}>CH171</Text>
        <Text style={styles.description}>Room 610</Text>
        <Text style={styles.description}>09.00 - 12.00</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#4CAF50' }]}>
        <Text style={styles.header}>CN311</Text>
        <Text style={styles.description}>Room 210</Text>
        <Text style={styles.description}>09.00 - 12.00</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#2196F3' }]}>
        <Text style={styles.header}>CN321</Text>
        <Text style={styles.description}>Room 103</Text>
        <Text style={styles.description}>09.00 - 12.00</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#9C27B0' }]}>
        <Text style={styles.header}>PC280</Text>
        <Text style={styles.description}>Room 710</Text>
        <Text style={styles.description}>12.00 - 15.00</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#FF9800' }]}>
        <Text style={styles.header}>SF221</Text>
        <Text style={styles.description}>Room 304</Text>
        <Text style={styles.description}>12.00 - 15.00</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#673AB7' }]}>
        <Text style={styles.header}>SF222</Text>
        <Text style={styles.description}>Room 610</Text>
        <Text style={styles.description}>12.00 - 15.00</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#00BCD4' }]}>
        <Text style={styles.header}>SF231</Text>
        <Text style={styles.description}>Room 505/1</Text>
        <Text style={styles.description}>12.00 - 15.00</Text>
      </View>
    </View>
  </ScrollView>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'ตารางเรียน' },
    { key: 'second', title: 'ตารางสอบ' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{ backgroundColor: 'white' }}
      activeColor={'black'}
      inactiveColor={'gray'}
      pressColor={'lightgray'}
    // Color for the ripple effect on Android
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  textBoxContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  textBox: {
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    width: '90%',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});