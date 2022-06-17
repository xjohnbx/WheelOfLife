import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native";
import AddOption from '../components/AddOption';
import OptionList from '../components/OptionList';

const HomeScreen = () => {
  const [options, setOptions] = useState<string[]>([]);

  const addOptionToList = (option: string) => {
    setOptions(options => [...options, option]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddOption addOptionHandler={addOptionToList} />
      <OptionList options={options} />
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;