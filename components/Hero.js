import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import image from "../assets/sepho.webp";
import image1 from "../assets/check.svg";
import image2 from "../assets/arrow.svg";
const Hero = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: image,
        }}
      />
      <Text
        style={{
          fontWeight: "600",
          fontSize: 18,
          textTransform: "capitalize",
          margin: 4,
        }}
      >
        Sephora
      </Text>
      <View style={styles.text}>
        Everyday store prices
        <Image
          style={styles.tinyLogo2}
          source={{
            uri: image2,
          }}
        />
      </View>
      <View style={styles.text}>
        <Image
          style={styles.tinyLogo1}
          source={{
            uri: image1,
          }}
        />
        <Text
          style={{
            color: "blue",
          }}
        >
          100% satisfaction guarantee
        </Text>
        <Image
          style={styles.tinyLogo2}
          source={{
            uri: image2,
          }}
        />
      </View>
      <View style={styles.text}>
        Safe with Sephora Beauty insider
        <Image
          style={styles.tinyLogo2}
          source={{
            uri: image2,
          }}
        />
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 30,
    position: "relative",
    zIndex: "-100",
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  tinyLogo1: {
    width: 15,
    height: 15,
  },
  tinyLogo2: {
    width: 10,
    height: 10,
  },
  text: {
    flexDirection: "row",
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: "95%",
    height: "1px",
    backgroundColor: "gray",
    marginTop: 15,
  },
});
