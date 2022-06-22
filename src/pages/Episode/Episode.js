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

import styles from "./Episode.style";

const Episode = ({ navigation, route }) => {
  const { id } = route.params;
  const { loading, data, error } = useFetch(`${Config.API_MAIN_URL}/${id}`);
  console.log(data.id);

  const renderProduct = ({ item }) => <Text>{item}</Text>;

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{data.id}</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={renderProduct}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default Episode;
