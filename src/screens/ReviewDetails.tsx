import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../components/Card";
import { globalStyles, images } from "../styles/global";

type ReviewDetailsProps = {
  navigation?: any;
  route: any;
};

const ReviewDetails = ({ route }: ReviewDetailsProps) => {
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.paragraph}>{body}</Text>
        <View style={styles.rating}>
          <Text>Rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
    textAlign: "justify",
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});

export default ReviewDetails;
