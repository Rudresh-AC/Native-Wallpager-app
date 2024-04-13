import { View, Text, Pressable, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { getImageSize, wp } from "../helpers/common";
import theme from "../constants/theme";

const ImageCard = ({ item, index }) => {
  const getImageHeight = () => {
    let { imageHeight: height, imageWidth: width } = item;
    return { height: getImageSize(height, width) };
  };

  return (
    <Pressable style={styles.imageWrapper}>
      <Image
        style={[styles.image, getImageHeight()]}
        source={item?.webformatURL}
        transition={100}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  imageWrapper: {
    backgroundColor: "e5e5e5",
    borderRadius: "18",
    borderCurve: "continuous",
    overflow: "hidden",
    marginBottom: wp(2),
  },
});

export default ImageCard;
