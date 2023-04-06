import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DangerNoti = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dangerNoti}>
      <View style={styles.header2}>
        <View style={[styles.rectangleParent, styles.button3ChildPosition]}>
          <View style={[styles.groupChild, styles.iconPosition]} />
          <View style={[styles.statusBarwhitebase, styles.iconPosition]}>
            <Image
              style={[styles.backgroundIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/background.png")}
            />
            <View style={[styles.charge, styles.chargePosition]}>
              <Image
                style={[styles.batteryIcon, styles.iconLayout]}
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
              style={[styles.signalIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/signal.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.instanceChildPosition]}>
            <View
              style={[styles.instanceChild, styles.instanceChildPosition]}
            />
            <Image
              style={styles.chevronLeftIcon}
              resizeMode="cover"
              source={require("../assets/chevronleft2.png")}
            />
            <Text style={[styles.qunLM, styles.qunLMTypo]}>Sign up</Text>
          </View>
        </View>
        <Pressable
          style={[styles.wrapper, styles.chargePosition]}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1595.png")}
          />
        </Pressable>
        <Text style={[styles.communityHealthcare, styles.goodMorningPosition]}>
          Community Healthcare
        </Text>
        <Text style={[styles.goodMorning, styles.goodMorningPosition]}>
          Good morning
        </Text>
        <Pressable
          style={styles.chat2}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-14.png")}
          />
        </Pressable>
      </View>
      <Image
        style={[styles.materialSymbolswarningOutliIcon, styles.button3Layout]}
        resizeMode="cover"
        source={require("../assets/materialsymbolswarningoutlinerounded.png")}
      />
      <Text style={[styles.sarahKimsHeartContainer, styles.qunLMTypo]}>
        <Text style={styles.sarahKimsHeartContainer1}>
          <Text
            style={styles.sarahKimsHeart}
          >{`Sarah Kim’s heart rate index is too high!
`}</Text>
          <Text style={styles.theLatestIndex}>
            The latest index is 130 bpm!
          </Text>
        </Text>
      </Text>
      <View style={styles.frameParent}>
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-8462.png")}
          />
          <Text style={[styles.callElderly, styles.textFieldClr]}>
            Call Elderly
          </Text>
        </View>
        <View style={styles.groupContainer}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-8461.png")}
          />
          <Text style={[styles.callElderly, styles.textFieldClr]}>
            Call Sitter
          </Text>
        </View>
        <View style={styles.groupContainer}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/group-8460.png")}
          />
          <Text style={[styles.callElderly, styles.textFieldClr]}>
            Measure again
          </Text>
        </View>
      </View>
      <Pressable
        style={[styles.button3, styles.button3Layout]}
        onPress={() => navigation.goBack()}
      >
        <View style={[styles.rectangleParent, styles.button3ChildPosition]}>
          <View style={[styles.button3Child, styles.button3ChildPosition]} />
          <Text style={[styles.textField, styles.textFieldClr]}>Skip</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button3ChildPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  iconPosition: {
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
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
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  instanceChildPosition: {
    backgroundColor: Color.main1,
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  qunLMTypo: {
    textAlign: "center",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    position: "absolute",
  },
  goodMorningPosition: {
    color: Color.white,
    left: "29.33%",
    textAlign: "left",
    position: "absolute",
  },
  button3Layout: {
    height: 50,
    position: "absolute",
  },
  textFieldClr: {
    color: Color.main1,
    textAlign: "center",
  },
  groupChild: {
    height: "76%",
    bottom: "24%",
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    left: "0%",
    top: "0%",
    width: "100%",
  },
  backgroundIcon: {
    top: "5%",
    bottom: "-5%",
    left: "0%",
    right: "0%",
    position: "absolute",
    height: "100%",
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
    height: 13,
    opacity: 0.45,
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
    left: "0%",
    top: "0%",
    width: "100%",
  },
  instanceChild: {
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
    lineHeight: 34,
    color: Color.main4,
    display: "none",
  },
  rectangleGroup: {
    height: "80%",
    top: "20%",
  },
  rectangleParent: {
    left: "0%",
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
  },
  goodMorning: {
    top: "47%",
    fontFamily: FontFamily.newDescriptionLabelField,
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
    top: -1,
    left: 0,
    width: 375,
    height: 100,
    position: "absolute",
  },
  materialSymbolswarningOutliIcon: {
    top: 293,
    left: 163,
    width: 50,
    overflow: "hidden",
  },
  sarahKimsHeart: {
    color: Color.red,
  },
  theLatestIndex: {
    color: Color.main2,
  },
  sarahKimsHeartContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  sarahKimsHeartContainer: {
    top: 373,
    left: 38,
    fontSize: FontSize.size_xl,
    width: 300,
    height: 52,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
  },
  frameChild: {
    width: 45,
    height: 45,
  },
  callElderly: {
    marginTop: 10,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  groupParent: {
    alignItems: "center",
  },
  groupContainer: {
    marginLeft: 25,
    alignItems: "center",
  },
  frameParent: {
    top: 657,
    left: 60,
    flexDirection: "row",
    position: "absolute",
  },
  button3Child: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: "#539165",
    borderWidth: 1,
    left: "0%",
  },
  textField: {
    top: "32%",
    left: "44%",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  button3: {
    top: 742,
    left: 50,
    width: 275,
  },
  dangerNoti: {
    backgroundColor: Color.gainsboro,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DangerNoti;
