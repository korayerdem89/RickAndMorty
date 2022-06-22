import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, FlatList, ActivityIndicator } from "react-native";
import Config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";

const MainScreen = () => {
  const { loading, data, error } = useFetch(Config.API_MAIN_URL);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <SafeAreaView>
      <Text>{Config.API_MAIN_URL}</Text>
    </SafeAreaView>
  );
};

export default MainScreen;
