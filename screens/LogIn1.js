import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LogIn1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <Image
        style={[styles.component4Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/component-41.png")}
      />
      <Image
        style={[styles.component5Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/component-5.png")}
      />
      <Pressable
        style={styles.haveNotAnyContainer}
        onPress={() => navigation.navigate("SignUp1")}
      >
        <Text style={[styles.text, styles.passwordFlexBox]}>
          <Text style={styles.haveNotAny}>{`Have not any account yet? `}</Text>
          <Text style={styles.registerTypo}>Register!</Text>
        </Text>
      </Pressable>
      <Text style={[styles.forgotPassword, styles.registerTypo]}>
        Forgot Password?
      </Text>
      <Image
        style={styles.carbonviewOffIcon}
        resizeMode="cover"
        source={require("../assets/carbonviewoff.png")}
      />
      <View style={[styles.lineParent, styles.lineLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      </View>
      <Pressable
        style={[styles.lineGroup, styles.lineLayout]}
        onPress={() => navigation.navigate("LogIn")}
      >
        <View style={styles.groupChild} />
        <Text style={[styles.password, styles.passwordTypo]}>User name</Text>
      </Pressable>
      <Text style={styles.logIn1}>Log in</Text>
      <Image
        style={styles.illustration1Icon}
        resizeMode="cover"
        source={require("../assets/illustration-12.png")}
      />
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.instanceChild} />
        <Text style={[styles.textField, styles.passwordTypo]}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    height: 214,
    top: 598,
    position: "absolute",
  },
  passwordFlexBox: {
    textAlign: "left",
    color: Color.main1,
  },
  registerTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  lineLayout: {
    height: 28,
    width: 275,
    left: 50,
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  component4Icon: {
    width: 235,
    left: 0,
  },
  component5Icon: {
    left: 152,
    width: 223,
  },
  haveNotAny: {
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  text: {
    fontSize: FontSize.size_xs,
    color: Color.main1,
  },
  haveNotAnyContainer: {
    left: 84,
    top: 623,
    position: "absolute",
  },
  forgotPassword: {
    top: 518,
    left: 220,
    textAlign: "left",
    color: Color.main1,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  carbonviewOffIcon: {
    top: 472,
    left: 291,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 28,
    borderStyle: "solid",
    borderColor: "#539165",
    borderTopWidth: 1,
    width: 276,
    height: 1,
    left: 0,
    position: "absolute",
  },
  password: {
    left: 5,
    top: 0,
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "left",
    color: Color.main1,
  },
  lineParent: {
    top: 475,
  },
  lineGroup: {
    top: 429,
  },
  logIn1: {
    top: 390,
    fontSize: FontSize.size_xl,
    left: 50,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.main1,
    position: "absolute",
  },
  illustration1Icon: {
    width: 460,
    height: 460,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
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
    left: "42.55%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  rectangleParent: {
    top: 548,
    height: 50,
    width: 275,
    left: 50,
    position: "absolute",
  },
  logIn: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LogIn1;
