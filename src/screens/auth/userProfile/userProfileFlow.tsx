import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CookingSkill from "../../../components/CookingSkill";
import CurrentDiets from "../../../components/CurrentDiets";
import DietaryRequirements from "../../../components/DietaryRequirements";
import HealthIssues from "../../../components/HealthIssues";
import NutritionGoals from "../../../components/NutritionGoals";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../../../redux/slices/UserProfile";
import { UserProfile } from "../../../utils/Constants";

const UserProfileFLow = ({ navigation }: any) => {
  const { userProfile } = useSelector((state) => state?.reducer);
  const [profileData, setProfileData] = useState(userProfile.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userProfile.userProfile) {
      setProfileData(userProfile.userProfile);
    }
  }, [userProfile]);

  const CheckConditionalRendering = () => {
    if (profileData[0]?.displayScreen)
      return <CookingSkill navigation={navigation} />;
    if (profileData[1]?.displayScreen)
      return <NutritionGoals navigation={navigation} />;
    if (profileData[2]?.displayScreen)
      return <DietaryRequirements navigation={navigation} />;
    if (profileData[3]?.displayScreen)
      return <CurrentDiets navigation={navigation} />;
    if (profileData[4]?.displayScreen)
      return <HealthIssues navigation={navigation} />;
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {CheckConditionalRendering()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: { flex: 1, backgroundColor: "#000000", justifyContent: "center" },
  Scroll: {
    flex: 1,
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default UserProfileFLow;
