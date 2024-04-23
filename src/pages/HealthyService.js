import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ScholarCard from '../components/ScholarCard'; // Adjust the import path as necessary

// Example data for the scholar cards
const scholarData = [
  {
    id: 1,
    title: 'สิทธิการรักษาพยาบาล(โรงพยาบาลธรรมศาสตร์)',
    imageUrl: 'https://via.placeholder.com/150',
    onApply: () => console.log('Applied to Hospital'),
  },
  {
    id: 2,
    title: 'Viva City',
    imageUrl: 'https://via.placeholder.com/150',
    onApply: () => console.log('Applied to Viva City'),
  },
  {
    id: 3,
    title: 'Well Being',
    imageUrl: 'https://via.placeholder.com/150',
    onApply: () => console.log('Applied to Well Being'),
  },
];

// test
const HealthyServicePage = () => {
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

export default HealthyServicePage;
