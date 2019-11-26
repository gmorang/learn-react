import React from "react";

import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  FlatList,
  Text
} from "react-native";

import Card from "../card";
import actions from "../../actions";
import store from "../../store";
import Spinner from "../spinner";

function Home() {
  async function fetchClasses() {
    setLoading(true);
    const classes = await actions.classes.fetchLessons();
    setLoading(false);

    return classes;
  }

  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchClasses();
  }, []);

  const { lessons } = store.get();

  return (
    <View style={styles.container}>
      {Platform.OS === "android" ? (
        <StatusBar backgroundColor="#7159c1" />
      ) : (
        <View style={styles.statusBar} />
      )}
      {!lessons ? (
        <Spinner />
      ) : (
        <FlatList
          style={styles.flatList}
          data={lessons}
          renderItem={({ item }) => <Card card={item} />}
          keyExtractor={item => item.id}
        />
      )}
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
  flatList: {
    flex: 1
  }
});

export default Home;
