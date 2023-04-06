import * as React from "react";
import { Image, StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const OverviewHealthIndex2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.overviewHealthIndex}>
      <Pressable
        style={styles.teenyiconsadjustHorizontalA}
        onPress={() => navigation.navigate("SettingHealthIndexView1")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/teenyiconsadjusthorizontalaltsolid.png")}
        />
      </Pressable>
      <View style={styles.button1}>
        <View style={styles.button1Child} />
        <Text style={[styles.textField, styles.textFlexBox1]}>Measure now</Text>
      </View>
      <View style={styles.hrIndex1Parent}>
        <Pressable
          style={styles.hrIndex1}
          onPress={() => navigation.navigate("OverviewHealthIndex1")}
        >
          <View style={styles.heartRateParent}>
            <Text style={styles.spo2Typo}>Heart rate</Text>
            <Text style={styles.bpm}>(bpm)</Text>
          </View>
          <View style={[styles.minParent, styles.parentPosition]}>
            <Text style={[styles.min, styles.minLayout]}>Min</Text>
            <Text style={[styles.average, styles.text1Layout]}>Average</Text>
            <Text style={[styles.average, styles.text1Layout]}>Max</Text>
          </View>
          <Image
            style={[styles.hrIndex1Child, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/heart1.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textTypo]}>80</Text>
            <Text style={[styles.text1, styles.textTypo]}>80</Text>
            <Text style={[styles.text1, styles.textTypo]}>89</Text>
          </View>
        </Pressable>
        <View style={styles.indexShadowBox}>
          <View style={styles.heartRateParent}>
            <Text style={styles.spo2Typo}>Blood pressure</Text>
            <Text style={styles.bpm}>(mmHg)</Text>
          </View>
          <View style={[styles.minParent, styles.parentPosition]}>
            <Text style={[styles.min, styles.minLayout]}>Min</Text>
            <Text style={[styles.average, styles.text1Layout]}>Average</Text>
            <Text style={[styles.average, styles.text1Layout]}>Max</Text>
          </View>
          <Image
            style={[styles.hrIndex1Child, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textTypo]}>80/120</Text>
            <Text style={[styles.text1, styles.textTypo]}>80/126</Text>
            <Text style={[styles.text1, styles.textTypo]}>90/137</Text>
          </View>
          <Image
            style={[styles.bloodPressureIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/blood-pressure.png")}
          />
        </View>
        <View style={styles.indexShadowBox}>
          <View style={styles.heartRateParent}>
            <Text style={styles.spo2Typo}>SPO2</Text>
            <Text style={styles.bpm}>(%)</Text>
          </View>
          <View style={[styles.minParent, styles.parentPosition]}>
            <Text style={[styles.min, styles.minLayout]}>Min</Text>
            <Text style={[styles.average, styles.text1Layout]}>Average</Text>
            <Text style={[styles.average, styles.text1Layout]}>Max</Text>
          </View>
          <Image
            style={[styles.hrIndex1Child, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textTypo]}>96</Text>
            <Text style={[styles.text1, styles.textTypo]}>98</Text>
            <Text style={[styles.text1, styles.textTypo]}>99</Text>
          </View>
          <Image
            style={[styles.bloodPressureIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/spo2.png")}
          />
        </View>
        <View style={styles.indexShadowBox}>
          <View style={styles.heartRateParent}>
            <Text style={styles.spo2Typo}>Weight</Text>
            <Text style={styles.bpm}>(kg)</Text>
          </View>
          <View style={[styles.minParent, styles.parentPosition]}>
            <Text style={[styles.min, styles.minLayout]}>Min</Text>
            <Text style={[styles.average, styles.text1Layout]}>Average</Text>
            <Text style={[styles.average, styles.text1Layout]}>Max</Text>
          </View>
          <Image
            style={[styles.hrIndex1Child, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textTypo]}>45</Text>
            <Text style={[styles.text1, styles.textTypo]}>45</Text>
            <Text style={[styles.text1, styles.textTypo]}>46</Text>
          </View>
          <Image
            style={[styles.bloodPressureIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/weight.png")}
          />
        </View>
      </View>
      <Image
        style={styles.uilcalendarAltIcon}
        resizeMode="cover"
        source={require("../assets/uilcalendaralt.png")}
      />
      <Text style={[styles.viewOtherDay, styles.goodMorningTypo]}>
        View other day
      </Text>
      <View style={[styles.vectorParent, styles.text13FlexBox]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-20.png")}
        />
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.text13FlexBox]}>3</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.text13FlexBox]}>4</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.text13FlexBox]}>5</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1600.png")}
          />
          <Text style={[styles.text16, styles.qunLMTypo]}>6</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.text13FlexBox]}>7</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.text13FlexBox]}>8</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text13, styles.text13FlexBox]}>9</Text>
        </View>
        <Image
          style={[styles.frameItem, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-211.png")}
        />
      </View>
      <View style={[styles.header2, styles.footerPosition]}>
        <View style={[styles.rectangleParent, styles.instanceChildPosition]}>
          <View style={styles.groupChild} />
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
              <Text style={[styles.text20, styles.textFlexBox]}>58 %</Text>
            </View>
            <Image
              style={styles.bluetoothIcon}
              resizeMode="cover"
              source={require("../assets/bluetooth-icon.png")}
            />
            <Text style={[styles.text21, styles.textFlexBox]}>9:41 AM</Text>
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
          <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
            <View style={[styles.rectangleView, styles.rectanglePosition]} />
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
            style={[styles.icon1, styles.iconLayout]}
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
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-14.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.footer, styles.footerPosition]}>
        <Pressable
          style={styles.homeParent}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.home, styles.homeClr]}>Home</Text>
          <Image
            style={styles.vectorIcon}
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
            source={require("../assets/icroundhealthandsafety.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("Notification")}
        >
          <Text style={[styles.notification, styles.indexPosition]}>
            Notification
          </Text>
          <Image
            style={[styles.icon24NavNotification, styles.icon24Position]}
            resizeMode="cover"
            source={require("../assets/icon-24-nav-notification.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("Setting")}
        >
          <Text style={[styles.notification, styles.indexPosition]}>
            Account
          </Text>
          <Image
            style={styles.icon24Position}
            resizeMode="cover"
            source={require("../assets/icon-24-nav-account.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox1: {
    textAlign: "center",
    position: "absolute",
  },
  parentPosition: {
    left: 90,
    flexDirection: "row",
    position: "absolute",
  },
  minLayout: {
    height: 15,
    width: 70,
    textAlign: "left",
    alignItems: "center",
  },
  text1Layout: {
    marginLeft: 5,
    height: 15,
    width: 70,
    textAlign: "left",
    alignItems: "center",
  },
  frameChildLayout: {
    width: 7,
    borderRadius: Border.br_12xs_1,
    height: 13,
  },
  iconLayout1: {
    height: 45,
    width: 45,
    left: 15,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    display: "flex",
    color: Color.main1,
    lineHeight: 15,
  },
  goodMorningTypo: {
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_xs,
  },
  text13FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  qunLMTypo: {
    color: Color.main4,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  footerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  instanceChildPosition: {
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
  chargePosition: {
    bottom: "15%",
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "flex-end",
    color: Color.black,
    display: "flex",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectanglePosition: {
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    backgroundColor: Color.main1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  goodMorningPosition: {
    left: "29.33%",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
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
    left: 0,
    textAlign: "center",
    position: "absolute",
  },
  icon24Position: {
    left: 34,
    top: 0,
    height: 24,
    width: 24,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  teenyiconsadjustHorizontalA: {
    left: 20,
    top: 156,
    width: 22,
    height: 22,
    position: "absolute",
  },
  button1Child: {
    backgroundColor: Color.main1,
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  textField: {
    top: "32%",
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    left: "32%",
  },
  button1: {
    top: 633,
    left: 50,
    width: 275,
    height: 50,
    position: "absolute",
  },
  spo2Typo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.main1,
    fontFamily: FontFamily.newDescriptionLabelField,
    lineHeight: 15,
    fontSize: FontSize.size_mini,
  },
  bpm: {
    marginLeft: 8,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.main1,
    fontFamily: FontFamily.newDescriptionLabelField,
    lineHeight: 15,
  },
  heartRateParent: {
    top: 15,
    left: 75,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  min: {
    display: "flex",
    fontSize: FontSize.size_xs,
    color: Color.main1,
    fontFamily: FontFamily.newDescriptionLabelField,
    lineHeight: 15,
  },
  average: {
    display: "flex",
    fontSize: FontSize.size_xs,
    color: Color.main1,
    fontFamily: FontFamily.newDescriptionLabelField,
    lineHeight: 15,
  },
  minParent: {
    top: 40,
    alignItems: "center",
  },
  hrIndex1Child: {
    top: 39,
    left: 334,
    height: 13,
    position: "absolute",
  },
  heartIcon: {
    top: 23,
    height: 45,
    width: 45,
    left: 15,
  },
  text: {
    height: 15,
    width: 70,
    textAlign: "left",
    alignItems: "center",
    fontSize: FontSize.size_mini,
  },
  text1: {
    marginLeft: 5,
    height: 15,
    width: 70,
    textAlign: "left",
    alignItems: "center",
    fontSize: FontSize.size_mini,
  },
  parent: {
    top: 60,
  },
  hrIndex1: {
    height: 90,
    width: 355,
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
    overflow: "hidden",
  },
  bloodPressureIcon: {
    top: 22,
  },
  indexShadowBox: {
    marginTop: 20,
    height: 90,
    width: 355,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  hrIndex1Parent: {
    top: 193,
    left: 10,
    position: "absolute",
  },
  uilcalendarAltIcon: {
    top: 154,
    left: 331,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  viewOtherDay: {
    top: 162,
    left: 240,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    color: Color.main1,
    lineHeight: 15,
    position: "absolute",
  },
  frameChild: {
    height: 13,
  },
  instanceChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  text13: {
    height: "68.18%",
    width: "72.73%",
    top: "16%",
    left: "12%",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    display: "flex",
    color: Color.main1,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    position: "absolute",
  },
  ellipseParent: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  text16: {
    top: "20%",
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    left: "32%",
    color: Color.main4,
  },
  frameItem: {
    marginLeft: 10,
    height: 13,
  },
  vectorParent: {
    top: 119,
    left: 54,
    flexDirection: "row",
    position: "absolute",
  },
  groupChild: {
    height: "76%",
    bottom: "24%",
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
    right: "0%",
    top: "0%",
    position: "absolute",
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
  text20: {
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
    left: "83.73%",
    top: "15%",
    height: "70%",
  },
  bluetoothIcon: {
    width: 8,
    opacity: 0.45,
    height: 13,
  },
  text21: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    fontWeight: "500",
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
    height: "20%",
    bottom: "80%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  rectangleView: {
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
    display: "none",
  },
  rectangleGroup: {
    height: "80%",
    top: "20%",
  },
  rectangleParent: {
    left: "0%",
  },
  icon1: {
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
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
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
    height: 100,
  },
  home: {
    lineHeight: 18,
    fontSize: FontSize.newDescriptionLabelField_size,
    color: Color.main2,
    width: 92,
    left: 0,
    top: 23,
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
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
    color: Color.main1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 20,
    top: 26,
  },
  icroundHealthAndSafetyIcon: {
    left: 37,
    top: 0,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  indexParent: {
    height: 46,
    width: 92,
  },
  notification: {
    color: Color.main2,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  icon24NavNotification: {
    overflow: "hidden",
  },
  footer: {
    top: 748,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
    left: 0,
  },
  overviewHealthIndex: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default OverviewHealthIndex2;
