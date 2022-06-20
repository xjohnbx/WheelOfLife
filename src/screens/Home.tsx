import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";
import AddOption from '../components/AddOption';
import OptionList from '../components/OptionList';
import { FLAVORS } from '../OptionData/Buffalo_Wild_Wings';

const HomeScreen = () => {
  const [options, setOptions] = useState<string[]>([]);

  const addOptionToList = (option: string) => {
    setOptions(options => [...options, option]);
  };

  const clearList = () => {
    setOptions([]);
  }

  const loadBuffaloWildWingsList = () => {
    setOptions(FLAVORS);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddOption addOptionHandler={addOptionToList} />
      <OptionList options={options} />

      <TouchableOpacity style={styles.clearButton} onPress={clearList}>
        <Text style={styles.clearButtonText}>Clear List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bDubsButton} onPress={loadBuffaloWildWingsList}>
        <Text style={styles.bDubsButtonText}>Load Buffalo Wild Wings</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  clearButton: {
    height: 50,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    width: "33%",
  },
  clearButtonText: {
    color: 'white',
    fontFamily: 'Chalkduster',
    fontSize: 20,
    textAlign: 'center',
  },
  bDubsButton: {
    height: 30,
    backgroundColor: 'yellow',
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 5,
    margin: 5,

  },
  bDubsButtonText: {
    fontFamily: 'Chalkduster',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;