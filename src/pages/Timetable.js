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
        <Text style={styles.header}>Header 1</Text>
        <Text style={styles.description}>Description 1</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#4CAF50' }]}>
        <Text style={styles.header}>Header 2</Text>
        <Text style={styles.description}>Description 2</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#2196F3' }]}>
        <Text style={styles.header}>Header 3</Text>
        <Text style={styles.description}>Description 3</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#9C27B0' }]}>
        <Text style={styles.header}>Header 4</Text>
        <Text style={styles.description}>Description 4</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#FF9800' }]}>
        <Text style={styles.header}>Header 5</Text>
        <Text style={styles.description}>Description 5</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#673AB7' }]}>
        <Text style={styles.header}>Header 6</Text>
        <Text style={styles.description}>Description 6</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#00BCD4' }]}>
        <Text style={styles.header}>Header 7</Text>
        <Text style={styles.description}>Description 7</Text>
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
        <Text style={styles.header}>Header 1</Text>
        <Text style={styles.description}>Description 1</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#4CAF50' }]}>
        <Text style={styles.header}>Header 2</Text>
        <Text style={styles.description}>Description 2</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#2196F3' }]}>
        <Text style={styles.header}>Header 3</Text>
        <Text style={styles.description}>Description 3</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#9C27B0' }]}>
        <Text style={styles.header}>Header 4</Text>
        <Text style={styles.description}>Description 4</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#FF9800' }]}>
        <Text style={styles.header}>Header 5</Text>
        <Text style={styles.description}>Description 5</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#673AB7' }]}>
        <Text style={styles.header}>Header 6</Text>
        <Text style={styles.description}>Description 6</Text>
      </View>
      <View style={[styles.textBox, { backgroundColor: '#00BCD4' }]}>
        <Text style={styles.header}>Header 7</Text>
        <Text style={styles.description}>Description 7</Text>
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