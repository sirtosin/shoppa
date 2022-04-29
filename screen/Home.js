import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Advert from "../components/Advert";
import Category from "../components/Category";
import Hero from "../components/Hero";
import BestSellers from "../components/BestSellers";
import Black from "../components/Black";
import Makeup from "../components/MakeUp";
import Tools from "../components/Tools";
import Clean from "../components/Clean";
import Top from "../components/TopRated";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <Hero />
        <Category />
        <Advert />
        <BestSellers />
        <Black />
        <Top />
        <Clean />
        <Tools />
        <Makeup />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
