import React from 'react';

import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Class1 extends React.Component {
  router = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Routes Test class 1</Text>
        <TouchableOpacity onPress={this.router} style={styles.buttonRoutes}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
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

export default Class1;
