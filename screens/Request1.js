import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Request1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.request, styles.iconLayout1]}>
      <View style={styles.requestChild} />
      <View style={[styles.button2, styles.buttonLayout]}>
        <View style={[styles.button2Child, styles.childPosition]} />
        <Text style={[styles.textField, styles.qunLMFlexBox]}>Add request</Text>
      </View>
      <View style={styles.instanceParent}>
        <Pressable
          style={styles.groupPressableLayout}
          onPress={() => navigation.navigate("Request1")}
        >
          <View style={styles.instanceChildShadowBox} />
          <Image
            style={[styles.instanceItem, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-34624354.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Mari Bones</Text>
            <Text style={styles.text}>11/03/2023</Text>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupChild, styles.groupBg]} />
              <Text style={styles.goMarketplace}>Go marketplace</Text>
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={[styles.groupChild, styles.groupBg]} />
              <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
            </View>
            <Text style={[styles.daysLeftTo, styles.ongoingTypo]} />
          </View>
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupChildPosition]} />
            <Text style={[styles.ongoing, styles.ongoingTypo]}>Ongoing</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.groupPressableLayout]}
          onPress={() => navigation.navigate("Request1")}
        >
          <View style={styles.instanceChildShadowBox} />
          <Image
            style={[styles.instanceItem, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-34624354.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Mari Bones</Text>
            <Text style={styles.text}>16/02/2023</Text>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupChild, styles.groupBg]} />
              <Text style={styles.goMarketplace}>Go marketplace</Text>
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={[styles.groupChild, styles.groupBg]} />
              <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
            </View>
            <Text
              style={[styles.daysLeftTo, styles.ongoingTypo]}
            >{`5 days left to write a review `}</Text>
          </View>
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupChildPosition]} />
            <Text style={[styles.ongoing, styles.ongoingTypo]}>Done</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.groupPressable, styles.groupPressableLayout]}
          onPress={() => navigation.navigate("Request1")}
        >
          <View style={styles.instanceChildShadowBox} />
          <Image
            style={[styles.instanceItem, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-34624354.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Mathieu James</Text>
            <Text style={styles.text}>10/02/2023</Text>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupChild, styles.groupBg]} />
              <Text style={styles.goMarketplace}>Health checking</Text>
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={[styles.groupChild, styles.groupBg]} />
              <Text style={[styles.cooking2, styles.cookingTypo]}>
                Gardening
              </Text>
            </View>
            <Text
              style={[styles.daysLeftTo, styles.ongoingTypo]}
            >{`17 days left to write a review `}</Text>
          </View>
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupChildPosition]} />
            <Text style={[styles.ongoing, styles.ongoingTypo]}>Done</Text>
          </View>
        </Pressable>
      </View>
      <Pressable
        style={[styles.rectangleParent8, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Suggest")}
      >
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
        <Text style={[styles.suggest, styles.suggestPosition]}>Suggest</Text>
      </Pressable>
      <View style={[styles.vectorParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild7, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34624339.png")}
        />
        <Text style={styles.suggestPosition}>Request</Text>
      </View>
      <View style={[styles.header1, styles.groupChildPosition]}>
        <View style={styles.header1Child} />
        <View style={[styles.statusBarwhitebase, styles.text3Position]}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/background1.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/battery-icon1.png")}
            />
            <Text style={[styles.text3, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon1.png")}
          />
          <Text style={[styles.text4, styles.textFlexBox]}>9:41 AM</Text>
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi1.png")}
          />
          <Text style={[styles.gs, styles.textFlexBox]}>GS</Text>
          <Image
            style={[styles.signalIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/signal1.png")}
          />
        </View>
        <View style={[styles.rectangleParent9, styles.childPosition]}>
          <View style={[styles.instanceChild3, styles.childPosition]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/chevronleft1.png")}
            />
          </Pressable>
          <Text style={[styles.qunLM, styles.qunLMFlexBox]}>
            Booking Elderly Sitter
          </Text>
        </View>
        <Pressable
          style={styles.chat1}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-1.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.button21, styles.buttonLayout]}>
        <View style={[styles.button2Child, styles.childPosition]} />
        <Text style={[styles.textField, styles.qunLMFlexBox]}>Add request</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  buttonLayout: {
    height: 50,
    width: 275,
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
  qunLMFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 14,
    marginTop: 3,
  },
  groupBg: {
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_8xs,
  },
  cookingTypo: {
    color: Color.main2,
    fontSize: FontSize.size_5xs,
    top: "14.29%",
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "center",
    position: "absolute",
  },
  ongoingTypo: {
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.main1,
  },
  groupLayout: {
    height: 18,
    width: 50,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  groupPressableLayout: {
    height: 100,
    width: 315,
  },
  groupChildLayout: {
    height: 30,
    width: 100,
    position: "absolute",
  },
  suggestPosition: {
    left: 21,
    top: 6,
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  text3Position: {
    left: "0%",
    top: "0%",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    color: Color.black,
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  requestChild: {
    top: 111,
    left: 15,
    width: 345,
    height: 681,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  button2Child: {
    top: "0%",
    backgroundColor: Color.main1,
    height: "100%",
    borderRadius: Border.br_8xs,
  },
  textField: {
    top: "32%",
    left: "33.45%",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  button2: {
    bottom: 35,
    left: 44,
  },
  instanceChildShadowBox: {
    borderWidth: 1,
    borderColor: "#3f497f",
    borderStyle: "solid",
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
    position: "absolute",
    width: "100%",
    backgroundColor: Color.main4,
  },
  instanceItem: {
    height: "80%",
    width: "25.4%",
    top: "10%",
    right: "71.43%",
    bottom: "10%",
    left: "3.17%",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  mariBones: {
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    color: Color.main1,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  text: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    marginTop: 3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.main1,
  },
  groupChild: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  goMarketplace: {
    width: "89.55%",
    left: "5.63%",
    alignItems: "center",
    display: "flex",
    color: Color.main2,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_5xs,
    top: "14.29%",
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
  },
  rectangleGroup: {
    width: 71,
  },
  cooking: {
    left: "13.33%",
  },
  rectangleContainer: {
    width: 45,
  },
  daysLeftTo: {
    marginTop: 3,
  },
  mariBonesParent: {
    top: 10,
    left: 101,
    justifyContent: "center",
    position: "absolute",
  },
  groupInner: {
    height: 18,
    width: 50,
    position: "absolute",
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_8xs,
  },
  ongoing: {
    top: 3,
    left: 5,
    position: "absolute",
  },
  groupView: {
    top: 9,
    left: 254,
  },
  groupPressable: {
    marginTop: 15,
  },
  cooking2: {
    left: "4.44%",
  },
  instanceParent: {
    top: 137,
    left: 30,
    position: "absolute",
  },
  groupChild6: {
    borderTopLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.seagreen_100,
    left: 0,
    top: 0,
  },
  suggest: {
    opacity: 0.7,
  },
  rectangleParent8: {
    left: 85,
    top: 92,
    width: 100,
  },
  groupChild7: {
    left: 0,
    top: 0,
  },
  vectorParent: {
    left: 190,
    top: 92,
    width: 100,
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
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
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
    bottom: "14.28%",
    left: "55.86%",
    right: "0%",
    position: "absolute",
  },
  text3: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
    color: Color.black,
    fontSize: FontSize.size_xs,
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
    width: 8,
    height: 12,
    opacity: 0.45,
  },
  text4: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    color: Color.black,
    fontSize: FontSize.size_xs,
    top: "15%",
    height: "70%",
    fontWeight: "500",
  },
  wifiIcon: {
    width: 12,
    height: 8,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
    fontFamily: FontFamily.sFUITextRegular,
    color: Color.black,
    fontSize: FontSize.size_xs,
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
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  instanceChild3: {
    top: "0%",
    backgroundColor: Color.main1,
    height: "100%",
  },
  icon: {
    height: "100%",
  },
  chevronLeft: {
    left: 16,
    top: 20,
    width: 16,
    height: 16,
    position: "absolute",
  },
  qunLM: {
    top: 11,
    left: 93,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
  },
  rectangleParent9: {
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
    height: 70,
    position: "absolute",
  },
  button21: {
    top: 727,
    left: -2030,
  },
  request: {
    flex: 1,
    height: 812,
    backgroundColor: Color.main4,
    overflow: "hidden",
  },
});

export default Request1;
