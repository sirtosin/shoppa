import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import image from "../assets/link.webp";
import { Entypo , Ionicons} from "@expo/vector-icons";
const Advert = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: "20px",
        }}
      >
        <View
          style={{
            fontWeight: "600",
            fontSize: 14,
            textTransform: "capitalize",
            margin: 4,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              flex: "1",
              fontSize:"17px"
            }}
          >
            Beauty Insiders Welcome
          </Text>
          < Ionicons
            name="close"
            style={{
              textAlign: "center",
              width: "30px",
              height: "30px",
              backgroundColor: "white",
              borderRadius: "50%",
              padding:2
            }}
            size={24}
            color="black"
          />
        </View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 24,
            textTransform: "capitalize",
            margin: 4,
          }}
        >
          Earn Beauty Insiders points on Ashoppa
        </Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 16,
            margin: 4,
          }}
        >
          Link your Beauty Insider account to earn points for all Sephora
          purchases made on Ashoppa.
        </Text>
        <View
          style={{
            fontWeight: "800",
            fontSize: 18,
            width: "170px",
            color: "white",
            padding: 10,
            borderRadius: "5px",
            backgroundColor: "#0AAD0A",
            textTransform: "capitalize",
            marginVertical: 14,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Entypo
            name="link"
            style={{
              marginRight: 10,
            }}
            size={24}
            color="white"
          />
          Link Account
        </View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: image,
          }}
        />
      </View>
    </View>
  );
};

export default Advert;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height:"700",
    backgroundColor: "#E7F3FF",
    marginVertical: 30,
    marginHorizontal: 40,
    borderRadius: "10px",
    position: "relative",
    zIndex:"-100"
  },
  tinyLogo: {
    width: 230,
    height: 150,
    marginLeft:50
  },
});
