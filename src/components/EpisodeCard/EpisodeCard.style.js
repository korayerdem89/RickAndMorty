import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor:'#e0e0e0',
    borderColor:"#bdbdbd",
    borderWidth:1,
    margin:10,
    flexDirection:'row'
  },
  title: {
    fontWeight:"bold",
    fontSize:18,
  },
  price: {
    textAlign:'right',
    fontSize:16,
    fontStyle:'italic'
  },
});
