import React from "react";

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import Markdown from "react-native-simple-markdown";

import { useNavigation } from "react-navigation-hooks";
import actions from "../../actions";
import Spinner from "../spinner";

function Lesson(props) {
  const { title } = props.navigation.state.params;

  const [isLoading, setLoading] = React.useState(false);
  const [card, setCard] = React.useState(null);

  async function fetchLesson(title) {
    setLoading(true);
    const lesson = await actions.classes
      .fetchLesson(title)
      .then(res => setCard(res));
    setLoading(false);

    return lesson;
  }

  React.useEffect(() => {
    fetchLesson(title);
  }, []);

  return !card ? (
    <Spinner />
  ) : (
    <View style={styles.container}>
      {Platform.OS === "android" ? (
        <StatusBar backgroundColor="#7159c1" />
      ) : (
        <View style={styles.statusBar} />
      )}
      <ScrollView style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: card.image
          }}
        />
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{card.title}</Text>
          </View>
          <View style={styles.recomended}>
            <Text>Aulas Recomendadas: </Text>
            {card.recomended &&
              card.recomended.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      fetchLesson("test");
                    }}
                    style={{ marginRight: 5 }}
                  >
                    <Text style={styles.textLink}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
          <View style={styles.text}>
            <Markdown styles={markdownStyles}>
              **React** é uma biblioteca JavaScript para construção de
              interfaces de usuário, React foi pensado desde o início para ser
              adotado gradualmente e **você pode usar menos ou mais da
              biblioteca de acordo com sua necessidade.** #Um Componente Simples
              Os componentes do React implementam um método `render()` que
              recebe os dados de entrada e retornam o que deve ser exibido. Este
              exemplo usa uma sintaxe parecida com XML chamada JSX. Os dados de
              entrada que são passados para o componente podem ser acessados no
              `render()` via `this.props`. **O JSX é opcional e não é necessário
              para usar o React.** Teste o [Babel
              REPL](https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA)
              para ver o código JavaScript bruto produzido pela etapa de
              compilação do JSX. ![enter image description
              here](https://hackernoon.com/hn-images/1*YESBXsE4q3_jZG8mYxueXg.png)
              #Videos de auxilio [Iniciando com ReactJs -
              Rocketseat](https://www.youtube.com/watch?v=7A4UQGrFU9Q&t=75s)
              [https://www.youtube.com/playlist?list=PLBNBxpMAbyhUwX2Nh3kbBaBb_2ImtVjTS](https://www.youtube.com/playlist?list=PLBNBxpMAbyhUwX2Nh3kbBaBb_2ImtVjTS)
            </Markdown>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const markdownStyles = {
  heading1: {
    fontSize: 24,
    color: "purple"
  },
  link: {
    color: "pink"
  },
  mailTo: {
    color: "orange"
  },
  text: {
    color: "#555555"
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonRoutes: {
    backgroundColor: "#333",
    color: "#fff"
  },
  statusBar: {
    height: 35,
    backgroundColor: "#7159c1",
    width: "100%",
    marginBottom: 10
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 10
  },
  textContainer: {
    flex: 1,
    shadowOpacity: 2,
    shadowColor: "#d3d3d3",
    elevation: 12,
    marginTop: 15,
    backgroundColor: "#ffff"
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    paddingTop: 10
  },
  recomended: {
    padding: 20,
    flex: 1,
    flexDirection: "row"
  },
  textLink: {
    color: "#7159c1"
  },
  text: {
    paddingLeft: 20,
    paddingRight: 20
  }
});

export default Lesson;
