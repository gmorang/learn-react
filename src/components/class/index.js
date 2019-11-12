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

import { useNavigation } from "react-navigation-hooks";

function Lesson(props) {
  const { navigate } = useNavigation();

  return (
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
            uri: "https://miro.medium.com/max/1000/1*GkR93AAlILkmE_3QQf88Ug.png"
          }}
        />
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Titulo</Text>
          </View>
          <View style={styles.recomended}>
            <Text>Aulas Recomendadas: </Text>
            <TouchableOpacity
              onPress={() => {
                alert("clicou");
              }}
            >
              <Text style={styles.textLink}>Get Starded</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.text}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem IpsumLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem IpsumLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem IpsumLorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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
