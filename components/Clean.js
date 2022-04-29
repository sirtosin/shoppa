import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import image from "../assets/arrow.svg";
import image2 from "../assets/arrowBack.svg";
import ProductCard from "./ProductCard";
import { data2 } from "./data";
const Clean = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(data2);
  }, []);

  return (
    <View
      style={{
        padding: "50px",
      }}
    >
      <Text
        style={{
          fontWeight: "700",
          fontSize: "25px",
        }}
      >
        Clean at Sephora
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: "20px",
          marginVertical: 20,
        }}
      >
        <Text
          style={{
            fontSize: "18px",
            marginRight: "10px",
            padding: "3px",
          }}
        >
          View more
        </Text>
        <TouchableOpacity>
          <Image
            style={styles.tinyLogo2}
            source={{
              uri: image2,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.tinyLogo2}
            source={{
              uri: image,
            }}
          />
        </TouchableOpacity>
      </View>
      {item ? item.map((data) => <ProductCard data={data} />) : null}
    </View>
  );
};

export default Clean;

const styles = StyleSheet.create({
  tinyLogo2: {
    width: 20,
    height: 20,
  },
});
