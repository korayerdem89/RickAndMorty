import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./CharacterCard.style";
import { Entypo } from '@expo/vector-icons';
import COLORS from "../../assets/colors";
 
const CharacterInfo = ({ item, onSelect, value }) => {
  const id = value;
  if (item.episode.includes(`https://rickandmortyapi.com/api/episode/${id}`)) {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.location}>
        <Entypo name="location-pin" size={15} color={COLORS.primary}/>
        <Text style={styles.locationName}>{item.location.name}</Text>    
          </View>      
       
      </View>
    </TouchableOpacity>
  );
  } else { return null}
};

export default CharacterInfo;
