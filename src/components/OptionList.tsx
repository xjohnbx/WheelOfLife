import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import OptionListCell from './OptionListCell';

interface OptionListProps {
  options: string[];
};

const OptionList = ({ options }: OptionListProps) => {

  const renderItem: ListRenderItem<string> = ({item}) => <OptionListCell option={item} />

  return (
    <View style={styles.container}>
      <FlatList 
        data={options}
        renderItem={renderItem}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'blue',
    height: 100,
    flex: 1,
  },
});

export default OptionList;