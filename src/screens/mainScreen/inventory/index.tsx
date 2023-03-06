import RNBottomSheet from "@gorhom/bottom-sheet";
import AWS from "aws-sdk";
import { Buffer } from "buffer";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  launchCamera,
  launchImageLibrary,
  CameraOptions,
} from "react-native-image-picker";
import { SvgXml } from "react-native-svg";
import { SwipeListView } from "react-native-swipe-list-view";
import { WhiteBin, whiteCross, whiteTick } from "../../../assets/svg";
import AddItem from "../../../components/AddItem";
import Box from "../../../components/common/Box";
import CTAWithIconOnly from "../../../components/common/CTAWithIconOnly";
import Text from "../../../components/common/Text";
import IamgePickerBottomSheet from "../../../components/ImagePickerBottomSheet";
import { InventoryData, SCREENS } from "../../../utils/Constants";
import firestore from "@react-native-firebase/firestore";
import { useGetUser } from "../../../network/hooks/useGetUser";
import { useSelector } from "react-redux";
import moment from "moment";

interface props {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

let options: CameraOptions = {
  includeBase64: true,
  mediaType: "photo",
  quality: 0.7,
  maxWidth: 300,
  maxHeight: 300,
};

// Initialize the Amazon Cognito credentials provider
AWS.config.region = "us-west-2"; // Region
AWS.config.credentials = new AWS.Credentials(
  "AKIARCS4REBAFOOI2W4A",
  "qBwYcKMLb41xWoSEGy4022WcoPmNT96mAtIU/zmo"
);
const rekognition = new AWS.Rekognition();

console.log("rekognition: ", rekognition);

const Inventory = ({ navigation }: props) => {
  const { user } = useSelector((state: any) => state.reducer.user);
  const [itemsCompleted, setItemsCompleted] = useState(false);
  const addItemRef = useRef<RNBottomSheet>(null);
  const imagePickerRef = useRef<RNBottomSheet>(null);
  const [userInfo, setUserInfo] = useState(null);
  const [allInventories, setAllInventories] = useState(null);
  const { isLoading, refetch, data } = useGetUser(user?.uid);

  useEffect(() => {
    if (data) {
      setUserInfo(data);
      console.log("data: ", data);
    }
  }, [data]);

  useEffect(() => {
    fetchInventory();
  }, [userInfo]);

  const fetchInventory = async () => {
    if (userInfo) {
      console.log("userInfo: ", userInfo?.uid);
      const { uid } = userInfo;
      const snapshot = await firestore()
        .collection("inventory")
        .where("ownerUid", "==", uid)
        .get();
      console.log("snapshot: ", snapshot);
      if (snapshot.docs.length > 0) {
        let allDocs = snapshot.docs.map((doc) => console.log(doc.data()));
        setAllInventories(allDocs);
      }
    }
  };

  const addNewItemFireStore = async () => {
    firestore()
      .collection("Users")
      .add({
        date: moment().format(),
        name: "carrot",
        uid: userInfo?.uid,
        quantity: "1",
        itemType: "vegetable",
        total: "1",
      })
      .then((res) => {
        fetchInventory();
      })
      .catch((error) => {
        console.log("ERROR ADDING USER: ", error);
      });
  };

  const onPressOpenAddItem = () => {
    addItemRef.current?.expand();
  };

  const onPressOpenImagePicker = () => {
    imagePickerRef.current?.expand();
  };

  const onPressCloseImagePicker = () => {
    imagePickerRef.current?.close();
  };

  const launchCameraFunc = async () => {
    const result = await launchCamera(options);
    const { assets } = result;
    console.log("Camera result: ", JSON.stringify(assets[0]?.uri));
    predict(assets[0]?.base64);
  };

  const launchGallerFunc = async () => {
    const result = await launchImageLibrary(options);
    const { assets } = result;
    console.log("Gallery result: ", JSON.stringify(assets[0]?.uri));
    predict(assets[0]?.base64);
  };

  // rekognition stuff
  const predict = async (image: string) => {
    console.log("sending photo to Rekognition: ", image); //debugging
    let buffer = Buffer.from(image, "base64");

    const params = {
      Image: {
        /* required */ Bytes: buffer,
      },
      ProjectVersionArn:
        "arn:aws:rekognition:us-west-2:074282246208:project/life_kitchen/version/life_kitchen.2023-01-17T20.20.07/1673979608483",
    };
    console.log("params: ", params);
    const response = await rekognition
      .detectCustomLabels(params)
      .promise()
      .catch((err) => console.log(err));
    console.log("response: ", response);
    // return response;
  };

  const openPicker = (imageBool: boolean) => {
    if (imageBool) {
      launchCameraFunc();
    } else {
      launchGallerFunc();
    }
  };

  const onPressCloseAddItem = () => addItemRef.current?.close();

  const CookNowButton = ({}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.MealDetails)}
      >
        <Box
          borderRadius={"8"}
          width={Platform.OS === "ios" ? 120 : 120}
          height={48}
          backgroundColor={"green1"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <SvgXml
            height={Platform.OS === "android" ? 20 : 24}
            width={Platform.OS === "android" ? 20 : 24}
            xml={whiteTick}
          />
        </Box>
      </TouchableOpacity>
    );
  };

  const ModifyButton = ({}) => {
    return (
      <TouchableOpacity onPress={onPressOpenAddItem}>
        <Box
          borderRadius={"8"}
          width={Platform.OS === "ios" ? 120 : 120}
          height={48}
          justifyContent={"center"}
          alignItems={"center"}
          borderWidth={1}
          borderColor={"white"}
        >
          <Text
            lineHeight={23}
            numberOfLines={2}
            fontSize={20}
            color={"white"}
            fontWeight={"400"}
            alignSelf={"center"}
          >
            Wrong Item
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  const MeatTile = ({ item }: any) => {
    const { name, icon } = item;

    return (
      <Box
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        marginRight={Platform.OS == "ios" ? "20" : "15"}
      >
        <Box marginTop={"10"}>
          <SvgXml height={25} width={20} xml={icon} />
        </Box>
        <Text
          marginLeft={"5"}
          lineHeight={23}
          numberOfLines={1}
          fontSize={22}
          color={"white"}
          fontWeight={"400"}
          alignSelf={"center"}
          marginTop={"15"}
        >
          {name}
        </Text>
      </Box>
    );
  };

  const InventoryTile = ({ item }: any) => {
    const itemData = item?.item;
    const NewImage = itemData?.Image;

    return (
      <Box
        flexDirection={"row"}
        justifyContent={"space-between"}
        paddingHorizontal={"40"}
        backgroundColor={"black1"}
      >
        <Box>
          <NewImage width={120} height={120} />
        </Box>
        <Box flex={1} paddingHorizontal={"20"}>
          <Box flexDirection={"row"}>
            <Text
              lineHeight={34}
              numberOfLines={1}
              fontSize={30}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
              marginTop={"20"}
            >
              {itemData?.title}
            </Text>
            <Text
              marginHorizontal={"20"}
              lineHeight={23}
              numberOfLines={1}
              fontSize={20}
              color={"white"}
              fontWeight={"400"}
              alignSelf={"center"}
              marginTop={"20"}
            >
              {itemData?.totalGram}
            </Text>
          </Box>
          <Box flexDirection={"column"}>
            <FlatList
              contentContainerStyle={{ paddingBottom: 20, flex: 1 }}
              horizontal={true}
              data={itemData?.ingredients}
              renderItem={({ item }: any) => <MeatTile item={item} />}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={({ item }: any) => (
                <Box
                  paddingVertical={Platform.OS === "android" ? "10" : "20"}
                />
              )}
            />
          </Box>
        </Box>
        <Box marginVertical={"5"} justifyContent={"space-between"}>
          <CookNowButton />
          <ModifyButton />
        </Box>

        {/* <Box
          height={48}
          width={48}
          backgroundColor={"brandGreen"}
          borderRadius={"23"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"center"}
        >
          <ModifyButton />
          <SvgXml height={20} width={20} xml={whiteTick} />
        </Box> */}
      </Box>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <Box flex={1}>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          marginHorizontal={"20"}
        >
          <CTAWithIconOnly
            marginTop={"20"}
            marginBottom={"10"}
            borderRadius={"cta"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"grey6"}
            variant="outline"
            width={50}
            height={50}
            withIcon
            onlyIcon
            icon={() => <SvgXml height={20} width={20} xml={whiteCross} />}
            onPress={() => navigation.goBack()}
          />
          <TouchableOpacity>
            <Box marginTop={"10"}>
              <Text
                lineHeight={40}
                numberOfLines={1}
                fontSize={30}
                color={"white"}
                fontWeight={"400"}
                alignSelf={"center"}
                marginTop={"20"}
              >
                Add Items
              </Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setItemsCompleted(true);
            }}
          >
            <Box marginTop={"10"}>
              <Text
                lineHeight={40}
                numberOfLines={1}
                fontSize={25}
                color={"white"}
                fontWeight={"400"}
                alignSelf={"center"}
                marginTop={"20"}
              >
                Done
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
        <Box
          justifyContent={"space-between"}
          marginTop={"40"}
          marginHorizontal={"40"}
          flexDirection={"row"}
        >
          <Box>
            <Text
              lineHeight={28}
              numberOfLines={1}
              fontSize={25}
              color={"white"}
              fontWeight={"400"}
              marginTop={"20"}
            >
              {itemsCompleted ? "All done?" : "Grocery trip?"}
            </Text>
            <Text
              lineHeight={57}
              numberOfLines={1}
              fontSize={40}
              color={"white"}
              fontWeight={"400"}
            >
              {itemsCompleted
                ? "Review your new items"
                : "Update your inventory"}
            </Text>
          </Box>
          <Box justifyContent={"center"}>
            <TouchableOpacity onPress={() => onPressOpenImagePicker()}>
              <Box
                borderRadius={"8"}
                width={Platform.OS === "ios" ? 120 : 120}
                height={48}
                backgroundColor={"green1"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  lineHeight={20}
                  numberOfLines={1}
                  fontSize={20}
                  color={"white"}
                  fontWeight={"400"}
                  alignSelf={"center"}
                >
                  Add Item
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
        </Box>
        <Box flex={1} marginTop={"40"}>
          <SwipeListView
            data={InventoryData}
            renderItem={(data, rowMap) => <InventoryTile item={data} />}
            renderHiddenItem={(data, rowMap) => (
              <Box flexDirection={"row"} justifyContent={"flex-end"}>
                <TouchableOpacity
                  onPress={() => {
                    console.log("data: ", data);
                  }}
                >
                  <Box
                    width={100}
                    height={150}
                    backgroundColor={"red1"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    paddingBottom={"25"}
                  >
                    <SvgXml
                      height={Platform.OS === "android" ? 20 : 24}
                      width={Platform.OS === "android" ? 20 : 24}
                      xml={WhiteBin}
                    />
                  </Box>
                </TouchableOpacity>
              </Box>
            )}
            leftOpenValue={0}
            rightOpenValue={-100}
            ItemSeparatorComponent={({ item }: any) => (
              <Box paddingVertical={"15"} />
            )}
          />
        </Box>
        {itemsCompleted ? (
          <Box
            flexDirection={"row"}
            height={126}
            justifyContent={"space-between"}
            paddingTop={"10"}
            paddingHorizontal={"30"}
          >
            <TouchableOpacity
              onPress={() => {
                setItemsCompleted(false);
              }}
            >
              <Box
                height={70}
                borderRadius={"8"}
                width={190}
                borderWidth={1}
                borderColor={"white"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  lineHeight={23}
                  numberOfLines={1}
                  fontSize={20}
                  color={"white"}
                  fontWeight={"400"}
                  alignSelf={"center"}
                >
                  Edit
                </Text>
              </Box>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setItemsCompleted(false);
              }}
            >
              <Box
                height={70}
                borderRadius={"8"}
                width={190}
                backgroundColor={"brandGreen"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  lineHeight={23}
                  numberOfLines={1}
                  fontSize={20}
                  color={"white"}
                  fontWeight={"700"}
                  alignSelf={"center"}
                >
                  Complete
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
        ) : null}
      </Box>
      <IamgePickerBottomSheet
        openPicker={openPicker}
        sheetRef={imagePickerRef}
        closeBottomSheet={onPressCloseImagePicker}
      />
      <AddItem sheetRef={addItemRef} closeBottomSheet={onPressCloseAddItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#171717",
  },
  gradientStyle: {
    height: 24,
    width: 24,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Inventory;
