import * as React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "react-navigation-hooks";

function Card({ card }) {
  const { navigate } = useNavigation();

  return (
    <View style={styles.cardView}>
      <View style={styles.titleView}>
        <Text style={styles.textTitle}>{card.title}</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.imgView}>
        <Image style={styles.img} source={{ uri: card.image }} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigate("Class", { card });
        }}
      >
        <Text style={styles.textButton}>Ver Mais</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    borderRadius: 15,
    shadowOpacity: 1,
    shadowColor: "#d3d3d3",
    elevation: 12,
    marginBottom: 15,
    marginTop: 15,
    alignSelf: "center",
    borderWidth: 0.2,
    borderColor: "#d3d3d3",
    padding: 10
  },
  text: {
    color: "#fff"
  },
  titleView: {
    height: 35,
    width: "100%"
  },
  textTitle: {
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#d3d3d3"
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: "#7159c1",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  textButton: { color: "#fff", fontWeight: "300" },
  img: {
    width: 360,
    height: 150,
    borderRadius: 10
  },
  imgView: {
    paddingTop: 10,
    paddingBottom: 15
  }
});
export default Card;
