import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.setting}>
      <View style={styles.settingChild} />
      <View style={[styles.header2, styles.footerLayout]}>
        <View style={[styles.rectangleParent, styles.parentPosition]}>
          <View style={[styles.groupChild, styles.parentPosition]} />
          <View style={[styles.statusBarwhitebase, styles.parentPosition]}>
            <Image
              style={[styles.backgroundIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/background.png")}
            />
            <View style={[styles.charge, styles.chargePosition]}>
              <Image
                style={[styles.batteryIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/battery-icon.png")}
              />
              <Text style={[styles.text, styles.gsTypo]}>58 %</Text>
            </View>
            <Image
              style={styles.bluetoothIcon}
              resizeMode="cover"
              source={require("../assets/bluetooth-icon.png")}
            />
            <Text style={styles.text1}>9:41 AM</Text>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Text style={[styles.gs, styles.gsTypo]}>GS</Text>
            <Image
              style={[styles.signalIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/signal.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.childPosition]}>
            <View style={[styles.instanceChild, styles.childPosition]} />
            <Image
              style={styles.chevronLeftIcon}
              resizeMode="cover"
              source={require("../assets/chevronleft2.png")}
            />
            <Text style={[styles.qunLM, styles.qunLMPosition]}>Sign up</Text>
          </View>
        </View>
        <Pressable
          style={[styles.wrapper, styles.chargePosition]}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1595.png")}
          />
        </Pressable>
        <Text style={[styles.communityHealthcare, styles.textFieldClr]}>
          Community Healthcare
        </Text>
        <Text style={[styles.goodMorning, styles.textFieldClr]}>
          Good morning
        </Text>
        <Pressable
          style={styles.chat2}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/chat-12.png")}
          />
        </Pressable>
      </View>
      <View style={styles.accountParent}>
        <Text style={[styles.account, styles.qunLMTypo]}>Account</Text>
        <View style={styles.frameParent}>
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>Profile</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <View style={styles.groupItem} />
        </View>
        <Pressable
          style={styles.frameParent}
          onPress={() => navigation.navigate("Connections")}
        >
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>
              Connections
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.addFriend1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/addfriend-11.png")}
          />
          <View style={styles.groupItem} />
        </Pressable>
        <View style={styles.frameParent}>
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>Payment</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.addFriend1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/creditcard.png")}
          />
          <View style={styles.groupItem} />
        </View>
        <Pressable
          style={styles.frameParent}
          onPress={() => navigation.navigate("RegisterElderlySitter1")}
        >
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.registerToBe, styles.profileLayout]}>
              Register to be Elderly Sitter
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.addFriend1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/register-1.png")}
          />
          <View style={styles.groupItem} />
        </Pressable>
        <Text style={[styles.setting1, styles.qunLMTypo]}>Setting</Text>
        <View style={styles.frameParent}>
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>Device</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.addFriend1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/smartwatch.png")}
          />
          <View style={styles.groupItem} />
        </View>
        <Pressable
          style={styles.frameParent}
          onPress={() => navigation.navigate("Notification")}
        >
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>
              Notification
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.icon24NavNotification, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/icon-24-nav-notification3.png")}
          />
          <View style={styles.groupItem} />
        </Pressable>
        <View style={styles.frameParent}>
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>
              Appearance
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.addFriend1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/viewmode.png")}
          />
          <View style={styles.groupItem} />
          <Image
            style={[styles.groupIcon, styles.qunLMPosition]}
            resizeMode="cover"
            source={require("../assets/group-83781.png")}
          />
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>Language</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.addFriend1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/global.png")}
          />
          <View style={styles.groupItem} />
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>Privacy</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.addFriend1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/shield.png")}
          />
          <View style={styles.groupItem} />
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>
              Using Instruction
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.addFriend1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/information-1.png")}
          />
          <View style={styles.groupItem} />
        </View>
        <View style={styles.frameParent}>
          <View style={[styles.vectorParent, styles.footerFlexBox]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/rectangle-1428412.png")}
            />
            <Text style={[styles.profile, styles.profileLayout]}>
              Application Information
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
          </View>
          <Image
            style={[styles.addFriend1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/option.png")}
          />
          <View style={styles.groupItem} />
        </View>
      </View>
      <View style={styles.button1}>
        <View style={[styles.button1Child, styles.childPosition]} />
        <Text style={[styles.textField, styles.account1Typo]}>Sign out</Text>
      </View>
      <View style={styles.button1}>
        <View style={[styles.button1Child, styles.childPosition]} />
        <Text style={[styles.textField, styles.account1Typo]}>Sign out</Text>
      </View>
      <View style={[styles.footer, styles.footerFlexBox]}>
        <Pressable
          style={styles.homeParent}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.home, styles.homeClr]}>Home</Text>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        >
          <Text style={[styles.index, styles.indexPosition]}>Index</Text>
          <Image
            style={styles.icroundHealthAndSafetyIcon}
            resizeMode="cover"
            source={require("../assets/icroundhealthandsafety1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("Notification")}
        >
          <Text style={[styles.index, styles.indexPosition]}>Notification</Text>
          <Image
            style={[styles.icon24NavNotification1, styles.icon24Position]}
            resizeMode="cover"
            source={require("../assets/icon-24-nav-notification1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("Setting")}
        >
          <Text style={[styles.account1, styles.indexPosition]}>Account</Text>
          <Image
            style={styles.icon24Position}
            resizeMode="cover"
            source={require("../assets/icon-24-nav-account1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerLayout: {
    width: 375,
    left: 0,
  },
  parentPosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  chargePosition: {
    bottom: "15%",
    position: "absolute",
  },
  gsTypo: {
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.sFUITextRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
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
  qunLMPosition: {
    display: "none",
    position: "absolute",
  },
  textFieldClr: {
    color: Color.white,
    position: "absolute",
  },
  qunLMTypo: {
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
  },
  footerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  profileLayout: {
    height: 19,
    width: 235,
    marginLeft: 20,
    alignItems: "center",
    color: Color.main1,
    fontSize: FontSize.size_mini,
    lineHeight: 34,
    display: "flex",
    textAlign: "left",
  },
  iconLayout: {
    height: 20,
    width: 20,
    left: 5,
    position: "absolute",
  },
  account1Typo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  homeClr: {
    color: Color.main2,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  indexPosition: {
    lineHeight: 20,
    top: 26,
    fontSize: FontSize.newDescriptionLabelField_size,
    width: 92,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  icon24Position: {
    left: 34,
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  settingChild: {
    top: 110,
    left: 12,
    width: 355,
    height: 626,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChild: {
    height: "76%",
    bottom: "24%",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    right: "0%",
    backgroundColor: Color.white,
    position: "absolute",
    width: "100%",
  },
  backgroundIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
    left: "0%",
    top: "0%",
    height: "100%",
  },
  charge: {
    width: "14.8%",
    right: "1.47%",
    left: "83.73%",
    top: "15%",
    height: "70%",
  },
  bluetoothIcon: {
    width: 8,
    opacity: 0.45,
    height: 13,
  },
  text1: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    fontWeight: "500",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    top: "15%",
    height: "70%",
    position: "absolute",
  },
  wifiIcon: {
    width: 12,
    height: 9,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
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
    height: "20%",
    bottom: "80%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  instanceChild: {
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    backgroundColor: Color.main1,
    top: "0%",
    height: "100%",
  },
  chevronLeftIcon: {
    top: 20,
    left: 16,
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  qunLM: {
    top: 11,
    left: 154,
    fontSize: FontSize.size_lg,
    color: Color.main4,
    textAlign: "center",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    lineHeight: 34,
    display: "none",
  },
  rectangleGroup: {
    height: "80%",
    top: "20%",
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    backgroundColor: Color.main1,
  },
  rectangleParent: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: "10.67%",
    top: "35%",
    right: "76%",
    width: "13.33%",
    height: "50%",
  },
  communityHealthcare: {
    top: "62%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    left: "29.33%",
    color: Color.white,
    textAlign: "left",
  },
  goodMorning: {
    top: "47%",
    fontFamily: FontFamily.newDescriptionLabelField,
    left: "29.33%",
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  chat2: {
    left: "89.6%",
    top: "56%",
    right: "4%",
    bottom: "20%",
    width: "6.4%",
    height: "24%",
    position: "absolute",
  },
  header2: {
    height: 100,
    top: 0,
    left: 0,
    position: "absolute",
  },
  account: {
    color: Color.main1,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "left",
  },
  frameChild: {
    width: 30,
    height: 30,
  },
  profile: {
    marginLeft: 20,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  frameItem: {
    borderRadius: Border.br_12xs_1,
    width: 7,
    marginLeft: 20,
    height: 13,
  },
  vectorParent: {
    height: "75%",
    bottom: "25%",
    left: "0%",
    top: "0%",
    right: "0%",
    width: "100%",
  },
  vectorIcon: {
    top: 5,
    height: 20,
    width: 20,
    left: 5,
  },
  groupItem: {
    height: "2.5%",
    width: "100.32%",
    top: "98.75%",
    right: "-0.16%",
    bottom: "-1.25%",
    left: "-0.16%",
    borderStyle: "solid",
    borderColor: "rgba(83, 145, 101, 0.5)",
    borderTopWidth: 1,
    position: "absolute",
  },
  frameParent: {
    width: 315,
    height: 40,
    marginTop: 10,
  },
  addFriend1Icon: {
    top: 5,
    height: 20,
    width: 20,
    left: 5,
    overflow: "hidden",
  },
  registerToBe: {
    marginLeft: 20,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  setting1: {
    marginTop: 10,
    color: Color.main1,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "left",
  },
  icon24NavNotification: {
    top: 6,
    overflow: "hidden",
  },
  groupIcon: {
    top: 366,
    left: 305,
    width: 10,
    height: 10,
  },
  accountParent: {
    top: 125,
    left: 32,
    justifyContent: "center",
    position: "absolute",
  },
  button1Child: {
    top: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
  },
  textField: {
    top: "32%",
    left: "38.91%",
    color: Color.white,
    position: "absolute",
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  button1: {
    top: 751,
    left: 54,
    width: 275,
    height: 50,
    position: "absolute",
  },
  home: {
    top: 23,
    lineHeight: 18,
    fontSize: FontSize.newDescriptionLabelField_size,
    color: Color.main2,
    width: 92,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  vectorIcon1: {
    marginTop: -20.25,
    marginLeft: -9.5,
    top: "50%",
    left: "50%",
    width: 18,
    height: 18,
    position: "absolute",
  },
  homeParent: {
    height: 41,
    width: 92,
  },
  index: {
    color: Color.main2,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  icroundHealthAndSafetyIcon: {
    left: 37,
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  indexParent: {
    height: 46,
    width: 92,
  },
  icon24NavNotification1: {
    overflow: "hidden",
  },
  account1: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    color: Color.main1,
  },
  footer: {
    bottom: 0,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 64,
    justifyContent: "center",
    width: 375,
    left: 0,
    backgroundColor: Color.white,
  },
  setting: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 885,
    overflow: "hidden",
    width: "100%",
  },
});

export default Setting;
