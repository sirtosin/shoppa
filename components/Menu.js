import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

const Menu = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(prev=> !prev);
  };
  return (
    <>
      {show ? (
        <Text onPress={handleShow}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            top: 0,
            position: "fixed",
            zIndex: "100",
            left: 0,
          }}
        >
          <View
            style={{
              width: "170px",
              height: "600px",
              backgroundColor: "white",
              position: "fixed",
              boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
              zIndex: "100",
              top: 0,
              left: 0,
              padding: "30px",
            }}
          >
            <Text onPress={handleShow} style={styles.btnText}>
              sign up
            </Text>
            <Text
              style={[
                tw`flex flex-row items-center`,
                {
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginVertical: 7,
                },
              ]}
            >
              <MaterialIcons name="logout" size={24} color="black" />
              Log in
            </Text>

            <View style={styles.line}></View>
            <Text
              onPress={handleShow}
              style={[tw`flex flex-row items-center`, styles.btnText2]}
            >
              <AntDesign
                name="home"
                size={24}
                color="white"
                style={{
                  marginRight: "10px",
                }}
              />
              stores
            </Text>
            <Text
              onPress={handleShow}
              style={[
                tw`flex flex-row items-start my-3`,
                {
                  fontSize: "13px",
                },
              ]}
            >
              <Ionicons
                name="settings-sharp"
                style={{
                  marginRight: "10px",
                }}
                size={15}
                color="black"
              />{" "}
              Your account settings
            </Text>
            <Text
              onPress={handleShow}
              style={[
                tw`flex flex-row items-start my-3`,
                {
                  fontSize: "13px",
                },
              ]}
            >
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                style={{
                  marginRight: "10px",
                }}
                size={15}
                color="black"
              />
              Try Instant Access
            </Text>
            <Text
              onPress={handleShow}
              style={{
                width: "150px",
                color: "gray",
                marginVertical: 4,
                fontWeight: "bold",
              }}
            >
              Credits and promos
            </Text>
            <Text
              onPress={handleShow}
              style={[
                tw`flex flex-row items-start my-3`,
                {
                  fontSize: "13px",
                },
              ]}
            >
              <AntDesign
                name="gift"
                style={{
                  marginRight: "10px",
                }}
                size={15}
                color="black"
              />{" "}
              Buy Gift Cards
            </Text>
            <Text
              onPress={handleShow}
              style={[
                tw`flex flex-row items-start my-3`,
                {
                  fontSize: "13px",
                },
              ]}
            >
              <AntDesign
                name="tag"
                style={{
                  marginRight: "10px",
                }}
                size={15}
                color="black"
              />{" "}
              Add Promo or Gift Cards
            </Text>

            <View style={styles.line}></View>
            <Text
              onPress={handleShow}
              style={{
                width: "200px",
                color: "gray",
                marginVertical: 4,
                fontWeight: "bold",
              }}
            >
              Support
            </Text>
            <Text
              onPress={handleShow}
              style={{
                marginTop: "1.6em",
              }}
            >
              <Ionicons
                name="headset-outline"
                style={{
                  marginRight: "10px",
                }}
                size={15}
                color="black"
              />{" "}
              Help Center
            </Text>
          </View>
        </Text>
      ) : null}
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  img: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  btnText: {
    fontSize: 20,
    marginRight: 10,
    backgroundColor: "#099B09",
    padding: ".6em",
    width: "150px",
    marginLeft: "-1em",
    borderRadius: 15,
    fontWeight: "semibold",
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
  },
  btnText2: {
    fontSize: 20,
    marginRight: 10,
    backgroundColor: "#343538",
    marginVertical: 9,
    padding: ".6em",
    width: "150px",
    marginLeft: "-1em",
    borderRadius: 35,
    fontWeight: "semibold",
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
  },
  line: {
    width: "100%",
    height: "1px",
    backgroundColor: "gray",
    marginVertical: 8,
  },
});
