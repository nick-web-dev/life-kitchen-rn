import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const signUpAuth = async (data) => {
  auth()
    .createUserWithEmailAndPassword(data?.email, data?.password)
    .then((res) => {
      console.log("User account created & signed in!: ", res);
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

const setNewUserData = async (data, uuid) => {
  firestore()
    .collection("Users")
    .add({
      name: data?.name,
      phoneNumber: 30,
      uuid: uuid,
      email: data?.email,
    })
    .then(() => {
      console.log("User added!");
    });
};

const signInUser = async (data) => {
  auth()
    .signInWithEmailAndPassword(data?.email, data?.password)
    .then((res) => {
      console.log("User account created & signed in!: ", res);
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

const fetchById = async (uid: string) => {
  return firestore()
    .collection("Users")
    .where("uid", "==", uid)
    .get()
    .then((querySnapshot) => {
      return querySnapshot?._docs[0]?._data;
    });
};

const signOutUser = async () => {
  auth()
    .signOut()
    .then(() => console.log("User signed out!"));
};

export { signUpAuth, signInUser, signOutUser, setNewUserData, fetchById };
