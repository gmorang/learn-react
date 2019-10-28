import React from 'react';

import {StyleSheet, View, StatusBar, Platform, FlatList} from 'react-native';

import Card from '../card';

const cardsTest = [
  {
    id: 1,
    title: 'Aula inicial',
    description: 'Iniciando no React',
    img: 'https://miro.medium.com/max/1000/1*GkR93AAlILkmE_3QQf88Ug.png',
  },

  {
    id: 2,
    title: 'React Hooks',
    description: 'Aprendendo a usar o react hooks',
    img: 'https://miro.medium.com/max/1000/1*GkR93AAlILkmE_3QQf88Ug.png',
  },

  {
    id: 3,
    title: 'JavaScript Basico',
    description: 'Dicas de JavaScript',
    img:
      'https://facebook.github.io/react-native/blog/assets/oss-roadmap-hero.jpg',
  },

  {
    id: 4,
    title: 'Dicas de React-native',
    description: 'Iniciando no React-native',
    img:
      'https://mestredocodigo.com.br/wp-content/uploads/2017/07/iniciando-com-react.png',
  },
  {
    id: 5,
    title: 'Biblioteacas de Estilos',
    description: 'alguma das mais utilizadas libs de estilos',
    img:
      'https://mestredocodigo.com.br/wp-content/uploads/2017/07/iniciando-com-react.png',
  },
];

function Home() {
  const [cards, setCards] = React.useState(cardsTest);

  router = () => {
    this.props.navigation.navigate('Class1');
  };
  return (
    <View style={styles.container}>
      {Platform.OS === 'android' ? (
        <StatusBar backgroundColor="#7159c1" />
      ) : (
        <View style={styles.statusBar} />
      )}
      <FlatList
        style={styles.flatList}
        data={cards}
        renderItem={({item}) => <Card card={item} />}
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
