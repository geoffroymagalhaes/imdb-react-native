import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";

import Logo from "./assets/logo.png";
import Film from "./assets/film.jpg";
import Matthew from "./assets/matthew.jpg";
import Jessica from "./assets/jessica.jpg";
import Mackenzie from "./assets/mackenzie.jpg";
import Anne from "./assets/anne.jpg";

import { AntDesign } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={Logo}
          style={{ maxWidth: "20%", height: "60%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.movie}>
        <Text style={styles.title}>Interstellar</Text>
        <View style={styles.infocontain}>
          <Text style={styles.infomovie}>2014</Text>
          <Text style={styles.infomovie}>PG-13</Text>
          <Text style={styles.infomovie}>2h 49min</Text>
          <Text style={styles.infomovie}>Adventure,Drama,Sci-Fi</Text>
        </View>
        <View style={styles.DescripContain}>
          <Image
            style={styles.movieImg}
            source={Film}
            style={{ width: "35%", height: "80%" }}
            // resizeMode="contain"
          />
          <View style={styles.rightFromImg}>
            <Text style={styles.textDescrip}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival
            </Text>
            <Pressable
              style={styles.addToWatch}
              onPress={() => {
                alert("Added to watch");
              }}
            >
              <Text style={styles.textAddToWatch}>+ ADD TO WATCHLIST</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.containRate}>
          <View style={styles.reviews}>
            <AntDesign
              style={styles.fullStar}
              name="star"
              size={24}
              color="black"
            />
            <Text style={styles.reviewsText1}>8.6/10</Text>
            <Text style={styles.reviewsText2}>1.1M</Text>
          </View>
          <View style={styles.rate}>
            <AntDesign
              style={styles.emptystar}
              name="staro"
              size={24}
              color="black"
            />
            <Text style={styles.rateText}>RATE THIS</Text>
          </View>
          <View style={styles.score}>
            <Text style={styles.scoretext1}>74</Text>
            <Text style={styles.scoretext2}>Metascore</Text>
            <Text style={styles.scoretext3}>46 critic reviews</Text>
          </View>
        </View>
        <View style={styles.actorsContain}>
          <Text style={styles.titleActors}>TOP BILLED Cast</Text>
          <ScrollView style={styles.scrollContainer} horizontal={true}>
            <View style={styles.actorContain}>
              <Image
                style={styles.movieMatthew}
                source={Matthew}
                style={{ width: "100%", height: "100%" }}
                // resizeMode="contain"
              />
              <Text>Hello</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#191919",
    height: "100%",
  },
  header: {
    paddingLeft: "5%",
    justifyContent: "center",
    backgroundColor: "#393939",
    height: "8%",
  },
  movie: {
    backgroundColor: "#212121",
    height: "40%",
    padding: "5%",
  },
  title: {
    color: "white",
    fontSize: "25%",
  },
  infomovie: {
    color: "#787878",
    fontSize: "12%",
  },
  infocontain: {
    marginTop: "2%",
    flexDirection: "row",
    gap: "10",
  },
  DescripContain: {
    marginTop: "6%",
    flexDirection: "row",
    height: "80%",
    gap: "10%",
    alignItems: "flex-start",
  },
  rightFromImg: {
    width: "60%",
    flexDirection: "column",
  },
  textDescrip: {
    color: "white",
  },
  addToWatch: {
    backgroundColor: "#0277BD",
    padding: "2%",
    marginTop: "2%",
    borderRadius: "5%",
  },
  textAddToWatch: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  containRate: {
    backgroundColor: "212121",
    flexDirection: "row",
    width: "100%",
    height: "30%",
  },
  rate: {
    flex: 1,
  },
  rateText: {
    color: "white",
  },

  emptystar: {
    color: "white",
  },
  reviews: {
    flex: 1,
  },
  fullStar: {
    color: "#E6B91E",
  },
  reviewsText1: {
    color: "white",
  },
  reviewsText2: {
    color: "white",
    fontSize: "10%",
  },
  score: {
    flex: 1,
  },
  scoretext1: {
    color: "white",
    backgroundColor: "green",
    padding: "2%",
    width: "20%",
  },
  scoretext2: {
    color: "white",
  },
  scoretext3: {
    color: "white",
    fontSize: "10%",
  },
  actorsContain: {
    height: "100%",
    backgroundColor: "red",
  },
  titleActors: {
    color: "white",
    fontSize: "15%",
    fontWeight: "bold",
  },
  actorContain: {
    backgroundColor: "green",
    width: "200%",
    height: "100%",
  },
  scrollContainer: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
});
