import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignUp1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={[styles.lineParent, styles.lineLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.confirmPassword, styles.signUp1FlexBox]}>
          Confirm password
        </Text>
      </View>
      <View style={[styles.lineGroup, styles.lineLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.confirmPassword, styles.signUp1FlexBox]}>
          Enter password
        </Text>
      </View>
      <View style={[styles.lineContainer, styles.lineLayout]}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={[styles.confirmPassword, styles.signUp1FlexBox]}>
          Enter your email or phone number
        </Text>
      </View>
      <Text style={[styles.signUp1, styles.signUp1Typo]}>Sign up</Text>
      <Image
        style={[styles.illustration1Icon, styles.groupChildPosition]}
        resizeMode="cover"
        source={require("../assets/illustration-1.png")}
      />
      <Image
        style={styles.carbonviewOffIcon}
        resizeMode="cover"
        source={require("../assets/carbonviewoff.png")}
      />
      <Text style={[styles.bySigningUpContainer, styles.textTypo]}>
        <Text style={styles.bySigningUpContainer1}>
          <Text
            style={styles.bySigningUp}
          >{`By signing up, you agree to our `}</Text>
          <Text style={styles.signUp1Typo}>{`Terms and Conditions `}</Text>
          <Text style={styles.bySigningUp}>{`and `}</Text>
          <Text style={styles.signUp1Typo}>Privacy Policy</Text>
        </Text>
      </Text>
      <Pressable
        style={styles.joinUsBeforeContainer}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={styles.textTypo}>
          <Text style={styles.bySigningUp}>{`Join us before? `}</Text>
          <Text style={styles.signUp1Typo}>Log in!</Text>
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleParentPosition]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <View style={styles.instanceChild} />
        <Text style={[styles.textField, styles.signUp1Typo]}>Signup</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  lineLayout: {
    height: 28,
    width: 275,
    left: 50,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  signUp1FlexBox: {
    textAlign: "left",
    color: Color.main1,
    position: "absolute",
  },
  signUp1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.main1,
  },
  rectangleParentPosition: {
    width: 275,
    left: 50,
    position: "absolute",
  },
  groupChild: {
    top: 28,
    borderStyle: "solid",
    borderColor: "#539165",
    borderTopWidth: 1,
    width: 276,
    height: 1,
  },
  confirmPassword: {
    left: 5,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
    top: 0,
  },
  lineParent: {
    top: 556,
  },
  lineGroup: {
    top: 500,
  },
  lineContainer: {
    top: 447,
  },
  signUp1: {
    top: 408,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.main1,
    position: "absolute",
    left: 50,
    fontWeight: "700",
  },
  illustration1Icon: {
    width: 460,
    height: 460,
    top: 0,
    overflow: "hidden",
  },
  carbonviewOffIcon: {
    top: 553,
    left: 291,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  bySigningUp: {
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  bySigningUpContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  bySigningUpContainer: {
    top: 614,
    display: "flex",
    alignItems: "center",
    height: 30,
    width: 275,
    left: 50,
    position: "absolute",
  },
  joinUsBeforeContainer: {
    left: 123,
    top: 749,
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.main1,
    position: "absolute",
    width: "100%",
  },
  textField: {
    top: "32%",
    left: "40.36%",
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleParent: {
    top: 669,
    height: 50,
  },
  signUp: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp1;
