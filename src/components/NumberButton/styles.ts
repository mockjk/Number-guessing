import { StyleSheet } from "react-native";
import { height, width } from "../../constants/measures";

const styles = StyleSheet.create({
  Button: {
    width: width * 0.1,
    height: height * 0.1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#686D76",
  },
  NumberText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});

export default styles;