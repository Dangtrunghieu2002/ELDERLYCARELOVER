import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logIn}>
      <Image
        style={[styles.component4Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/component-4.png")}
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
        <Text style={[styles.text, styles.textFlexBox]}>
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
      <Image
        style={[styles.logInChild, styles.childLayout]}
        resizeMode="cover"
        source={require("../assets/group-8350.png")}
      />
      <View style={[styles.lineParent, styles.parentLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.healthcarecommunitycom, styles.textFieldTypo]}>
          Healthcare@Community.com
        </Text>
      </View>
      <Text style={styles.logIn1}>Log in</Text>
      <Image
        style={styles.illustration1Icon}
        resizeMode="cover"
        source={require("../assets/illustration-1.png")}
      />
      <Pressable
        style={[styles.rectangleParent, styles.parentLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.instanceChild} />
        <Text style={[styles.textField, styles.textFieldTypo]}>Login</Text>
      </Pressable>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-1601.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    height: 214,
    top: 598,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.main1,
  },
  registerTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  childLayout: {
    height: 1,
    position: "absolute",
  },
  parentLayout: {
    width: 275,
    left: 50,
  },
  textFieldTypo: {
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  frameLayout: {
    height: 6,
    width: 6,
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
    textAlign: "left",
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
  logInChild: {
    top: 502,
    width: 275,
    left: 50,
  },
  groupChild: {
    top: 28,
    borderStyle: "solid",
    borderColor: "#539165",
    borderTopWidth: 1,
    width: 276,
    left: 0,
  },
  healthcarecommunitycom: {
    left: 5,
    top: 0,
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "left",
    color: Color.main1,
  },
  lineParent: {
    top: 429,
    height: 28,
    position: "absolute",
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
    position: "absolute",
  },
  frameItem: {
    marginLeft: 2,
  },
  ellipseParent: {
    top: 487,
    left: 55,
    flexDirection: "row",
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

export default LogIn;
