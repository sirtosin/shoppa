import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import image from '../assets/order1.webp'
import image1 from '../assets/order2.webp'
import image3 from '../assets/order3.webp'
import image4 from '../assets/order4.webp'
import image5 from '../assets/order5.webp'
import image6 from '../assets/order6.webp'
const SecondCart = () => {
  return (
    <View>
      <Text>Suggested items to add next</Text>
      <Text>Save time by adding items related to your current order.</Text>
      <View
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          gridGap: "3px",
        }}
      >
        <View>
          <View
            style={{
              marginVertical: 20,
            }}
          >
            <TouchableOpacity>
              <AntDesign
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  position: "absolute",
                  zIndex: "200",
                  left: "5em",
                }}
                name="plus"
                size={27}
                color="black"
              />
            </TouchableOpacity>
            <Image
              style={styles.img}
              source={{
                uri: image,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginVertical: 5,
                fontSize: "16px",
              }}
            >
              $1.56
            </Text>
          </View>
          <Text
            style={{
              marginVertical: 4,
              fontSize: "18px",
            }}
          >
            English Seedless Cucumber
          </Text>
          <Text
            style={{
              fontSize: "16px",
              marginVertical: 8,
            }}
          >
            1 cl
          </Text>
        </View>
        <View>
          <View
            style={{
              marginVertical: 20,
            }}
          >
            <TouchableOpacity>
              <AntDesign
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  position: "absolute",
                  zIndex: "200",
                  left: "5em",
                }}
                name="plus"
                size={27}
                color="black"
              />
            </TouchableOpacity>
            <Image
              style={styles.img}
              source={{
                uri: image1,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginVertical: 5,
                fontSize: "16px",
              }}
            >
              $1.56
            </Text>
          </View>
          <Text
            style={{
              marginVertical: 4,
              fontSize: "18px",
            }}
          >
            English Seedless Cucumber
          </Text>
          <Text
            style={{
              fontSize: "16px",
              marginVertical: 8,
            }}
          >
            1 cl
          </Text>
        </View>
        <View>
          <View
            style={{
              marginVertical: 20,
            }}
          >
            <TouchableOpacity>
              <AntDesign
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  position: "absolute",
                  zIndex: "200",
                  left: "5em",
                }}
                name="plus"
                size={27}
                color="black"
              />
            </TouchableOpacity>
            <Image
              style={styles.img}
              source={{
                uri: image3,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginVertical: 5,
                fontSize: "16px",
              }}
            >
              $1.56
            </Text>
          </View>
          <Text
            style={{
              marginVertical: 4,
              fontSize: "18px",
            }}
          >
            English Seedless Cucumber
          </Text>
          <Text
            style={{
              fontSize: "16px",
              marginVertical: 8,
            }}
          >
            1 cl
          </Text>
        </View>
        <View>
          <View
            style={{
              marginVertical: 20,
            }}
          >
            <TouchableOpacity>
              <AntDesign
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  position: "absolute",
                  zIndex: "200",
                  left: "5em",
                }}
                name="plus"
                size={27}
                color="black"
              />
            </TouchableOpacity>
            <Image
              style={styles.img}
              source={{
                uri: image4,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginVertical: 5,
                fontSize: "16px",
              }}
            >
              $1.56
            </Text>
          </View>
          <Text
            style={{
              marginVertical: 4,
              fontSize: "18px",
            }}
          >
            English Seedless Cucumber
          </Text>
          <Text
            style={{
              fontSize: "16px",
              marginVertical: 8,
            }}
          >
            1 cl
          </Text>
        </View>
        <View>
          <View
            style={{
              marginVertical: 20,
            }}
          >
            <TouchableOpacity>
              <AntDesign
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  position: "absolute",
                  zIndex: "200",
                  left: "5em",
                }}
                name="plus"
                size={27}
                color="black"
              />
            </TouchableOpacity>
            <Image
              style={styles.img}
              source={{
                uri: image5,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginVertical: 5,
                fontSize: "16px",
              }}
            >
              $1.56
            </Text>
          </View>
          <Text
            style={{
              marginVertical: 4,
              fontSize: "18px",
            }}
          >
            English Seedless Cucumber
          </Text>
          <Text
            style={{
              fontSize: "16px",
              marginVertical: 8,
            }}
          >
            1 cl
          </Text>
        </View>
        <View>
          <View
            style={{
              marginVertical: 20,
            }}
          >
            <TouchableOpacity>
              <AntDesign
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px",
                  position: "absolute",
                  zIndex: "200",
                  left: "5em",
                }}
                name="plus"
                size={27}
                color="black"
              />
            </TouchableOpacity>
            <Image
              style={styles.img}
              source={{
                uri: image6,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginVertical: 5,
                fontSize: "16px",
              }}
            >
              $1.56
            </Text>
          </View>
          <Text
            style={{
              marginVertical: 4,
              fontSize: "18px",
            }}
          >
            English Seedless Cucumber
          </Text>
          <Text
            style={{
              fontSize: "16px",
              marginVertical: 8,
            }}
          >
            1 cl
          </Text>
        </View>
      </View>
    </View>
  );
}

export default SecondCart

const styles = StyleSheet.create({
  img: {
    width: "150px",
    height: "150px",
    position: "relative",
    zIndex:"-20"
  },
});

