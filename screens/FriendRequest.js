import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const FriendRequest = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.friendRequest, styles.iconLayout1]}>
      <Pressable
        style={styles.friendRequestInner}
        onPress={() => navigation.navigate("ChatWithFriend")}
      >
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.childPosition]} />
          <Image
            style={[styles.frameItem, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-346243541.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Mari Bones</Text>
            <Text style={[styles.text, styles.textTypo]}>0927 264 913</Text>
            <Text style={[styles.friendOfNova, styles.textTypo]}>
              Friend of Nova Amanda
            </Text>
          </View>
          <Image
            style={[styles.frameInner, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-9936.png")}
          />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            resizeMode="cover"
            source={require("../assets/group-9937.png")}
          />
        </View>
      </Pressable>
      <View style={styles.header1}>
        <View style={[styles.header1Child, styles.childPosition]} />
        <View style={[styles.statusBarwhitebase, styles.text1Position]}>
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
        <View style={[styles.rectangleGroup, styles.instanceChildPosition]}>
          <View style={[styles.instanceChild, styles.instanceChildPosition]} />
          <Pressable
            style={[styles.chevronLeft, styles.groupIconLayout]}
            onPress={() => navigation.navigate("Connections")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={styles.qunLM}>Friend Request</Text>
        </View>
        <Pressable
          style={styles.chat1}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-13.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  childPosition: {
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
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    marginTop: 3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.main1,
  },
  groupIconLayout: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  text1Position: {
    left: "0%",
    top: "0%",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  instanceChildPosition: {
    backgroundColor: Color.main1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  frameChild: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderStyle: "solid",
    borderColor: "#3f497f",
    borderWidth: 1,
    borderRadius: Border.br_8xs,
  },
  frameItem: {
    height: "80%",
    width: "17.78%",
    top: "10%",
    right: "79.05%",
    bottom: "10%",
    left: "3.17%",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  mariBones: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    textAlign: "left",
    color: Color.main1,
    fontWeight: "500",
  },
  text: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  friendOfNova: {
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  mariBonesParent: {
    top: 10,
    left: 101,
    justifyContent: "center",
    position: "absolute",
  },
  frameInner: {
    left: 289,
    top: 27,
    width: 16,
  },
  groupIcon: {
    left: 268,
    top: 27,
    width: 16,
  },
  rectangleParent: {
    width: 315,
    height: 70,
    backgroundColor: Color.white,
  },
  friendRequestInner: {
    top: 90,
    left: 30,
    alignItems: "center",
    position: "absolute",
  },
  header1Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: Color.white,
  },
  backgroundIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    maxWidth: "100%",
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
  text1: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
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
    height: 13,
    opacity: 0.45,
  },
  text2: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_xs,
    top: "15%",
    height: "70%",
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
    display: "flex",
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
  instanceChild: {
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
  },
  qunLM: {
    top: 11,
    left: 121,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
    textAlign: "center",
    position: "absolute",
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
    top: 0,
    left: 0,
    width: 375,
    height: 76,
    position: "absolute",
  },
  friendRequest: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
  },
});

export default FriendRequest;
