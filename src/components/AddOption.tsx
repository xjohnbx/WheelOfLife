import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

interface AddOptionProps {
  addOptionHandler: (option: string) => void;
};

const AddOption = ({ addOptionHandler }: AddOptionProps) => {

  const [option, setOption] = useState<string>('');

  const handleAddOptionClick = () => {
    addOptionHandler(option);
    setOption('');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} value={option} onChangeText={optionText => setOption(optionText)}></TextInput>
      <TouchableOpacity style={styles.addButton} onPress={handleAddOptionClick}/>
    </View>
  )
};

const styles = StyleSheet.create({
  addButton: {
    borderWidth: 1,
    borderColor: 'green',
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    height: 50,
    borderColor: 'red',
    borderWidth: 1,
  },
  textInput: {
    flex: 3,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default AddOption;