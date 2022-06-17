import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface OptionListCellProps {
  option: string;
}

const OptionListCell = ({option}: OptionListCellProps) => {

  return (
    <View style={styles.container} >
      <Text>{option}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'orange',
    borderWidth: 1,
    height: 25,
  }
});

export default OptionListCell;