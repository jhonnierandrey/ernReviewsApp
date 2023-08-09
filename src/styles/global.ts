import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export const images: any = {
  ratings: {
    "1": require("../../assets/images/rating-1.png"),
    "2": require("../../assets/images/rating-2.png"),
    "3": require("../../assets/images/rating-3.png"),
    "4": require("../../assets/images/rating-4.png"),
    "5": require("../../assets/images/rating-5.png"),
  },
};
