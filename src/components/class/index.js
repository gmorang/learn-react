import React from 'react';

import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {useNavigation} from 'react-navigation-hooks';

function Lesson(props) {
  const {navigate} = useNavigation();

  const lesson = props.navigation.state.params.card;

  return (
    <View style={styles.container}>
      <Text>Routes Test class 1</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('Home');
        }}
        style={styles.buttonRoutes}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRoutes: {
    backgroundColor: '#333',
    color: '#fff',
  },
});

export default Lesson;
