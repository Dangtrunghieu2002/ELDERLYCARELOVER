import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <Pressable
        style={styles.component19Parent}
        onPress={() => navigation.navigate("OverviewHealthIndex1")}
      >
        <View style={styles.componentLayout}>
          <View style={[styles.component19Child, styles.childPosition]} />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heart1.png")}
          />
          <Text style={[styles.sarahKimsHeart, styles.sarahTypo]}>
            Sarah Kim’s heart rate is 88 bpm.
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>13:45</Text>
            <Text style={[styles.text1, styles.textTypo]}>23/01/2023</Text>
          </View>
        </View>
        <View style={[styles.component22, styles.componentLayout]}>
          <View style={[styles.component19Child, styles.childPosition]} />
          <Text style={[styles.sarahKimsHeart, styles.sarahTypo]}>
            Sarah Kim’s blood pressure is 97%.
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>12:45</Text>
            <Text style={[styles.text1, styles.textTypo]}>23/01/2023</Text>
          </View>
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/blood-pressure.png")}
          />
        </View>
        <View style={[styles.component22, styles.componentLayout]}>
          <View style={[styles.component21Child, styles.childPosition]} />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heart1.png")}
          />
          <Text style={styles.sarahTypo}>
            <Text style={styles.sarahKimsHeartContainer1}>
              <Text
                style={styles.sarahKimsHeart1}
              >{`Sarah Kim’s heart rate is `}</Text>
              <Text style={styles.text4}>{`130 `}</Text>
              <Text style={styles.sarahKimsHeart1}>bpm.</Text>
            </Text>
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>11:45</Text>
            <Text style={[styles.text1, styles.textTypo]}>23/01/2023</Text>
          </View>
        </View>
        <View style={[styles.component22, styles.componentLayout]}>
          <View style={[styles.component19Child, styles.childPosition]} />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heart1.png")}
          />
          <Text style={[styles.sarahKimsHeart, styles.sarahTypo]}>
            Sarah Kim’s heart rate is 89 bpm.
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>9:45</Text>
            <Text style={[styles.text1, styles.textTypo]}>23/01/2023</Text>
          </View>
        </View>
        <View style={[styles.component22, styles.componentLayout]}>
          <View style={[styles.component19Child, styles.childPosition]} />
          <Text style={[styles.sarahKimsHeart, styles.sarahTypo]}>
            Sarah Kim’s blood pressure is 99%.
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>8:45</Text>
            <Text style={[styles.text1, styles.textTypo]}>23/01/2023</Text>
          </View>
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/blood-pressure.png")}
          />
        </View>
        <View style={[styles.component22, styles.componentLayout]}>
          <View style={[styles.component19Child, styles.childPosition]} />
          <Text style={[styles.sarahKimsHeart, styles.sarahTypo]}>
            Sarah Kim’s blood pressure is 93%.
          </Text>
          <View style={styles.parent}>
            <Text style={[styles.text, styles.textTypo]}>7:45</Text>
            <Text style={[styles.text1, styles.textTypo]}>23/01/2023</Text>
          </View>
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/blood-pressure.png")}
          />
        </View>
      </Pressable>
      <View style={styles.footer}>
        <Pressable
          style={styles.homeParent}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
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
            source={require("../assets/icroundhealthandsafety1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("Notification")}
        >
          <Text style={[styles.notification1, styles.indexPosition]}>
            Notification
          </Text>
          <Image
            style={[styles.icon24NavNotification, styles.icon24Position]}
            resizeMode="cover"
            source={require("../assets/icon-24-nav-notification2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("Setting")}
        >
          <Text style={[styles.index, styles.indexPosition]}>Account</Text>
          <Image
            style={styles.icon24Position}
            resizeMode="cover"
            source={require("../assets/icon-24-nav-account.png")}
          />
        </Pressable>
      </View>
      <View style={styles.header2}>
        <View style={[styles.rectangleParent, styles.text13Position]}>
          <View style={styles.groupChild} />
          <View style={[styles.statusBarwhitebase, styles.text13Position]}>
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
              <Text style={[styles.text13, styles.textFlexBox]}>58 %</Text>
            </View>
            <Image
              style={styles.bluetoothIcon}
              resizeMode="cover"
              source={require("../assets/bluetooth-icon.png")}
            />
            <Text style={[styles.text14, styles.textFlexBox]}>9:41 AM</Text>
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
          <View style={[styles.rectangleGroup, styles.instanceChildPosition]}>
            <View
              style={[styles.instanceChild, styles.instanceChildPosition]}
            />
            <Image
              style={styles.chevronLeftIcon}
              resizeMode="cover"
              source={require("../assets/chevronleft2.png")}
            />
            <Text style={[styles.qunLM, styles.homeFlexBox]}>Sign up</Text>
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
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-12.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.main4,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  sarahTypo: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: "23.81%",
    top: "18.75%",
    width: "71.43%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textTypo: {
    height: 10,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.main1,
  },
  componentLayout: {
    height: 80,
    width: 315,
  },
  homeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  indexPosition: {
    lineHeight: 20,
    top: 26,
    textAlign: "center",
    fontSize: FontSize.newDescriptionLabelField_size,
    width: 92,
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
  text13Position: {
    left: "0%",
    top: "0%",
  },
  chargePosition: {
    bottom: "15%",
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "flex-end",
    color: Color.black,
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
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
  goodMorningPosition: {
    color: Color.white,
    left: "29.33%",
    textAlign: "left",
    position: "absolute",
  },
  component19Child: {
    borderColor: "#539165",
  },
  heartIcon: {
    height: "56.25%",
    width: "14.29%",
    top: "22.5%",
    right: "80.95%",
    bottom: "21.25%",
    left: "4.76%",
    position: "absolute",
  },
  sarahKimsHeart: {
    color: Color.main1,
  },
  text: {
    width: 42,
  },
  text1: {
    width: 93,
    marginLeft: 5,
  },
  parent: {
    height: "12.5%",
    width: "44.44%",
    top: "68.75%",
    right: "31.75%",
    bottom: "18.75%",
    flexDirection: "row",
    left: "23.81%",
    position: "absolute",
  },
  component22: {
    marginTop: 15,
  },
  component21Child: {
    borderColor: "#e2091a",
  },
  sarahKimsHeart1: {
    color: Color.main1,
  },
  text4: {
    color: Color.red,
  },
  sarahKimsHeartContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  component19Parent: {
    top: 130,
    left: 30,
    position: "absolute",
  },
  home: {
    top: 23,
    lineHeight: 18,
    color: Color.main2,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.newDescriptionLabelField_size,
    textAlign: "center",
    width: 92,
    left: 0,
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
  notification1: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.main1,
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
    width: 375,
    left: 0,
    backgroundColor: Color.white,
    flexDirection: "row",
    alignItems: "center",
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
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    top: "0%",
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
  text13: {
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
    height: 13,
    opacity: 0.45,
  },
  text14: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    top: "15%",
    height: "70%",
    color: Color.black,
    fontWeight: "500",
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
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  instanceChild: {
    top: "0%",
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
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
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
    display: "none",
  },
  rectangleGroup: {
    height: "80%",
    top: "20%",
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
    left: "29.33%",
    fontFamily: FontFamily.interMedium,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
  },
  goodMorning: {
    top: "47%",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_xs,
    left: "29.33%",
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
    width: 375,
    left: 0,
    position: "absolute",
  },
  notification: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.main4,
  },
});

export default Notification1;
