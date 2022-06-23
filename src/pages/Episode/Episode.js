import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  View,
} from "react-native";
import Config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Episode.style";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
const Episode = ({ navigation, route }) => {
  const {id} = route.params;
  const { loading, data, error } = useFetch(Config.API_CHARACTER);

  const results = data.results;

  const filteredResults = results.filter((link) =>
  link.episode.includes(`https://rickandmortyapi.com/api/episode/${id}`)
);

  const handleEpisodeSelect = id => {
    navigation.navigate("Character", {id});
  };

  const renderEpisode = ({ item }) => (
    <CharacterCard item={item} onSelect={() => handleEpisodeSelect(item.id)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.seasonHeader}>Characters on Episode {id}</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={filteredResults}
        renderItem={renderEpisode}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default Episode;
