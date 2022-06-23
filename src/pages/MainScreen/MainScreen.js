import React from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import Config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import EpisodeCard from "../../components/EpisodeCard";
import styles from "./MainScreen.style";
const MainScreen = ({ navigation }) => {
  const { loading, data, error } = useFetch(Config.API_MAIN_URL);

  const renderProduct = ({ item }) => (
    <EpisodeCard item={item} onSelect={() => handleProductSelect(item.id)} />
  );

  const handleProductSelect = id => {
    navigation.navigate("Episode", {id});
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.headerImage}
        source={require("../../../assets/rickAndMorty.png")}
      />
      <FlatList
        keyExtractor={(item) => item.id}
        data={data.results}
        renderItem={renderProduct}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
