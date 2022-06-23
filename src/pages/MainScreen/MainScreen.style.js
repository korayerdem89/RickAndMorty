import { StyleSheet, Dimensions } from "react-native";
import COLORS from "../../assets/colors";
const deviceSize = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    backgroundColor:COLORS.secondary,
    borderColor:"#bdbdbd",
    flex:1
  },
  headerImage:{
    width:deviceSize.width,
    resizeMode:"contain",
    minHeight:150,
    flex:0.2,
    backgroundColor:"black",
    alignSelf:"center"
  },
  header:{
    alignSelf:"center",
    fontSize:30,
    fontWeight:"bold",
    marginVertical:10,
  },
  flatList:{
    marginTop:10
  }
});
