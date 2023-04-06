import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <View style={[styles.rectangleParent, styles.groupChildShadowBox]}>
        <View style={[styles.groupChild, styles.groupChildPosition1]} />
        <View style={[styles.groupChild, styles.groupChildPosition1]} />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/rectangle-142848.png")}
        />
        <Text style={[styles.ketoLikeDietMay, styles.ketoLikeDietMayLayout]}>
          ‘Keto-like’ diet may be associated with a higher risk of heart
          disease, according to new research
        </Text>
        <Text style={[styles.aLowCarbHighFat, styles.aLowCarbHighFatLayout]}>
          A low-carb, high-fat “keto-like” diet may be linked to higher levels
          of “bad”...
        </Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupChildShadowBox]}>
        <View style={[styles.groupChild, styles.groupChildPosition1]} />
        <Image
          style={styles.groupInner}
          resizeMode="cover"
          source={require("../assets/rectangle-1428481.png")}
        />
        <Text style={[styles.ketoLikeDietMay, styles.ketoLikeDietMayLayout]}>
          Bempedoic acid improved heart health in patients who can’t tolerate
          statins, study finds
        </Text>
        <Text style={[styles.aLowCarbHighFat, styles.aLowCarbHighFatLayout]}>
          Bempedoic acid may be an alternative for people who need to lower
          their...
        </Text>
      </View>
      <Text style={[styles.news, styles.newsTypo]}>News</Text>
      <Text style={[styles.showMore, styles.showTypo]}>Show more</Text>
      <Text style={[styles.showMore1, styles.showTypo]}>Show more</Text>
      <Text style={[styles.promotion, styles.newsTypo]}>Promotion</Text>
      <View style={styles.rectangleContainer}>
        <View style={[styles.groupChild1, styles.groupChildPosition1]} />
        <View style={[styles.healthIndexParent, styles.parentFlexBox]}>
          <Pressable
            onPress={() => navigation.navigate("OverviewHealthIndex2")}
          >
            <Text style={styles.healthIndex1Typo}>Health Index</Text>
          </Pressable>
          <Pressable
            style={styles.connection}
            onPress={() => navigation.navigate("Connections")}
          >
            <Text style={styles.healthIndex1Typo}>Connection</Text>
          </Pressable>
          <Text style={[styles.elderlySitter, styles.healthIndex1Typo]}>
            Elderly Sitter
          </Text>
          <Pressable
            style={styles.connection}
            onPress={() => navigation.navigate("Setting")}
          >
            <Text style={styles.healthIndex1Typo}>Pill Reminder</Text>
          </Pressable>
        </View>
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <Pressable
            style={styles.groupLayout}
            onPress={() => navigation.navigate("OverviewHealthIndex2")}
          >
            <View style={[styles.groupChild2, styles.groupLayout]} />
            <Image
              style={[styles.medicalFile1Icon, styles.aLowCarbHighFatLayout]}
              resizeMode="cover"
              source={require("../assets/medicalfile-1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.wrapper, styles.groupLayout]}
            onPress={() => navigation.navigate("Connections")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-8374.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.wrapper, styles.groupLayout]}
            onPress={() => navigation.navigate("Suggest")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-8376.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.wrapper, styles.groupLayout]}
            onPress={() => navigation.navigate("PillReminder1")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/group-8377.png")}
            />
          </Pressable>
        </View>
        <Text style={[styles.yourFavorite, styles.groupParentPosition]}>
          Your favorite
        </Text>
      </View>
      <View style={[styles.header2, styles.footerPosition]}>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupChild3, styles.groupPosition]} />
          <View style={[styles.statusBarwhitebase, styles.groupPosition]}>
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
          <View style={[styles.rectangleParent1, styles.instanceChildPosition]}>
            <View
              style={[styles.instanceChild, styles.instanceChildPosition]}
            />
            <Image
              style={styles.chevronLeftIcon}
              resizeMode="cover"
              source={require("../assets/chevronleft2.png")}
            />
            <Text style={styles.qunLM}>Sign up</Text>
          </View>
        </View>
        <Pressable
          style={[styles.ellipsePressable, styles.chargePosition]}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            style={[styles.icon3, styles.iconLayout]}
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
            style={[styles.icon3, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-14.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild4, styles.groupChildPosition]} />
        <Image
          style={styles.groupChild5}
          resizeMode="cover"
          source={require("../assets/rectangle-34624336.png")}
        />
        <View style={[styles.groupChild6, styles.groupChildPosition]} />
        <Text style={styles.discount30Until}>
          Discount 30% until 23/05/2023
        </Text>
        <Text style={[styles.limited, styles.payNowTypo]}>Limited</Text>
        <Text style={[styles.payNow, styles.payNowTypo]}>Pay now</Text>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild4, styles.groupChildPosition]} />
        <Image
          style={styles.groupChild5}
          resizeMode="cover"
          source={require("../assets/rectangle-346243361.png")}
        />
        <View style={[styles.groupChild6, styles.groupChildPosition]} />
        <Text
          style={styles.womensDayBargain}
        >{`Women’s Day, bargain to health check `}</Text>
        <Text style={[styles.booking, styles.payNowTypo]}>Booking</Text>
      </View>
      <View style={[styles.footer, styles.footerPosition]}>
        <Pressable
          style={styles.homeParent}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        >
          <Text style={[styles.index, styles.home1Typo]}>Index</Text>
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
          <Text style={[styles.index, styles.home1Typo]}>Notification</Text>
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
          <Text style={[styles.index, styles.home1Typo]}>Account</Text>
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
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  groupChildPosition1: {
    left: 0,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  ketoLikeDietMayLayout: {
    width: 235,
    alignItems: "center",
    display: "flex",
    textAlign: "justify",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
  },
  aLowCarbHighFatLayout: {
    height: 30,
    position: "absolute",
  },
  newsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    color: Color.main1,
  },
  showTypo: {
    left: 291,
    textAlign: "right",
    fontFamily: FontFamily.newDescriptionLabelField,
    color: Color.main1,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  parentFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  healthIndex1Typo: {
    height: 15,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.main1,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    width: 80,
  },
  groupParentPosition: {
    left: 20,
    position: "absolute",
  },
  groupLayout: {
    height: 50,
    width: 50,
  },
  footerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupPosition: {
    left: "0%",
    top: "0%",
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
  textFlexBox: {
    alignItems: "flex-end",
    color: Color.black,
    textAlign: "left",
    display: "flex",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  instanceChildPosition: {
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.main1,
    position: "absolute",
    width: "100%",
  },
  goodMorningPosition: {
    color: Color.white,
    left: "29.33%",
    textAlign: "left",
    position: "absolute",
  },
  rectangleParentLayout: {
    height: 146,
    top: 544,
    width: 170,
    position: "absolute",
  },
  groupChildPosition: {
    width: 170,
    left: 0,
    position: "absolute",
  },
  payNowTypo: {
    fontSize: FontSize.size_5xs,
    top: 130,
    color: Color.white,
    fontFamily: FontFamily.newDescriptionLabelField,
    position: "absolute",
  },
  home1Typo: {
    fontSize: FontSize.newDescriptionLabelField_size,
    width: 92,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  icon24Position: {
    left: 34,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    top: 0,
    height: 100,
    width: 355,
  },
  groupInner: {
    borderRadius: Border.br_9xs,
    height: 80,
    width: 80,
    top: 10,
    left: 10,
    position: "absolute",
  },
  ketoLikeDietMay: {
    top: 15,
    left: 105,
    height: 40,
    color: Color.main1,
    fontFamily: FontFamily.interMedium,
    width: 235,
    alignItems: "center",
    display: "flex",
    textAlign: "justify",
    fontWeight: "500",
    lineHeight: 15,
    position: "absolute",
  },
  aLowCarbHighFat: {
    top: 60,
    left: 104,
    color: Color.gray,
    fontFamily: FontFamily.newDescriptionLabelField,
    width: 235,
    alignItems: "center",
    display: "flex",
    textAlign: "justify",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    height: 30,
  },
  rectangleParent: {
    top: 291,
    height: 100,
    width: 355,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 10,
    position: "absolute",
  },
  rectangleGroup: {
    top: 406,
    height: 100,
    width: 355,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: 10,
    position: "absolute",
  },
  news: {
    top: 268,
    left: 30,
    textAlign: "left",
    position: "absolute",
  },
  showMore: {
    top: 270,
    textAlign: "right",
  },
  showMore1: {
    top: 524,
    textAlign: "right",
  },
  promotion: {
    top: 521,
    left: 30,
    textAlign: "left",
    position: "absolute",
  },
  groupChild1: {
    height: 115,
    top: 23,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    width: 355,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  connection: {
    marginLeft: 5,
  },
  elderlySitter: {
    marginLeft: 5,
  },
  healthIndexParent: {
    top: 103,
    width: 335,
    left: 10,
    position: "absolute",
  },
  groupChild2: {
    borderStyle: "solid",
    borderColor: "#539165",
    borderWidth: 1,
    backgroundColor: Color.main1,
    borderRadius: Border.br_8xs,
    left: 0,
    position: "absolute",
    top: 0,
  },
  medicalFile1Icon: {
    width: 30,
    height: 30,
    top: 10,
    left: 10,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    marginLeft: 35,
  },
  groupParent: {
    top: 43,
    width: 315,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  yourFavorite: {
    textAlign: "left",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    color: Color.main1,
    top: 0,
  },
  rectangleContainer: {
    top: 115,
    height: 138,
    width: 355,
    left: 10,
    position: "absolute",
  },
  groupChild3: {
    height: "76%",
    bottom: "24%",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    right: "0%",
    position: "absolute",
    backgroundColor: Color.white,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "0%",
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
  text1: {
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
    color: Color.main4,
    display: "none",
    textAlign: "center",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParent1: {
    height: "80%",
    top: "20%",
  },
  groupView: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  icon3: {
    height: "100%",
    width: "100%",
  },
  ellipsePressable: {
    left: "10.67%",
    top: "35%",
    right: "76%",
    width: "13.33%",
    height: "50%",
  },
  communityHealthcare: {
    top: "62%",
    fontSize: FontSize.size_mini,
    left: "29.33%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  goodMorning: {
    top: "47%",
    fontFamily: FontFamily.newDescriptionLabelField,
    left: "29.33%",
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
    top: 0,
    height: 100,
  },
  groupChild4: {
    height: 140,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    top: 0,
  },
  groupChild5: {
    top: 7,
    left: 3,
    width: 164,
    height: 105,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChild6: {
    top: 111,
    borderBottomRightRadius: Border.br_8xs,
    borderBottomLeftRadius: Border.br_8xs,
    height: 35,
    backgroundColor: Color.main1,
  },
  discount30Until: {
    height: 12,
    width: 156,
    fontSize: FontSize.size_3xs,
    top: 116,
    left: 7,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  limited: {
    left: 7,
    top: 130,
    textAlign: "left",
  },
  payNow: {
    left: 131,
    textAlign: "right",
  },
  rectangleParent2: {
    left: 10,
  },
  womensDayBargain: {
    height: 24,
    width: 156,
    fontSize: FontSize.size_3xs,
    left: 7,
    top: 116,
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  booking: {
    left: 132,
    textAlign: "right",
  },
  rectangleParent3: {
    left: 195,
  },
  home1: {
    lineHeight: 18,
    top: 23,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    fontSize: FontSize.newDescriptionLabelField_size,
    color: Color.main1,
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
    top: 26,
    lineHeight: 20,
    color: Color.main2,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  icroundHealthAndSafetyIcon: {
    left: 37,
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  indexParent: {
    height: 46,
    width: 92,
  },
  icon24NavNotification: {
    overflow: "hidden",
  },
  footer: {
    bottom: 0,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 64,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.white,
  },
  home: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
