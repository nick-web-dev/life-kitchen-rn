import React from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Image, SvgXml } from "react-native-svg";
import {
  boldCrossIcon,
  greenLeave,
  nutritionIcon,
  pantryIcon,
  playIcon,
  transparentTick,
  twoArrows,
  yellowTrolly,
} from "../../../assets/svg";
import AvatarIcon1 from "../../../assets/svg/AvatarIcon1.svg";
import AvatarIcon2 from "../../../assets/svg/AvatarIcon2.svg";
import MealIcon2 from "../../../assets/svg/mealIcon4.svg";
import MealIcon7 from "../../../assets/svg/mealIcon7.svg";
import MealIcon8 from "../../../assets/svg/mealIcon10.svg";
import FryPan from "../../../assets/svg/fryPan.svg";
import Box from "../../../components/common/Box";
import Text from "../../../components/common/Text";
import { IngredientsData, ReplacementData } from "../../../utils/Constants";

interface props {
  navigation: any;
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MealDetails = ({ navigation }: props) => {
  const CrossButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Box
          height={32}
          width={32}
          backgroundColor={"white"}
          borderRadius={"35"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <SvgXml height={16} width={16} xml={boldCrossIcon} />
        </Box>
      </TouchableOpacity>
    );
  };

  const BarTextTile = ({ quantity, title, icon }) => {
    return (
      <Box>
        <Box flexDirection={"row"} paddingBottom={"8"}>
          {icon ? (
            <Box marginRight={"5"}>
              <SvgXml height={25} width={25} xml={greenLeave} />
            </Box>
          ) : null}
          <Text
            lineHeight={28}
            numberOfLines={1}
            fontSize={24}
            color={"white"}
            fontWeight={"700"}
            textAlign={"left"}
          >
            {quantity}
          </Text>
        </Box>
        <Text
          lineHeight={16}
          numberOfLines={1}
          fontSize={14}
          color={"white"}
          fontWeight={"400"}
          textAlign={"left"}
        >
          {title}
        </Text>
      </Box>
    );
  };

  const BarView = () => {
    return (
      <Box
        position={"absolute"}
        borderRadius={"23"}
        width={Platform.OS === "android" ? 710 : 777}
        height={104}
        backgroundColor={"grey6"}
        alignItems={"center"}
        alignSelf={"center"}
        bottom={Platform.OS === "android" ? -50 : -50}
        flexDirection={"row"}
        paddingHorizontal={"20"}
      >
        <FryPan height={40} width={40} />
        <Box paddingHorizontal={"5"} />
        <BarTextTile quantity={"45 min"} title={"Cook time"} icon={false} />
        <Box paddingHorizontal={"20"} />
        <Box borderWidth={0.5} height={23} borderColor={"white"} />
        <Box paddingHorizontal={"20"} />
        <BarTextTile quantity={"Low"} title={"Effort level"} icon={false} />
        <Box paddingHorizontal={"20"} />
        <BarTextTile quantity={"Low"} title={"Skill level"} icon={false} />
        <Box paddingHorizontal={"20"} />
        <BarTextTile quantity={"$5.67"} title={"Per serving"} icon={false} />
        <Box paddingHorizontal={"20"} />
        <BarTextTile quantity={"65"} title={"Healthy rating"} icon={true} />
      </Box>
    );
  };

  const ImageView = () => {
    return (
      <>
        {Platform.OS === "android" ? (
          <Box alignItems={"center"} justifyContent={"center"} height={400}>
            <MealIcon2 height={windowHeight} />
            <Box
              position={"absolute"}
              left={25}
              top={Platform.OS === "android" ? 30 : 10}
            >
              <Box flexDirection={"row"}>
                <Box position={"absolute"} left={20}>
                  <AvatarIcon1 width={34} height={34} />
                </Box>
                <Box>
                  <AvatarIcon2 width={34} height={34} />
                </Box>
              </Box>
            </Box>
            <Box
              position={"absolute"}
              left={25}
              bottom={Platform.OS === "android" ? 80 : 100}
            >
              <Box>
                <Text
                  lineHeight={28}
                  numberOfLines={1}
                  fontSize={24}
                  color={"white"}
                  fontWeight={"400"}
                  textAlign={"left"}
                >
                  Dinner - Monday 20th June
                </Text>
                <Text
                  lineHeight={56}
                  numberOfLines={1}
                  fontSize={48}
                  color={"white"}
                  fontWeight={"700"}
                  textAlign={"left"}
                >
                  Spaghetti Bolognese
                </Text>
              </Box>
            </Box>
            <BarView />
            <Box
              position={"absolute"}
              top={Platform.OS === "android" ? 30 : 10}
              right={20}
            >
              <CrossButton />
            </Box>
          </Box>
        ) : (
          <Box
            width={835}
            height={400}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <MealIcon2 height={windowHeight} />
            <Box
              position={"absolute"}
              left={25}
              top={Platform.OS === "android" ? 30 : 10}
            >
              <Box flexDirection={"row"}>
                <Box position={"absolute"} left={20}>
                  <AvatarIcon1 width={34} height={34} />
                </Box>
                <Box>
                  <AvatarIcon2 width={34} height={34} />
                </Box>
              </Box>
            </Box>
            <Box
              position={"absolute"}
              left={25}
              bottom={Platform.OS === "android" ? 0 : 80}
            >
              <Box>
                <Text
                  lineHeight={28}
                  numberOfLines={1}
                  fontSize={24}
                  color={"white"}
                  fontWeight={"400"}
                  textAlign={"left"}
                >
                  Dinner - Monday 20th June
                </Text>
                <Text
                  lineHeight={56}
                  numberOfLines={1}
                  fontSize={48}
                  color={"white"}
                  fontWeight={"700"}
                  textAlign={"left"}
                >
                  Spaghetti Bolognese
                </Text>
              </Box>
            </Box>
            <BarView />
            <Box
              position={"absolute"}
              top={Platform.OS === "android" ? 30 : 10}
              right={35}
            >
              <CrossButton />
            </Box>
          </Box>
        )}
      </>
    );
  };

  const DoneTile = ({ label, description }) => {
    return (
      <Box flexDirection={"row"}>
        <Box>
          <LinearGradient
            colors={["#36DE51", "#05B68B"]}
            style={styles.gradientStyle}
          >
            <SvgXml height={14} width={14} xml={transparentTick} />
          </LinearGradient>
        </Box>
        <Box marginLeft={"10"}>
          <Text
            lineHeight={23}
            numberOfLines={1}
            fontSize={20}
            color={"white"}
            fontWeight={"700"}
            marginBottom={"10"}
          >
            {label}
          </Text>
          <Text
            lineHeight={14}
            numberOfLines={1}
            fontSize={12}
            color={"white"}
            fontWeight={"400"}
          >
            {description}
          </Text>
        </Box>
      </Box>
    );
  };

  const CookNowButton = ({ label, icon }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(SCREENS.MealDetails)}
      >
        <Box
          borderRadius={"16"}
          width={Platform.OS === "ios" ? 222 : 200}
          height={44}
          backgroundColor={"green1"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <SvgXml height={16} width={16} xml={icon} />
          <Text
            lineHeight={20}
            numberOfLines={2}
            fontSize={16}
            color={"white"}
            fontWeight={"700"}
            alignSelf={"center"}
            marginLeft={"10"}
          >
            {label}
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  const ModifyButton = ({ label, icon }) => {
    return (
      <TouchableOpacity>
        <Box
          borderRadius={"16"}
          width={Platform.OS === "ios" ? 222 : 200}
          height={44}
          backgroundColor={"lightGrey"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"row"}
        >
          <SvgXml height={16} width={16} xml={icon} />
          <Text
            lineHeight={20}
            numberOfLines={2}
            fontSize={16}
            color={"black"}
            fontWeight={"700"}
            alignSelf={"center"}
            marginLeft={"10"}
          >
            {label}
          </Text>
        </Box>
      </TouchableOpacity>
    );
  };

  const NutritionBar = () => {
    return (
      <Box
        borderRadius={"16"}
        height={56}
        flexDirection={"row"}
        backgroundColor={"grey6"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingVertical={"10"}
        paddingHorizontal={"5"}
        marginHorizontal={"15"}
      >
        <ModifyButton label={"Nutrition stats"} icon={nutritionIcon} />
        <ModifyButton label={"Change meal"} icon={twoArrows} />
        <CookNowButton label={"Start Cooking"} icon={playIcon} />
      </Box>
    );
  };

  const MainView = () => {
    return (
      <>
        {ImageView()}
        <Box
          flex={0.7}
          paddingHorizontal={"30"}
          paddingTop={Platform.OS === "android" ? "50" : "50"}
        >
          <Box marginTop={"10"}>
            <Text
              lineHeight={37}
              fontSize={32}
              color={"white"}
              fontWeight={"700"}
            >
              Why this meal
            </Text>
          </Box>
          <Box
            marginVertical={"20"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <DoneTile
              label={"Good source of protein"}
              description={"You requested higher protein meals"}
            />
            <DoneTile
              label={"High in iron"}
              description={"2 family members are iron deficient"}
            />
            <DoneTile
              label={"Rich in B vitamins"}
              description={"Maintain healthy skin cells"}
            />
          </Box>
          <NutritionBar />
          <Ingredients />
        </Box>
      </>
    );
  };

  const IngredientTile = ({ item }) => {
    return (
      <Box height={120} flexDirection={"row"} borderRadius={"16"}>
        <Box borderRadius={"16"}>
          <MealIcon7 height={116} width={166} />
        </Box>
        <Box marginLeft={"15"} justifyContent={"space-around"}>
          <Box>
            <Text
              lineHeight={23}
              numberOfLines={1}
              fontSize={20}
              color={"white"}
              fontWeight={"700"}
              marginBottom={"10"}
            >
              {item?.title}
            </Text>
            {item?.pantry ? (
              <Text
                lineHeight={14}
                numberOfLines={1}
                fontSize={14}
                color={"white"}
                fontWeight={"400"}
              >
                {item?.gram}
              </Text>
            ) : (
              <Text
                lineHeight={14}
                numberOfLines={1}
                fontSize={14}
                color={"white"}
                fontWeight={"400"}
              >
                {item?.gram} / {item?.price}
              </Text>
            )}
          </Box>
          <Box flexDirection={"row"}>
            {item?.pantry ? (
              <SvgXml height={20} width={20} xml={pantryIcon} />
            ) : (
              <SvgXml height={20} width={20} xml={yellowTrolly} />
            )}
            <Text
              marginLeft={"10"}
              lineHeight={16}
              numberOfLines={1}
              fontSize={14}
              color={"white"}
              fontWeight={"600"}
              alignSelf={"center"}
            >
              {item?.purchaseText}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };

  const ReplacementTile = ({ item }) => {
    return (
      <Box
        height={120}
        flexDirection={"row"}
        borderRadius={"16"}
        alignItems={"center"}
      >
        <TouchableOpacity>
          <Box
            height={24}
            width={24}
            backgroundColor={"yellow1"}
            borderRadius={"8"}
            justifyContent={"center"}
            alignItems={"center"}
            marginRight={"20"}
          >
            <SvgXml height={12} width={12} xml={twoArrows} />
          </Box>
        </TouchableOpacity>
        <Box>
          <MealIcon8 height={116} width={166} />
          <Box position={"absolute"} top={10} left={10}>
            <TouchableOpacity>
              <Box
                height={24}
                width={88}
                backgroundColor={"green1"}
                borderRadius={"8"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text
                  lineHeight={12}
                  fontSize={12}
                  color={"white"}
                  fontWeight={"700"}
                  alignSelf={"center"}
                >
                  Go healthier
                </Text>
              </Box>
            </TouchableOpacity>
          </Box>
          <Box position={"absolute"} bottom={10} left={0}>
            <Text
              lineHeight={14}
              numberOfLines={2}
              fontSize={14}
              color={"white"}
              fontWeight={"700"}
              paddingHorizontal={"10"}
              paddingRight={"20"}
            >
              {item?.title}
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };

  const Ingredients = () => {
    return (
      <Box
        height={673}
        backgroundColor={"grey6"}
        borderRadius={"23"}
        marginVertical={"20"}
        padding={"20"}
      >
        <Text
          lineHeight={37}
          numberOfLines={1}
          fontSize={32}
          color={"white"}
          fontWeight={"700"}
        >
          Ingredients
        </Text>
        <Box
          paddingVertical={"30"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box>
            <FlatList
              data={IngredientsData}
              renderItem={({ item }: any) => <IngredientTile item={item} />}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={({ item }: any) => (
                <Box
                  paddingVertical={Platform.OS === "android" ? "15" : "12"}
                />
              )}
            />
          </Box>
          <Box>
            <FlatList
              data={ReplacementData}
              renderItem={({ item }: any) => <ReplacementTile item={item} />}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={({ item }: any) => (
                <Box
                  paddingVertical={Platform.OS === "android" ? "15" : "12"}
                />
              )}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar translucent backgroundColor="transparent" />
      <FlatList
        data={[{ id: 1 }]}
        renderItem={({ item }: any) => <MainView />}
        keyExtractor={(item) => item.id.toString()}
      />
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

export default MealDetails;
