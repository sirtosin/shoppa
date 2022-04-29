import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const ProductCard = ({ data }) => {
  return (
    <View key={data.id}>
      <View
        style={{
          width: "300px",
          height: "300px",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 20,
          border: "1px solid whitesmoke",
        }}
      >
        <Image
          style={styles.tinyLogo2}
          source={{
            uri: data.img,
          }}
        />
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid whitesmoke",
              borderRadius: "20px",
              padding: 7,
              backgroundColor: "white",
              boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
              position: "relative",
              top: "-11em",
              right: "-5em",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            <AntDesign name="plus" size={24} color="black" />
            Add
          </View>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        ${data.price}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: "12px",
        }}
      >
        {data.title}
      </Text>
      <Text
        style={{
          fontSize: "16px",
          marginVertical: 4,
        }}
      >
        {data.desc}
      </Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  tinyLogo2: {
    width: 200,
    height: 200,
  },
});
