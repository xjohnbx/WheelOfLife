import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ListHeaderProps {
  title: string;
};

const ListHeader = ({title}: ListHeaderProps) => {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  headerText: {
    fontFamily: 'Chalkduster',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default ListHeader;