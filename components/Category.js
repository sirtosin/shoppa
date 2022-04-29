import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import tw from 'tailwind-react-native-classnames'

const Category = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: "#212529",
          padding: "6px",
          fontSize: "20px",
          color: "white",
          cursor: "pointer",
          borderRadius: "4px",
          marginBottom: "10px",
        }}
      >
        <AntDesign
          name="home"
          size={24}
          color="white"
          style={{
            marginRight: 10,
          }}
        />
        Shop
      </Text>
      <Text style={styles.text}>Hair Care</Text>
      <Text style={styles.text}>Fragnace</Text>
      <Text style={styles.text}>Bath and Body</Text>
      <Text style={styles.text}>Tools and Brushes</Text>
      <Text style={styles.text}>Value & Gift sets</Text>
      <Text style={styles.text}>Other Goods</Text>
      <Text style={styles.text}>Skin Care</Text>
      <Text style={styles.text}>Sales</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    height: "400px",
    backgroundColor: "white",
    boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
    marginTop: "10px",
    marginBottom: "40px",
    position: "relative",
    zIndex: "-100",
  },
  text: {
    color: "#212529",
    fontSize: "17px",
    margin: 5,
    marginBottom: "10px",
    cursor: "pointer",
  },
});
