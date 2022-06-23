import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import styles from "./CharacterCard.style";

const CharacterCard = ({ item, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>      
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CharacterCard;
