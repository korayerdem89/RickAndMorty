import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./EpisodeCard.style";

const EpisodeCard = ({ item, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
          <Text style={styles.name}>{item.id}</Text>
          <Text style={styles.air_date}>{item.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EpisodeCard;
