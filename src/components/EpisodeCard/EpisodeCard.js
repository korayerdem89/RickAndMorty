import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./EpisodeCard.style";

const EpisodeCard = ({ item, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.element}>
        <Text style={styles.name}>{item.name}</Text>
          </View>
         <View style={styles.element}>
         <Text style={styles.type}>Name:</Text>
         <Text style={styles.id}>{item.id}</Text>
         </View>
         <View style={styles.element}>
         <Text style={styles.type}>Name:</Text>
         <Text style={styles.id}>{item.id}</Text>
         </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EpisodeCard;
