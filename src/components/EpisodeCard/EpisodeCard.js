import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./EpisodeCard.style";

const EpisodeCard = ({ item, onSelect }) => {
  const episodeData = item.episode;
  const season = episodeData.toString().slice(2, 3);
  const episode = episodeData.toString().slice(4, 6);
  

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

export default EpisodeCard;
