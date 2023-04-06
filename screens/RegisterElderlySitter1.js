import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const RegisterElderlySitter1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerElderlySitter}>
      <View style={[styles.header1, styles.groupPosition]}>
        <View style={[styles.header1Child, styles.frameParentShadowBox]} />
        <View style={[styles.statusBarwhitebase, styles.batteryIconPosition]}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/battery-icon.png")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text1, styles.textFlexBox]}>9:41 AM</Text>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Text style={[styles.gs, styles.textFlexBox]}>GS</Text>
          <Image
            style={[styles.signalIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleParent, styles.childPosition]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={styles.qunLM}>Elderly Sitter Register</Text>
        </View>
        <Pressable
          style={styles.chat1}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-12.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.button2}
        onPress={() => navigation.navigate("RegisterElderlySitter")}
      >
        <View style={[styles.button2Child, styles.frameParentLayout]} />
        <Text style={styles.textField}>Register</Text>
      </Pressable>
      <Pressable
        style={[styles.frameParent, styles.frameParentLayout]}
        onPress={() => navigation.navigate("SignUp3")}
      >
        <View style={styles.workExperienceParent}>
          <Text style={styles.workExperience}>Work Experience</Text>
          <View style={[styles.textField4, styles.textLayout1]}>
            <View style={[styles.textField4Child, styles.childBorder]} />
            <Text style={[styles.textFill, styles.titleTypo]}>Current Job</Text>
          </View>
          <View style={[styles.textField4, styles.textLayout1]}>
            <Image
              style={[styles.textField5Child, styles.textLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
            <View style={[styles.textField4Child, styles.childBorder]} />
            <View style={[styles.textFillParent, styles.frameViewLayout]}>
              <Text style={[styles.textFill1, styles.titleTypo]}>
                How long have you done this job?
              </Text>
              <Image
                style={[
                  styles.mdirequiredIcon,
                  styles.mdirequiredIconSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Text style={[styles.introduceYourself, styles.titleTypo]}>
              Introduce yourself
            </Text>
          </View>
        </View>
        <View style={styles.generalInformationParent}>
          <Text style={styles.workExperience}>General Information</Text>
          <View style={[styles.textField21, styles.textLayout1]}>
            <View style={[styles.textField21Child, styles.childBorder]} />
            <Text style={[styles.textFill2, styles.titleTypo]}>
              Community Healthcare
            </Text>
            <View style={[styles.textField21Item, styles.textBg]} />
            <View style={[styles.titleParent, styles.titleParentPosition]}>
              <Text style={[styles.title, styles.titleTypo]}>Full name</Text>
              <Image
                style={[
                  styles.mdirequiredIcon1,
                  styles.mdirequiredIconSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/mdirequired1.png")}
              />
            </View>
          </View>
          <View style={[styles.textField21, styles.textLayout1]}>
            <View style={[styles.textField21Child, styles.childBorder]} />
            <Text style={[styles.textFill2, styles.titleTypo]}>Female</Text>
            <Image
              style={[styles.textField4Inner, styles.textLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
            <View style={[styles.rectangleView, styles.textBg]} />
            <Text style={[styles.title1, styles.titleTypo]}>Gender</Text>
          </View>
          <View style={[styles.textField21, styles.textLayout1]}>
            <View style={[styles.textField21Child, styles.childBorder]} />
            <Text style={[styles.textFill2, styles.titleTypo]}>19/07/1952</Text>
            <View
              style={[styles.textField21Child1, styles.titleParentPosition]}
            />
            <View style={styles.dateOfBirthParent}>
              <Text style={[styles.title, styles.titleTypo]}>
                Date of Birth
              </Text>
              <Image
                style={[
                  styles.mdirequiredIcon1,
                  styles.mdirequiredIconSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/mdirequired1.png")}
              />
            </View>
            <Image
              style={[styles.uilcalendarAltIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/uilcalendaralt.png")}
            />
          </View>
          <View style={[styles.textField4, styles.textLayout1]}>
            <View style={[styles.textField4Child, styles.childBorder]} />
            <View style={[styles.frameView, styles.frameViewLayout]}>
              <View style={[styles.textFillGroup, styles.groupPosition]}>
                <Text style={[styles.textFill1, styles.titleTypo]}>
                  Location
                </Text>
                <Image
                  style={[
                    styles.mdirequiredIcon,
                    styles.mdirequiredIconSpaceBlock,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/mdirequired.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.textField4, styles.textLayout1]}>
            <Image
              style={[styles.textField5Child, styles.textLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
            <View style={[styles.textField4Child, styles.childBorder]} />
            <View style={[styles.textFillParent, styles.frameViewLayout]}>
              <Text style={[styles.textFill1, styles.titleTypo]}>Skills</Text>
              <Image
                style={[
                  styles.mdirequiredIcon,
                  styles.mdirequiredIconSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
          </View>
          <View style={[styles.textField4, styles.textLayout1]}>
            <View style={[styles.textField4Child, styles.childBorder]} />
            <Text style={[styles.textFill, styles.titleTypo]}>
              Diploma or Certificate
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
  },
  frameParentShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
  batteryIconPosition: {
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.main1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  frameParentLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  textLayout1: {
    width: 315,
    marginTop: 15,
  },
  childBorder: {
    borderWidth: 1,
    borderColor: "#539165",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  titleTypo: {
    fontFamily: FontFamily.newDescriptionLabelField,
    color: Color.main1,
    textAlign: "left",
  },
  textLayout: {
    borderRadius: Border.br_12xs_1,
    left: "89.68%",
    right: "6.19%",
    width: "4.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameViewLayout: {
    width: 62,
    position: "absolute",
  },
  mdirequiredIconSpaceBlock: {
    marginLeft: 3,
    overflow: "hidden",
  },
  groupLayout: {
    height: 69,
    width: 315,
  },
  textBg: {
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_8xs,
  },
  titleParentPosition: {
    height: 15,
    top: 0,
    position: "absolute",
  },
  header1Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  batteryIcon: {
    height: "67.86%",
    width: "44.14%",
    top: "17.86%",
    bottom: "14.29%",
    left: "55.86%",
    right: "0%",
    position: "absolute",
  },
  text: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    left: "0%",
    top: "0%",
    height: "100%",
  },
  charge: {
    width: "14.8%",
    right: "1.47%",
    bottom: "15%",
    left: "83.73%",
    position: "absolute",
  },
  bluetoothIcon: {
    height: 13,
    opacity: 0.45,
    width: 8,
  },
  text1: {
    width: "12.8%",
    left: "43.73%",
    fontWeight: "500",
    fontFamily: FontFamily.sFUITextMedium,
    top: "15%",
    height: "70%",
  },
  wifiIcon: {
    width: 12,
    height: 9,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    top: "15%",
    height: "70%",
  },
  signalIcon: {
    height: "27.5%",
    width: "8.93%",
    top: "37.5%",
    right: "89.33%",
    bottom: "35%",
    left: "1.73%",
    position: "absolute",
  },
  statusBarwhitebase: {
    height: "26.32%",
    bottom: "73.68%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  instanceChild: {
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  chevronLeft: {
    left: 16,
    top: 20,
    width: 16,
    height: 16,
    position: "absolute",
  },
  qunLM: {
    left: 92,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
    textAlign: "center",
    top: 11,
    position: "absolute",
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  chat1: {
    left: "89.6%",
    top: "48.68%",
    right: "4%",
    bottom: "19.74%",
    width: "6.4%",
    height: "31.58%",
    position: "absolute",
  },
  header1: {
    width: 375,
    height: 76,
    position: "absolute",
  },
  button2Child: {
    backgroundColor: Color.main1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  textField: {
    top: "32%",
    left: "38.55%",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  button2: {
    top: 743,
    left: 56,
    width: 275,
    height: 50,
    position: "absolute",
  },
  workExperience: {
    color: Color.main1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  textField4Child: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  textFill: {
    top: "27.5%",
    left: "6.35%",
    fontFamily: FontFamily.newDescriptionLabelField,
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  textField4: {
    height: 40,
    marginTop: 15,
  },
  textField5Child: {
    height: "17.4%",
    top: "41.25%",
    bottom: "41.35%",
  },
  textFill1: {
    fontSize: FontSize.size_mini,
  },
  mdirequiredIcon: {
    height: 8,
    width: 8,
  },
  textFillParent: {
    marginTop: -9,
    marginLeft: -137.5,
    top: "50%",
    left: "50%",
    flexDirection: "row",
  },
  groupChild: {
    borderWidth: 1,
    borderColor: "#539165",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    left: 0,
    top: 0,
  },
  introduceYourself: {
    left: 20,
    fontSize: FontSize.size_mini,
    top: 11,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 15,
  },
  workExperienceParent: {
    top: 405,
    left: 20,
    position: "absolute",
  },
  textField21Child: {
    height: "81.63%",
    top: "18.37%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  textFill2: {
    top: "40.82%",
    left: "6.35%",
    fontFamily: FontFamily.newDescriptionLabelField,
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  textField21Item: {
    width: "41.27%",
    right: "53.97%",
    left: "4.76%",
    bottom: "69.39%",
    height: "30.61%",
    backgroundColor: Color.gainsboro,
    top: "0%",
    position: "absolute",
  },
  title: {
    fontSize: FontSize.size_xs,
  },
  mdirequiredIcon1: {
    width: 4,
    height: 4,
  },
  titleParent: {
    flexDirection: "row",
    left: 20,
  },
  textField21: {
    height: 49,
    marginTop: 15,
  },
  textField4Inner: {
    height: "14.2%",
    top: "52.04%",
    bottom: "33.76%",
  },
  rectangleView: {
    width: "36.51%",
    right: "58.73%",
    left: "4.76%",
    bottom: "69.39%",
    height: "30.61%",
    backgroundColor: Color.gainsboro,
    top: "0%",
    position: "absolute",
  },
  title1: {
    left: "6.35%",
    fontFamily: FontFamily.newDescriptionLabelField,
    position: "absolute",
    fontSize: FontSize.size_xs,
    top: "0%",
  },
  textField21Child1: {
    left: 15,
    width: 100,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_8xs,
  },
  dateOfBirthParent: {
    bottom: 34,
    width: 61,
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  uilcalendarAltIcon: {
    height: "48.98%",
    width: "7.62%",
    top: "34.69%",
    right: "6.35%",
    bottom: "16.33%",
    left: "86.03%",
    position: "absolute",
  },
  textFillGroup: {
    flexDirection: "row",
    position: "absolute",
  },
  frameView: {
    height: 18,
    left: 20,
    top: 11,
  },
  generalInformationParent: {
    top: 15,
    left: 20,
    position: "absolute",
  },
  frameParent: {
    top: 96,
    left: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 355,
    height: 632,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  registerElderlySitter: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default RegisterElderlySitter1;
