import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons/";
import { globalStyles } from "../styles/global";
import ReviewForm from "./ReviewForm";
import Card from "../components/Card";
import { ReviewType } from "../types/types";
import FlatButton from "../components/Button";

type HomeProps = {
  navigation: any;
};

const Home = ({ navigation }: HomeProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState<ReviewType[]>([
    {
      title: "Fortnite",
      rating: "3",
      body: "Fortnite is an immensely popular battle royale game that offers fast-paced action and a unique building mechanic. The constant updates and new content keep the game fresh and exciting.",
      key: "1",
    },
    {
      title: "Forza",
      rating: "4",
      body: "Forza is a fantastic racing game series that offers stunning graphics, a wide range of cars and tracks, and realistic driving mechanics. Whether you're a casual racer or a hardcore simulation enthusiast, Forza has something for everyone.",
      key: "2",
    },
    {
      title: "Minecraft",
      rating: "3",
      body: "Minecraft is a creative sandbox game that allows players to build, explore, and survive in a blocky world. Its limitless possibilities for creativity and the sense of accomplishment from crafting your own adventures make it a timeless classic.",
      key: "3",
    },
  ]);

  const addReview = (review: ReviewType) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* <MaterialIcons
        name="add"
        style={styles.modalToggle}
        size={24}
        onPress={() => setModalOpen(true)}
      /> */}

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <FlatButton text="Add review" onPress={() => setModalOpen(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 60,
    marginBottom: 0,
    marginHorizontal: 20,
    alignSelf: "flex-end",
    borderColor: "#ff0000",
    // backgroundColor: "red",
    color: "red",
  },
});

export default Home;
