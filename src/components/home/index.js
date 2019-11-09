import React from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  FlatList,
  Text,
} from 'react-native';

import Card from '../card';
import actions from '../../actions';
import store from '../../store';
import Spinner from '../spinner';

function Home() {
  function fetchClasses() {
    return actions.classes.fetchClasses().then(res => setLessons(res));
  }

  React.useEffect(() => {
    fetchClasses();
  }, []);

  router = () => {
    this.props.navigation.navigate('Class1');
  };

  const [lessons, setLessons] = React.useState(null);

  return !lessons ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      {Platform.OS === 'android' ? (
        <StatusBar backgroundColor="#7159c1" />
      ) : (
        <View style={styles.statusBar} />
      )}
      <FlatList
        style={styles.flatList}
        data={lessons}
        renderItem={({item}) => (
          <Card fetchClasses={fetchClasses} card={item} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonRoutes: {
    backgroundColor: '#333',
    color: '#fff',
  },
  statusBar: {
    height: 35,
    backgroundColor: '#7159c1',
    width: '100%',
    marginBottom: 10,
  },
  flatList: {
    flex: 1,
  },
});

export default Home;
