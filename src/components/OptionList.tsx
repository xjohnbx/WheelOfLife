import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';
import ListHeader from './ListHeader';
import OptionListCell from './OptionListCell';

interface OptionListProps {
  options: string[];
};

const OptionList = ({ options }: OptionListProps) => {

  const renderItem: ListRenderItem<string> = ({item}) => <OptionListCell option={item} />

  return (
    <View style={styles.container}>
      <ListHeader title={"Options"} />
      <FlatList 
        columnWrapperStyle={{justifyContent: 'center'}}
        data={options}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    margin: 5,
  },
});

export default OptionList;