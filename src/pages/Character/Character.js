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
// import styles from "./Character.style";

const Character = ({route} ) => {
 const {id} = route.params;
  return (
    <SafeAreaView>
      <Text>Character {id}</Text>
 
    </SafeAreaView>
  );
};

export default Character;
