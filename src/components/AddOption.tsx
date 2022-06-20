import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface AddOptionProps {
  addOptionHandler: (option: string) => void;
};

const AddOption = ({ addOptionHandler }: AddOptionProps) => {

  const [option, setOption] = useState<string>('');

  const handleAddOptionClick = () => {
    if (option && option !== '') {
      addOptionHandler(option);
    }
    setOption('');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} value={option} onChangeText={optionText => setOption(optionText)}></TextInput>
      <TouchableOpacity style={styles.addButton} onPress={handleAddOptionClick}>
        <Text style={styles.addOptionButtonText}>Add Option</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  addButton: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    margin: 3,
    padding: 2,
  },
  addOptionButtonText: {
    fontFamily: 'Chalkduster',
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    height: 50,
    marginHorizontal: 3,
    marginVertical: 10,
  },
  textInput: {
    flex: 3,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    fontFamily: 'Chalkduster',
    margin: 3,
    padding: 10,
  },
});

export default AddOption;