import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SignUp3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <View style={[styles.component8Parent, styles.groupInnerShadowBox]}>
        <View style={styles.component8}>
          <Pressable
            style={[styles.rectangleParent, styles.groupChildPosition1]}
            onPress={() => navigation.navigate("SignUp2")}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.save, styles.saveFlexBox]}>Finish</Text>
          </Pressable>
          <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
            <Pressable
              style={styles.groupItem}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.cancel}>Back</Text>
          </View>
        </View>
        <View style={styles.generalInformationParent}>
          <Text style={styles.generalInformation}>General Information</Text>
          <View style={styles.textField21}>
            <View style={[styles.textField21Child, styles.textChildBorder]} />
            <Text style={[styles.textFill, styles.textTypo]}>
              Community Healthcare
            </Text>
            <View style={[styles.textField21Item, styles.textPosition]} />
            <View style={[styles.titleParent, styles.titleParentFlexBox]}>
              <Text style={styles.titleTypo}>Full name</Text>
              <Image
                style={[
                  styles.mdirequiredIcon,
                  styles.mdirequiredIconSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/mdirequired1.png")}
              />
            </View>
          </View>
          <View style={styles.textField21}>
            <View style={[styles.textField21Child, styles.textChildBorder]} />
            <Text style={[styles.textFill, styles.textTypo]}>Female</Text>
            <Image
              style={[styles.textField4Item, styles.textItemLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
            <View style={[styles.textField4Inner, styles.textPosition]} />
            <Text style={[styles.title1, styles.titleTypo]}>Gender</Text>
          </View>
          <View style={styles.textField211}>
            <View style={[styles.textField21Inner, styles.textChildBorder]} />
            <Text style={[styles.text, styles.textTypo]}>19/07/1952</Text>
            <View style={[styles.dateOfBirthParent, styles.titleParentFlexBox]}>
              <Text style={styles.textTypo}>Date of Birth</Text>
              <Image
                style={[
                  styles.mdirequiredIcon1,
                  styles.mdirequiredIconSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
            <Image
              style={[styles.uilcalendarAltIcon, styles.textItemLayout]}
              resizeMode="cover"
              source={require("../assets/uilcalendaralt.png")}
            />
          </View>
          <View style={styles.textField6}>
            <View style={[styles.textField6Child, styles.textChildBorder]} />
            <Text style={[styles.textFill2, styles.textTypo]}>Location</Text>
          </View>
          <View style={styles.textField6}>
            <View style={[styles.textField6Child, styles.textChildBorder]} />
            <Text style={[styles.textFill2, styles.textTypo]}>
              Indentity Card
            </Text>
            <Image
              style={[styles.textField7Item, styles.textItemLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
          </View>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-8430.png")}
          />
        </View>
        <View style={styles.healthStatusParent}>
          <Text style={styles.generalInformation}>Health Status</Text>
          <View style={styles.textField6}>
            <View style={[styles.textField6Child, styles.textChildBorder]} />
            <Text style={[styles.textFill2, styles.textTypo]}>Weight</Text>
            <Image
              style={[styles.textField7Item, styles.textItemLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
          </View>
          <View style={styles.textField6}>
            <View style={[styles.textField6Child, styles.textChildBorder]} />
            <Text style={[styles.textFill2, styles.textTypo]}>Height</Text>
            <Image
              style={[styles.textField7Item, styles.textItemLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
          </View>
          <View style={styles.textField21}>
            <Image
              style={[styles.textField4Item, styles.textItemLayout]}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
            <View style={[styles.textField21Child, styles.textChildBorder]} />
            <Text style={[styles.textFill, styles.textTypo]}>
              Allergies, Stomach Aches
            </Text>
            <View style={[styles.textField21Item, styles.textPosition]} />
            <View style={[styles.titleGroup, styles.titleParentFlexBox]}>
              <Text style={styles.titleTypo}>Background disease</Text>
              <Image
                style={[
                  styles.mdirequiredIcon,
                  styles.mdirequiredIconSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/mdirequired1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.groupInnerPosition}>
        <View style={[styles.groupInner, styles.groupInnerPosition]} />
        <View style={[styles.statusBarwhitebase, styles.groupViewPosition]}>
          <Image
            style={[styles.statusBarwhitebase, styles.groupViewPosition]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={styles.charge}>
            <Image
              style={styles.batteryIcon}
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
            style={styles.signalIcon}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.instanceChild, styles.groupChildPosition]} />
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
          <Text style={[styles.qunLM, styles.saveFlexBox]}>Sign up</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupInnerShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
  groupChildPosition1: {
    bottom: "0%",
    height: "100%",
    position: "absolute",
  },
  groupChildPosition: {
    left: "0%",
    top: "0%",
  },
  saveFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textChildBorder: {
    borderWidth: 1,
    borderColor: "#539165",
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    borderRadius: Border.br_8xs,
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "left",
    color: Color.main1,
    fontSize: FontSize.size_mini,
  },
  textPosition: {
    backgroundColor: Color.gainsboro,
    left: "4.76%",
    bottom: "69.39%",
    height: "30.61%",
    top: "0%",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  titleParentFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  mdirequiredIconSpaceBlock: {
    marginLeft: 3,
    overflow: "hidden",
  },
  textItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  titleTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "left",
    color: Color.main1,
  },
  groupInnerPosition: {
    height: 76,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupViewPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    height: 14,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    bottom: "0%",
    height: "100%",
    position: "absolute",
    right: "0%",
    borderRadius: Border.br_8xs,
    width: "100%",
    backgroundColor: Color.main1,
  },
  save: {
    left: "35.33%",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: "32%",
    textAlign: "center",
  },
  rectangleParent: {
    left: "52.38%",
    right: "0%",
    bottom: "0%",
    top: "0%",
    width: "47.62%",
  },
  groupItem: {
    backgroundColor: Color.main4,
    borderWidth: 2,
    borderColor: "#539165",
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
    position: "absolute",
    width: "100%",
  },
  cancel: {
    left: "37.33%",
    color: Color.main1,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    top: "32%",
    position: "absolute",
  },
  rectangleGroup: {
    right: "52.38%",
    bottom: "0%",
    height: "100%",
    position: "absolute",
    width: "47.62%",
  },
  component8: {
    bottom: 19,
    height: 50,
    width: 315,
    left: 20,
    position: "absolute",
  },
  generalInformation: {
    textAlign: "left",
    color: Color.main1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
  },
  textField21Child: {
    height: "81.63%",
    top: "18.37%",
  },
  textFill: {
    top: "40.82%",
    left: "6.35%",
    position: "absolute",
  },
  textField21Item: {
    width: "41.27%",
    right: "53.97%",
  },
  mdirequiredIcon: {
    width: 4,
    height: 4,
  },
  titleParent: {
    height: 15,
    top: 0,
    left: 20,
  },
  textField21: {
    height: 49,
    marginTop: 15,
    width: 315,
  },
  textField4Item: {
    height: "14.2%",
    top: "52.04%",
    bottom: "33.76%",
    borderRadius: Border.br_12xs_1,
    left: "89.68%",
    right: "6.19%",
    width: "4.13%",
    maxWidth: "100%",
  },
  textField4Inner: {
    width: "36.51%",
    right: "58.73%",
  },
  title1: {
    left: "6.35%",
    position: "absolute",
    top: "0%",
  },
  textField21Inner: {
    height: "65.57%",
    top: "34.43%",
  },
  text: {
    top: "52.46%",
    left: "6.35%",
    position: "absolute",
  },
  mdirequiredIcon1: {
    height: 8,
    width: 8,
  },
  dateOfBirthParent: {
    height: "29.51%",
    width: "19.37%",
    right: "80.63%",
    bottom: "70.49%",
    left: "0%",
    top: "0%",
  },
  uilcalendarAltIcon: {
    height: "39.34%",
    width: "7.62%",
    top: "47.54%",
    right: "6.35%",
    bottom: "13.11%",
    left: "86.03%",
  },
  textField211: {
    height: 61,
    marginTop: 15,
    width: 315,
  },
  textField6Child: {
    top: "0%",
    height: "100%",
  },
  textFill2: {
    top: "27.5%",
    left: "6.35%",
    position: "absolute",
  },
  textField6: {
    height: 40,
    marginTop: 15,
    width: 315,
  },
  textField7Item: {
    height: "17.4%",
    top: "41.25%",
    bottom: "41.35%",
    borderRadius: Border.br_12xs_1,
    left: "89.68%",
    right: "6.19%",
    width: "4.13%",
    maxWidth: "100%",
  },
  frameChild: {
    width: 130,
    height: 70,
    marginTop: 15,
  },
  generalInformationParent: {
    left: 18,
    top: 20,
    position: "absolute",
  },
  titleGroup: {
    bottom: 34,
    width: 32,
    left: 20,
  },
  healthStatusParent: {
    top: 446,
    left: 20,
    position: "absolute",
  },
  component8Parent: {
    top: 89,
    left: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 355,
    height: 716,
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  groupInner: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
  statusBarwhitebase: {
    height: 20,
    top: 0,
  },
  batteryIcon: {
    left: 31,
    width: 25,
    height: 10,
    top: 3,
    position: "absolute",
  },
  text1: {
    width: 28,
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
    color: Color.black,
    left: 0,
    top: 0,
  },
  charge: {
    left: 314,
    width: 56,
    height: 14,
    top: 3,
    position: "absolute",
  },
  bluetoothIcon: {
    height: 13,
    opacity: 0.45,
    width: 8,
  },
  text2: {
    left: 164,
    fontWeight: "500",
    fontFamily: FontFamily.sFUITextMedium,
    width: 48,
    top: 3,
  },
  wifiIcon: {
    width: 12,
    height: 9,
  },
  gs: {
    left: 44,
    width: 17,
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
    color: Color.black,
    top: 3,
  },
  signalIcon: {
    top: 8,
    left: 7,
    width: 34,
    height: 6,
    position: "absolute",
  },
  instanceChild: {
    bottom: "0%",
    height: "100%",
    position: "absolute",
    right: "0%",
    width: "100%",
    backgroundColor: Color.main1,
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
    top: 20,
    position: "absolute",
  },
  qunLM: {
    top: 11,
    left: 154,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
  },
  groupView: {
    height: 56,
    top: 20,
    backgroundColor: Color.main1,
  },
  signUp: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.main1,
  },
});

export default SignUp3;
