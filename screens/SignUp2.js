import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SignUp2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={styles.instanceChild} />
        <Text style={styles.textField}>Home</Text>
      </Pressable>
      <Text style={styles.communityHealthcare}>Community Healthcare</Text>
      <Text style={[styles.welcomeToOur, styles.welcomeToOurTypo]}>
        WELCOME TO OUR COMMUNITY
      </Text>
      <Text style={[styles.registerSuccessfully, styles.welcomeToOurTypo]}>
        Register successfully!
      </Text>
      <Image
        style={styles.illustration1Icon}
        resizeMode="cover"
        source={require("../assets/illustration-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeToOurTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.main1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
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
    left: "41.82%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  rectangleParent: {
    top: 712,
    left: 50,
    width: 275,
    height: 50,
    position: "absolute",
  },
  communityHealthcare: {
    top: "80.54%",
    left: "29.33%",
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    color: Color.main1,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  welcomeToOur: {
    top: 597,
    left: 27,
  },
  registerSuccessfully: {
    top: 543,
    left: 79,
  },
  illustration1Icon: {
    top: 63,
    left: 0,
    width: 555,
    height: 555,
    position: "absolute",
    overflow: "hidden",
  },
  signUp: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SignUp2;
