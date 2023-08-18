import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const CustomPicker = ({data, selectedValue, setSelectedValue}) => {
  return (
    <View>
      <Picker
        placeholder='select value'
        selectedValue={selectedValue}
        onValueChange={itemValue => setSelectedValue(itemValue)}>
        {data?.map(item => (
          <Picker.Item key={item.id} label={item.name} value={item.id} />
        ))}
      </Picker>
    </View>
  );
};

export default CustomPicker;
