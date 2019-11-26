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
                      fetchLesson(item);
                    }}
                    style={{ marginRight: 5 }}
                  >
                    <Text style={styles.textLink}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>
          <View style={styles.text}>
            <Markdown styles={markdownStyles}>{card.text}</Markdown>
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
