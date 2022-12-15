import React from "react";
import { StyleSheet, View, Image } from "react-native";
import LoginButton from "./LoginButton";

interface props {
  item: any;
  addToCart: (item: any) => void;
}

const ListItems = ({ item, addToCart }: props) => {
  const HorizontalLine = () => {
    return <View style={styles.lineStyle} />;
  };

  const StarComp = () => {
    return <View style={styles.starView}></View>;
  };

  return <View style={styles.tileView}></View>;
};

export default ListItems;

const styles = StyleSheet.create({
  selectBtn: {
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  lineStyle: {
    borderBottomWidth: 1,
    margin: 10,
    borderBottomColor: "#CCCDD3",
  },
  CartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  starView: {
    flexDirection: "row",
    alignItems: "center",
  },
  starTextStyle: {
    paddingHorizontal: 10,
    alignSelf: "center",
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "700",
    fontSize: 14,
    fontFamily: "Helvetica-BoldOblique",
  },
  textStyle: {
    padding: 10,
    paddingVertical: 15,
    color: "rgba(0, 0, 0, 0.7)",
    fontWeight: "700",
    fontSize: 14,
    fontFamily: "Helvetica-BoldOblique",
  },
  tileView: {
    height: 300,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  imageStyle: {
    resizeMode: "cover",
    height: 150,
    width: "100%",
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
});
