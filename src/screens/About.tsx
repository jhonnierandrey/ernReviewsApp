import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/global";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.preview}>
        <MaterialIcons name="construction" size={60} color="orange" />
        <Text style={styles.previewText}>More information, soon :)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  preview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  previewText: {
    color: "orange",
    fontWeight: "bold",
  },
});

export default About;
