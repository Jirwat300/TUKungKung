import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ScholarCard from '../components/ScholarCard'; // Adjust the import path as necessary

// Example data for the scholar cards
const scholarData = [
  {
    id: 1,
    title: 'หอเเพทย์',
    imageUrl: require('../../public/Zone doctor.jpg'),
    onApply: () => console.log('Applied to hornaii A'),
  },
  {
    id: 2,
    title: 'Zone B',
    imageUrl: require('../../public/Zone B.jpg'),
    onApply: () => console.log('Applied to hornaii B'),
  },
  {
    id: 3,
    title: 'Zone C',
    imageUrl: require('../../public/Zone C.jpg'),
    onApply: () => console.log('Applied to hornaii C'),
  },
  {
    id: 4,
    title: 'Zone F',
    imageUrl: require('../../public/Zone F.jpg'),
    onApply: () => console.log('Applied to hornaii D'),
  },
  {
    id: 5,
    title: 'Zone M',
    imageUrl: require('../../public/Zone M.jpg'),
    onApply: () => console.log('Applied to hornaii D'),
  },
  // Add more items as needed
];

// test
const HornaiiPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {scholarData.map((scholar) => (
        <ScholarCard
          key={scholar.id}
          title={scholar.title}
          imageUrl={scholar.imageUrl}
          onApply={scholar.onApply}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default HornaiiPage;
