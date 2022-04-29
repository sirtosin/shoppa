import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import image from "../assets/t.webp";
import image1 from "../assets/check.svg";
import SubCart from "./SubCart";
import image5 from "../assets/x1.webp";
import image2 from "../assets/producA.webp";
import image3 from "../assets/productc.jpg";
import image4 from "../assets/productb.webp";
import SecondCart from "./SecondCart";
const Cart = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      {show ? (
        <View
          style={{
            width: "450px",
            height: "2100px",
            backgroundColor: "white",
            position: "absolute",
            boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
            zIndex: "100",
            top: 0,
            right: 0,
            marginLeft: "100px",
            padding: "30px",
          }}
        >
          <View style={tw`flex flex-row items-center`}>
            <View style={tw`flex-1`}>
              <Text
                style={{
                  fontSize: "20px",
                }}
              >
                Personal Target Cart
              </Text>
              <Text
                style={{
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                Shopping in 94105
              </Text>
            </View>
            <Text
              style={[
                tw`flex flex-row items-center justify-center p-2 rounded text-red-500`,
                {
                  border: "1px solid red",
                  fontSize: "20px",
                },
              ]}
              onPress={handleShow}
            >
              <Ionicons name="close" size={24} color="red" />
              close
            </Text>
          </View>
          <View
            style={[
              tw`mt-9 bg-white shadow-lg flex flex-row items-center justify-around rounded`,
              {
                width: "400px",
                height: "120px",
              },
            ]}
          >
            <Image
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
              source={{
                uri: image,
              }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: "19px",
                }}
              >
                Target
              </Text>
              <Text
                style={{
                  marginVertical: 7,
                  opacity: 0.7,
                  fontSize: "16px",
                }}
              >
                Next delivery: Today by 11 a.m
              </Text>
              <Text style={tw`flex flex-row items-center justify-center`}>
                <Image
                  style={{
                    width: "15px",
                    height: "15px",
                  }}
                  source={{
                    uri: image1,
                  }}
                />
                <Text
                  style={{
                    color: "blue",
                    marginRight: 35,
                  }}
                >
                  100% satisfaction guarantee
                </Text>
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              $37.40
            </Text>
          </View>
          <SubCart />
          <View>
            <Text
              style={{
                marginVertical: 25,
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              Your other shopping carts
            </Text>
            <View style={tw`flex flex-row items-center justify-around`}>
              <Image
                style={styles.img}
                source={{
                  uri: image,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    marginTop: "-15px",
                  }}
                >
                  Target
                </Text>
                <View style={tw`flex flex-row items-center justify-around`}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: image2,
                    }}
                  />
                  <Image
                    style={styles.img}
                    source={{
                      uri: image5,
                    }}
                  />
                  <Image
                    style={styles.img}
                    source={{
                      uri: image4,
                    }}
                  />
                  <Image
                    style={styles.img}
                    source={{
                      uri: image3,
                    }}
                  />
                </View>
              </View>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
            <View style={tw`flex flex-row items-center justify-around my-10`}>
              <Image
                style={styles.img}
                source={{
                  uri: image,
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    marginTop: "-15px",
                  }}
                >
                  Target
                </Text>
                <View style={tw`flex flex-row items-center justify-around`}>
                  <Image
                    style={styles.img}
                    source={{
                      uri: image2,
                    }}
                  />
                  <Image
                    style={styles.img}
                    source={{
                      uri: image5,
                    }}
                  />
                  <Image
                    style={styles.img}
                    source={{
                      uri: image4,
                    }}
                  />
                  <Image
                    style={styles.img}
                    source={{
                      uri: image3,
                    }}
                  />
                </View>
              </View>
              <Feather name="arrow-right" size={24} color="black" />
            </View>
          </View>
          <SecondCart />
          <Text
            style={{
              backgroundColor: "#099B09",
              padding: "1em",
              borderRadius: "10px",
              marginVertical: 8,
              color: "white",
              textTransform: "capitalize",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            <FontAwesome
              name="money"
              size={24}
              style={{
                marginRight: 10,
              }}
              color="white"
            />
            go to checkout
            <Text
              style={{
                position: "absolute",
                marginLeft: "3em",
                backgroundColor: "#008000",
                padding: 2,
              }}
            >
              $92.50
            </Text>
          </Text>
        </View>
      ) : null}
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  img: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
});
