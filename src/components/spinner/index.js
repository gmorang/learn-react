import React from 'react';
import {View, ActivityIndicator} from 'react-native';

function Spinner() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#7159c1" />
    </View>
  );
}

export default Spinner;
