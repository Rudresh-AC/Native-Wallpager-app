import { View, Text, StyleSheet } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./ImageCard";
import { wp, gridColumnCount } from "../helpers/common";
import { Dimensions } from "react-native";

const ImageGride = ({ images }) => {
  const columns = gridColumnCount();

  const { width: screenWidth } = Dimensions.get("screen");
  const { width: windowWidth } = Dimensions.get("window");

  console.log("Screen width:", screenWidth); // Width of the screen
  console.log("Window width:", windowWidth); // Width of the application window

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={columns}
        initialNumberToRender={1000}
        contentContainerStyle={styles.listContainerStyle}
        renderItem={({ item, index }) => (
          <ImageCard item={item} columns={columns} index={index} />
        )}
        estimatedItemSize={200}
      />
    </View>
  );
  // renderItem={({ item }) => <ImageCard item={item} />}
};

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: wp(100),
  },
  listContainerStyle: {
    paddingHorizontal: wp(4),
  },
});

export default ImageGride;
