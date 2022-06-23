import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS from "../../assets/colors";
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    margin: 5,
    flexDirection: "row",
    borderRadius: 5,
    flexDirection: "column",
    alignItems:"center",
    justifyContent: 'center',
    padding:4,
  },
  name: {
    color:"white",
 fontWeight:"bold",
 fontSize:deviceSize.width / 22,
  },
  seasonAndEpisode: {
    flexDirection:"row"
  },
  airDate:{
    fontStyle:"italic",
    fontSize: 13
  }
});
