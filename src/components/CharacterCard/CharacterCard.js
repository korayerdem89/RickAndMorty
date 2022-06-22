import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./CharacterCard.style";

const CharacterCard = ({ item, onSelect }) => {
  const seasonAndEpisode = item.episode;
  const season = seasonAndEpisode.toString().slice(2, 3);
  let episode = seasonAndEpisode.toString().slice(4, 6);
  

  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.element}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.seasonAndEpisode}>
          <Text style={styles.element}> Season {season}</Text>
          <Text style={styles.element}> / </Text>
          <Text style={styles.element}>Episode {episode} </Text>
        </View>
        <Text style={styles.airDate}> {item.air_date}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CharacterCard;
