import { Button, Image, StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import { Entypo } from "@expo/vector-icons";
import image from "../assets/headlogo.png";
import Cart from "./Cart";
import Menu from "./Menu";

const Header = () => {
  const [show, setShow] = useState(false)
  const [menu, setMenu] = useState(false)
  const handleCart = () => {
       setShow((prev) => !prev);
  }
  const handleMenu = () => {
       setMenu((prev) => !prev);
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Entypo name="menu" onPress={handleMenu} size={24} color="black" />
        {menu ? <Menu/>: null}
        <Image
          style={styles.tinyLogo}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Log in </Text>
        <Text style={styles.cart} onPress={handleCart}>
          <Entypo name="shopping-cart" size={17} color="white" />
          <Text
            style={{
              marginLeft: 5,
            }}
          >
            0
          </Text>
        </Text>
        {show ? <Cart /> : null}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    padding: 10,
    backgroundColor: "white",
    boxShadow: "0 2px 2px 0px rgba(0,0,0,0.2)",
    width: "100%",
    position:"relative"
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    flex: 1,
    marginLeft: 3,
    marginTop: 10,
    padding: 10,
    cursor: "pointer",
  },
  tinyLogo: {
    width: 150,
    height: 50,
    marginLeft: 13,
  },
  btn: {
    flexDirection: "row",
    marginRight: 10,
    cursor: "pointer",
    marginTop: 10,
  },
  btnText: {
    fontSize: 22,
    marginRight: 10,
    backgroundColor: "#EFF0F1",
    padding: 8,
    borderRadius: 25,
    fontWeight: "semibold",
  },
  cart: {
    fontSize: 15,
    marginRight: 10,
    backgroundColor: "#099B09",
    color: "white",
    padding: 10,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
