import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ScholarCard from '../components/ScholarCard'; 

const bookingOptions = [
  {
    id: 1,
    title: 'Booking Study Room',
    imageUrl: require('../../public/Library.png'), // Use require here
    onBook: () => console.log('Booked Study Room'),
  },
  {
    id: 2,
    title: 'Booking Court',
    imageUrl: require('../../public/Court.png'), // Use require here
    onBook: () => console.log('Booked Court'),
  }
];

const Bookingpage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {bookingOptions.map((option) => (
        <ScholarCard
          key={option.id}
          title={option.title}
          imageUrl={option.imageUrl}
          onBook={option.onBook}
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

export default Bookingpage;
