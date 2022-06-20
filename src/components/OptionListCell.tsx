import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface OptionListCellProps {
  option: string;
}

const OptionListCell = ({option}: OptionListCellProps) => {

  return (
    <View style={styles.container} >
      <Text style={styles.optionText}>{option}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderColor: 'black',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    margin: 5,
  },
  optionText: {
    margin: 2,
    textAlign: 'center',
    fontFamily: 'Chalkduster',
  },
});

export default OptionListCell;