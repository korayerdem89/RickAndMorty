import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../assets/colors";
const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    backgroundColor:"black",
    flex:1
  },
 description:{
  flexDirection:"row",
  alignItems:"center",
  paddingBottom:20,
  backgroundColor:"#e6e6e6",
  justifyContent:"center"
 },
 header:{
  paddingHorizontal:5,
  fontSize:25
 },
 seasonHeader:{
  paddingVertical:5,
  backgroundColor:COLORS.secondary,
  fontStyle:"italic",
  textAlign:"right",
  paddingRight:10,
  fontWeight:"bold"
 },
  flatList:{
    marginTop:20,
    alignSelf:"center"
  }
});
