import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");
import COLORS from "../../assets/colors";
export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.primarysoft,
    margin: 5,
    flexDirection: "row",
    borderRadius: 5,
    flexDirection: "column",
    alignItems:"center",
    justifyContent: 'center',
  },
  element: {
    flexDirection: "row",

  },
  type: {
    marginHorizontal: 5,
  },
  name: {
 fontWeight:"bold",
 fontSize:20
  },
});
