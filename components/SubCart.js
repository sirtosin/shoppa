import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import image from "../assets/x1.webp";
import image2 from "../assets/producA.webp";
import image3 from "../assets/productc.jpg";
import image4 from "../assets/productb.webp";
import tw from "tailwind-react-native-classnames";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
const SubCart = () => {
  const [number, onChangeNumber] = useState(1);
  return (
    <View>
      <View style={tw`flex flex-row items-center justify-between m-9`}>
        <Image
          style={styles.img}
          source={{
            uri: image,
          }}
        />
        <View style={tw`flex-grow ml-9`}>
          <Text
            style={{
              fontSize: "18px",
            }}
          >
            Almond
          </Text>
          <View style={tw`flex flex-row items-center `}>
            <Text style={tw` mr-4`}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={15}
                color="green"
              />
              Preferences
            </Text>
            <Text>
              <Ionicons name="trash-outline" size={15} color="green" />
              Remove
            </Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
        <Text> $37.40</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between m-9`}>
        <Image
          style={styles.img}
          source={{
            uri: image3,
          }}
        />
        <View style={tw`flex-grow ml-9`}>
          <Text
            style={{
              fontSize: "18px",
            }}
          >
            Almond
          </Text>
          <View style={tw`flex flex-row items-center `}>
            <Text style={tw` mr-4`}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={15}
                color="green"
              />
              Preferences
            </Text>
            <Text>
              <Ionicons name="trash-outline" size={15} color="green" />
              Remove
            </Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
        <Text> $37.40</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between m-9`}>
        <Image
          style={styles.img}
          source={{
            uri: image4,
          }}
        />
        <View style={tw`flex-grow ml-9`}>
          <Text
            style={{
              fontSize: "18px",
            }}
          >
            Almond
          </Text>
          <View style={tw`flex flex-row items-center `}>
            <Text style={tw` mr-4`}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={15}
                color="green"
              />
              Preferences
            </Text>
            <Text>
              <Ionicons name="trash-outline" size={15} color="green" />
              Remove
            </Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
        <Text> $37.40</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between m-9`}>
        <Image
          style={styles.img}
          source={{
            uri: image2,
          }}
        />
        <View style={tw`flex-grow ml-9`}>
          <Text
            style={{
              fontSize: "18px",
            }}
          >
            Almond
          </Text>
          <View style={tw`flex flex-row items-center `}>
            <Text style={tw` mr-4`}>
              <MaterialCommunityIcons
                name="pencil-outline"
                size={15}
                color="green"
              />
              Preferences
            </Text>
            <Text>
              <Ionicons name="trash-outline" size={15} color="green" />
              Remove
            </Text>
          </View>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
        <Text> $37.40</Text>
      </View>
    </View>
  );
};

export default SubCart;

const styles = StyleSheet.create({
  img: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  input: {
    width: "40px",
    padding: "8px",
    border: "1px solid gray",
    marginRight: "9px",
  },
});
