import React, { useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrow } from "../../../assets/svg";
import Box from "../../../components/common/Box";
import CTAWithDynamicIcon from "../../../components/common/CTAWithDynamicIcon";
import Form from "../../../components/common/Form";
import FormButton from "../../../components/common/FormButton";
import { FormField } from "../../../components/common/FormField";
import Text from "../../../components/common/Text";
import { RegisterFormValues } from "../../../context/types";
import { AppConstData } from "../../../utils/app-data";
import { SCREENS } from "../../../utils/Constants";
import { AppValidation } from "../../../utils/validation";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { signOutUser } from "../../../network/firebaseServices";
import { useDispatch } from "react-redux";
import { setUserSignIn } from "../../../redux/slices/UserSignIn";

let initialValues: RegisterFormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
};

const Register = ({ navigation }: any) => {
  const dispatch = useDispatch();
  let refValues = AppConstData.registerRef.map(() => useRef<any>());

  const handleSubmit = (data: any) => {
    dispatch(setUserSignIn(false));
    auth()
      .createUserWithEmailAndPassword(data?.email, data?.password)
      .then((res) => {
        console.log("User account created & signed in!: ", res);
        setNewUserData(data, res?.user?.uid);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }
        console.error(error);
      });
  };

  const setNewUserData = async (data, uid) => {
    firestore()
      .collection("Users")
      .add({
        name: data?.name,
        phoneNumber: data?.phoneNumber,
        uid: uid,
        email: data?.email,
      })
      .then((res) => {
        signOutUser();
        navigation.navigate(SCREENS.LoginScreen2);
      })
      .catch((error) => {
        console.log("ERROR ADDING USER: ", error);
      });
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Box paddingVertical={"30"} paddingHorizontal={"20"} flex={1}>
        <Box flex={0.2}>
          <CTAWithDynamicIcon
            marginTop={"10"}
            borderRadius={"cta"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={"white"}
            variant="outline"
            width={50}
            height={50}
            withIcon
            onlyIcon
            icon={() => <SvgXml height={17} width={17} xml={backArrow} />}
            onPress={() => navigation.goBack()}
          />
          <Text
            lineHeight={57}
            numberOfLines={2}
            fontSize={50}
            color={"white"}
            fontWeight={"400"}
            paddingHorizontal={"20"}
            marginVertical={"30"}
          >
            Create an account
          </Text>
        </Box>

        <Box flex={0.8} paddingHorizontal={"20"} justifyContent={"center"}>
          <ScrollView style={styles.Scroll} keyboardShouldPersistTaps="always">
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : null}
              style={styles.container}
              keyboardVerticalOffset={Platform.select({
                ios: 0,
                android: 500,
              })}
            >
              <Form
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={AppValidation.validationSchemaRegister()}
              >
                <FormField
                  ref={refValues[0]}
                  placeHolder={"Name"}
                  returnKeyType="next"
                  backgroundColor={"black"}
                  color={"white"}
                  borderColor={"grey2"}
                  borderWidth={1}
                  height={70}
                  placeholderTextColor={"#777777"}
                  onChangeText={() => {}}
                  marginBottom={"20"}
                  name={"name"}
                  onSubmitEditing={() => refValues[1]?.current?.focus()}
                />
                <FormField
                  ref={refValues[1]}
                  placeHolder={"Email"}
                  returnKeyType="next"
                  backgroundColor={"black"}
                  color={"white"}
                  borderColor={"grey2"}
                  borderWidth={1}
                  height={70}
                  placeholderTextColor={"#777777"}
                  onChangeText={() => {}}
                  marginBottom={"20"}
                  name={"email"}
                  onSubmitEditing={() => refValues[2]?.current?.focus()}
                />
                <FormField
                  ref={refValues[2]}
                  placeHolder={"Phone Number"}
                  returnKeyType="next"
                  backgroundColor={"black"}
                  color={"white"}
                  borderColor={"grey2"}
                  borderWidth={1}
                  height={70}
                  placeholderTextColor={"#777777"}
                  onChangeText={() => {}}
                  marginBottom={"20"}
                  name={"phoneNumber"}
                  onSubmitEditing={() => refValues[3]?.current?.focus()}
                />
                <FormField
                  ref={refValues[3]}
                  placeHolder={"Password"}
                  returnKeyType="done"
                  backgroundColor={"black"}
                  color={"white"}
                  borderColor={"grey2"}
                  borderWidth={1}
                  height={70}
                  placeholderTextColor={"#777777"}
                  onChangeText={() => {}}
                  name={"password"}
                  secureTextEntry={true}
                  marginBottom={"40"}
                />
                <FormButton
                  title="Create an account"
                  color={"white"}
                  loading={false}
                  disabled={false}
                />
              </Form>
            </KeyboardAvoidingView>
          </ScrollView>
        </Box>
      </Box>
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

export default Register;
