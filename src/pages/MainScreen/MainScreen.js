import React from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import Config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import EpisodeCard from "../../components/EpisodeCard"

const MainScreen = () => {
  const { loading, data, error } = useFetch(Config.API_MAIN_URL);


  const renderProduct = ({ item }) => (
    <EpisodeCard item={item}  />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <SafeAreaView>
      <FlatList keyExtractor={item => item.id} data={data.results} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default MainScreen;
