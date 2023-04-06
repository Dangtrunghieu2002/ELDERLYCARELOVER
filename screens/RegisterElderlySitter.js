import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RegisterElderlySitter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.registerElderlySitter}>
      <View style={[styles.button2, styles.button2Position]}>
        <View style={[styles.button2Child, styles.childPosition]} />
        <Text style={[styles.textField, styles.textTypo1]}>Register</Text>
      </View>
      <Pressable
        style={[styles.frameParent, styles.childShadowBox]}
        onPress={() => navigation.navigate("SignUp3")}
      >
        <View style={styles.workExperienceParent}>
          <Text style={styles.workExperience}>Work Experience</Text>
          <View style={[styles.textField4, styles.textLayout4]}>
            <View style={[styles.textField4Child, styles.childBorder]} />
            <Text style={[styles.textFill, styles.textTypo]}>Current Job</Text>
          </View>
          <View style={[styles.textField4, styles.textLayout4]}>
            <Image
              style={[styles.textField5Child, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
            <View style={[styles.textField4Child, styles.childBorder]} />
            <View style={styles.textFillParent}>
              <Text style={styles.textTypo}>
                How long have you done this job
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
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.introduceYourself, styles.qunLMPosition]}>
              Introduce yourself
            </Text>
          </View>
        </View>
        <View style={styles.generalInformationParent}>
          <Text style={styles.workExperience}>General Information</Text>
          <View style={[styles.textField21, styles.textLayout4]}>
            <View style={[styles.textField21Child, styles.childBorder]} />
            <Text style={[styles.textFill2, styles.textTypo]}>
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
          <View style={[styles.textField21, styles.textLayout4]}>
            <View style={[styles.textField21Child, styles.childBorder]} />
            <Text style={[styles.textFill2, styles.textTypo]}>Female</Text>
            <Image
              style={[styles.textField4Inner, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
            <View style={[styles.rectangleView, styles.textBg]} />
            <Text style={[styles.title1, styles.titleTypo]}>Title</Text>
          </View>
          <View style={[styles.textField21, styles.textLayout4]}>
            <View style={[styles.textField21Child, styles.childBorder]} />
            <Text style={[styles.textFill2, styles.textTypo]}>19/07/1952</Text>
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
          <View style={[styles.textField4, styles.textLayout4]}>
            <View style={[styles.textField4Child, styles.childBorder]} />
            <View style={[styles.frameView, styles.qunLMPosition]}>
              <View style={[styles.textFillGroup, styles.groupChildPosition]}>
                <Text style={styles.textTypo}>Location</Text>
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
          <View style={[styles.textField4, styles.textLayout4]}>
            <Image
              style={[styles.textField5Child, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
            <View style={[styles.textField4Child, styles.childBorder]} />
            <View style={styles.textFillParent}>
              <Text style={styles.textTypo}>Skills</Text>
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
          <View style={[styles.textField4, styles.textLayout4]}>
            <View style={[styles.textField4Child, styles.childBorder]} />
            <Text style={[styles.textFill, styles.textTypo]}>
              Diploma or Certificate
            </Text>
          </View>
        </View>
      </Pressable>
      <View style={[styles.header1, styles.groupChildPosition]}>
        <View style={[styles.header1Child, styles.childShadowBox]} />
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
            <Text style={[styles.text1, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text2, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleGroup, styles.childPosition]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <Pressable
            style={[styles.chevronLeft, styles.chevronLeftPosition]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.qunLM, styles.qunLMPosition]}>
            Elderly Sitter Register
          </Text>
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
      <View style={[styles.notification, styles.notificationLayout]}>
        <View style={[styles.notificationChild, styles.notificationLayout]} />
        <Image
          style={[styles.notificationItem, styles.chevronLeftPosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-1616.png")}
        />
        <Image
          style={styles.sentMail1Icon}
          resizeMode="cover"
          source={require("../assets/sentmail-1.png")}
        />
        <Text style={styles.yourRegisterForm}>
          Your register form has been successfully sent!
        </Text>
        <Text style={[styles.weWillTry, styles.titleTypo]}>
          We will try to response your apply soon!
        </Text>
        <Pressable
          style={[styles.button3, styles.buttonLayout]}
          onPress={() => navigation.navigate("Setting")}
        >
          <View style={[styles.button2Child, styles.childPosition]} />
          <Text style={[styles.textField1, styles.textTypo1]}>
            I understood
          </Text>
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/group-8442.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button2Position: {
    opacity: 0.4,
    position: "absolute",
  },
  childPosition: {
    backgroundColor: Color.main1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo1: {
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: "32%",
    textAlign: "center",
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
  textLayout4: {
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
  textTypo: {
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "left",
    color: Color.main1,
    fontSize: FontSize.size_mini,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  mdirequiredIconSpaceBlock: {
    marginLeft: 3,
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 69,
    width: 315,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  qunLMPosition: {
    top: 11,
    position: "absolute",
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
  titleTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
    color: Color.main1,
  },
  batteryIconPosition: {
    right: "0%",
    position: "absolute",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    color: Color.black,
    display: "flex",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  chevronLeftPosition: {
    top: 20,
    position: "absolute",
  },
  notificationLayout: {
    height: 250,
    width: 315,
    position: "absolute",
  },
  buttonLayout: {
    height: 50,
    width: 275,
  },
  button2Child: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.main1,
    top: "0%",
    height: "100%",
  },
  textField: {
    left: "38.55%",
    textAlign: "center",
  },
  button2: {
    top: 743,
    left: 56,
    height: 50,
    width: 275,
  },
  workExperience: {
    textAlign: "left",
    color: Color.main1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
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
    position: "absolute",
  },
  textField4: {
    height: 40,
    marginTop: 15,
  },
  textField5Child: {
    height: "17.4%",
    top: "41.25%",
    bottom: "41.35%",
    borderRadius: Border.br_12xs_1,
    left: "89.68%",
    right: "6.19%",
    width: "4.13%",
    maxWidth: "100%",
    position: "absolute",
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
    width: 62,
    position: "absolute",
  },
  groupChild: {
    height: 69,
    width: 315,
    borderWidth: 1,
    borderColor: "#539165",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  introduceYourself: {
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "left",
    color: Color.main1,
    fontSize: FontSize.size_mini,
    left: 20,
  },
  rectangleParent: {
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
    position: "absolute",
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
    textAlign: "left",
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
    borderRadius: Border.br_12xs_1,
    left: "89.68%",
    right: "6.19%",
    width: "4.13%",
    maxWidth: "100%",
    position: "absolute",
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
    position: "absolute",
    textAlign: "left",
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
    width: 62,
    left: 20,
  },
  generalInformationParent: {
    top: 15,
    left: 20,
    position: "absolute",
  },
  frameParent: {
    top: 96,
    left: 10,
    width: 355,
    height: 632,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    opacity: 0.4,
    position: "absolute",
    overflow: "hidden",
  },
  header1Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  text1: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
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
  text2: {
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
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  chevronLeft: {
    left: 16,
    width: 16,
    height: 16,
  },
  qunLM: {
    left: 92,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
    textAlign: "center",
  },
  rectangleGroup: {
    height: "73.68%",
    top: "26.32%",
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
  notificationChild: {
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
  },
  notificationItem: {
    left: 128,
    width: 60,
    height: 60,
  },
  sentMail1Icon: {
    top: 35,
    left: 143,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  yourRegisterForm: {
    top: 95,
    left: 33,
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 42,
    display: "flex",
    color: Color.main1,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  weWillTry: {
    top: 147,
    left: 45,
    textAlign: "center",
    position: "absolute",
  },
  textField1: {
    left: "32.73%",
    textAlign: "center",
  },
  button3: {
    top: 185,
    left: 20,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 295,
    top: 10,
    width: 11,
    height: 11,
    position: "absolute",
  },
  notification: {
    top: 234,
    left: 30,
  },
  registerElderlySitter: {
    backgroundColor: "rgba(248, 245, 228, 0.4)",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default RegisterElderlySitter;
