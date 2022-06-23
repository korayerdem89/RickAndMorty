import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS from "../../assets/colors";
export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 5,
    flexDirection: "row",
    borderRadius: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: deviceSize.width / 2.2,
  },
  image: {
    width: deviceSize.width / 2.5,
    resizeMode: "contain",
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: deviceSize.width / 27,
    color: COLORS.secondary,
  },
  species: {
    fontSize: deviceSize.width / 33,
    color:COLORS.primary,
  },
  location:{
    flexDirection:"row",
    alignItems:"center"
  },
  locationName:{
    fontSize:deviceSize.width / 40,
    fontStyle:"italic"
  },

});
