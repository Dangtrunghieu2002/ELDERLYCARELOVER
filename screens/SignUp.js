import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUp}>
      <Pressable
        style={[styles.component8Parent, styles.groupInnerShadowBox]}
        onPress={() => navigation.navigate("SignUp3")}
      >
        <View style={styles.component8}>
          <Pressable
            style={styles.rectangleParent}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.save, styles.saveTypo]}>Finish</Text>
          </Pressable>
          <View style={[styles.rectangleGroup, styles.groupChildPosition]}>
            <Pressable
              style={[styles.groupItem, styles.groupItemPosition]}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.cancel}>Back</Text>
          </View>
        </View>
        <View style={styles.textField3Parent}>
          <View style={styles.textLayout}>
            <View style={[styles.textField3Child, styles.groupItemPosition]} />
            <View style={[styles.textField3Inner, styles.qunLMPosition]}>
              <View style={[styles.textFillParent, styles.textFlexBox1]}>
                <Text style={[styles.textFill, styles.textTypo]}>
                  Full name
                </Text>
                <Image
                  style={styles.mdirequiredIcon}
                  resizeMode="cover"
                  source={require("../assets/mdirequired.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.textField7, styles.textLayout]}>
            <View style={[styles.textField3Child, styles.groupItemPosition]} />
            <Text style={[styles.textFill1, styles.textTypo]}>Gender</Text>
            <Image
              style={styles.textField7Item}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
          </View>
          <View style={[styles.textField7, styles.textLayout]}>
            <View style={[styles.textField4, styles.textPosition]}>
              <View
                style={[styles.textField3Child, styles.groupItemPosition]}
              />
              <View style={[styles.textField3Inner, styles.qunLMPosition]}>
                <View style={[styles.textFillParent, styles.textFlexBox1]}>
                  <Text style={[styles.textFill, styles.textTypo]}>
                    Date of Birth
                  </Text>
                  <Image
                    style={styles.mdirequiredIcon}
                    resizeMode="cover"
                    source={require("../assets/mdirequired.png")}
                  />
                </View>
              </View>
            </View>
            <Image
              style={[styles.uilcalendarAltIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/uilcalendaralt.png")}
            />
          </View>
          <View style={[styles.textField7, styles.textLayout]}>
            <View style={[styles.textField3Child, styles.groupItemPosition]} />
            <Text style={[styles.textFill1, styles.textTypo]}>Location</Text>
          </View>
          <View style={[styles.textField7, styles.textLayout]}>
            <View style={[styles.textField3Child, styles.groupItemPosition]} />
            <Text style={[styles.textFill1, styles.textTypo]}>
              Identity Card
            </Text>
            <Image
              style={styles.textField7Item}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
          </View>
        </View>
        <Text style={[styles.generalInformation, styles.textTypo]}>
          General Information
        </Text>
        <View style={styles.healthStatusParent}>
          <Text style={[styles.healthStatus, styles.textTypo]}>
            Health Status
          </Text>
          <View style={[styles.textField7, styles.textLayout]}>
            <View style={[styles.textField3Child, styles.groupItemPosition]} />
            <Text style={[styles.textFill1, styles.textTypo]}>Weight</Text>
            <Image
              style={styles.textField7Item}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
          </View>
          <View style={[styles.textField7, styles.textLayout]}>
            <View style={[styles.textField3Child, styles.groupItemPosition]} />
            <Text style={[styles.textFill1, styles.textTypo]}>Height</Text>
            <Image
              style={styles.textField7Item}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
          </View>
          <View style={[styles.textField7, styles.textLayout]}>
            <Image
              style={styles.textField7Item}
              resizeMode="cover"
              source={require("../assets/vector-16.png")}
            />
            <View style={[styles.textField3Child, styles.groupItemPosition]} />
            <View style={[styles.textFillContainer, styles.textFlexBox1]}>
              <Text style={[styles.textFill, styles.textTypo]}>
                Background disease
              </Text>
              <Image
                style={styles.mdirequiredIcon}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
          </View>
        </View>
      </Pressable>
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
            style={[styles.signalIcon, styles.iconPosition]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.instanceChild, styles.groupChildPosition]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.navigate("SignUp1")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.qunLM, styles.qunLMPosition]}>Sign up</Text>
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
  groupChildPosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  saveTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  groupItemPosition: {
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
  qunLMPosition: {
    top: 11,
    position: "absolute",
  },
  textFlexBox1: {
    flexDirection: "row",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.main1,
    fontSize: FontSize.size_mini,
  },
  textLayout: {
    height: 40,
    width: 315,
  },
  textPosition: {
    left: 0,
    top: 0,
  },
  iconPosition: {
    top: 8,
    position: "absolute",
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
    fontSize: FontSize.size_xs,
    height: 14,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    right: "0%",
    left: "0%",
    width: "100%",
    backgroundColor: Color.main1,
    borderRadius: Border.br_8xs,
  },
  save: {
    left: "35.33%",
    color: Color.white,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    top: "32%",
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent: {
    left: "52.38%",
    bottom: "0%",
    top: "0%",
    right: "0%",
    width: "47.62%",
    height: "100%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.main4,
    borderWidth: 2,
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
    left: "0%",
    width: "47.62%",
  },
  component8: {
    bottom: 19,
    height: 50,
    width: 315,
    left: 20,
    position: "absolute",
  },
  textField3Child: {
    borderWidth: 1,
  },
  textFill: {
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "left",
  },
  mdirequiredIcon: {
    height: 8,
    marginLeft: 3,
    width: 8,
    overflow: "hidden",
  },
  textFillParent: {
    left: 0,
    top: 0,
  },
  textField3Inner: {
    height: 18,
    width: 62,
    left: 20,
  },
  textFill1: {
    top: "27.5%",
    left: "6.35%",
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "left",
    position: "absolute",
  },
  textField7Item: {
    height: "17.4%",
    width: "4.13%",
    top: "41.25%",
    right: "6.19%",
    bottom: "41.35%",
    left: "89.68%",
    borderRadius: Border.br_12xs_1,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textField7: {
    marginTop: 15,
  },
  textField4: {
    height: 40,
    width: 315,
    position: "absolute",
  },
  uilcalendarAltIcon: {
    left: 271,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  textField3Parent: {
    top: 53,
    left: 20,
    position: "absolute",
  },
  generalInformation: {
    top: 20,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 20,
    position: "absolute",
  },
  healthStatus: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  textFillContainer: {
    marginTop: -9,
    marginLeft: -137.5,
    top: "50%",
    left: "50%",
    width: 62,
  },
  healthStatusParent: {
    top: 328,
    left: 20,
    position: "absolute",
  },
  component8Parent: {
    top: 86,
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
    width: 375,
  },
  batteryIcon: {
    left: 31,
    width: 25,
    height: 10,
    top: 3,
    position: "absolute",
  },
  text: {
    width: 28,
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_xs,
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
  text1: {
    left: 164,
    fontWeight: "500",
    fontFamily: FontFamily.sFUITextMedium,
    width: 48,
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_xs,
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
    fontSize: FontSize.size_xs,
    top: 3,
  },
  signalIcon: {
    left: 7,
    width: 34,
    height: 6,
  },
  instanceChild: {
    right: "0%",
    left: "0%",
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
    left: 154,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
    textAlign: "center",
  },
  groupView: {
    height: 56,
    top: 20,
    width: 375,
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

export default SignUp;
