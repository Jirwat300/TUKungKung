import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, ImageBackground ,Image,ScrollView} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={styles.container}>
    <ScrollView>
      <Image
      source={require('../../public/Talangrian.jpg')} 
      style={styles.image}
      resizeMode="contain"
    />
      <TouchableOpacity style={styles.overlay} activeOpacity={0.7}>
        {/* Any overlay content can go here */}
      </TouchableOpacity>
    
    <View style={[styles.textBox, { backgroundColor: '#FFC107' }]}>
      <Text style={styles.header}>Header 1</Text>
      <Text style={styles.description}>Description 1</Text>
    </View>
    </ScrollView>
    
  </View>
);

const SecondRoute = () => (
  <View style={styles.container}>
    <Image 
      source={require('../../public/Talangsob.jpg')} 
      style={styles.image}
      resizeMode="contain"
    />
      <TouchableOpacity style={styles.overlay} activeOpacity={0.7}>
        {/* Any overlay content can go here */}
      </TouchableOpacity>
    
    <View style={[styles.textBox, { backgroundColor: '#4CAF50' }]}>
      <Text style={styles.header}>Header 2</Text>
      <Text style={styles.description}>Description 2</Text>
    </View>
  </View>
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
      pressColor={'lightgray'} // Color for the ripple effect on Android
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'auto',
    width: 'full',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  textBox: {
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },

  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});
