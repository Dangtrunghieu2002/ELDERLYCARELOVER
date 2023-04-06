import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Connections = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.connections, styles.iconLayout1]}>
      <Pressable
        style={styles.frameParent}
        onPress={() => navigation.navigate("ChatWithFriend")}
      >
        <View style={styles.rectangleLayout}>
          <View style={styles.frameChildShadowBox} />
          <Image
            style={[styles.frameItem, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-346243541.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Mari Bones</Text>
            <Text style={styles.text}>0927 264 913</Text>
            <Text style={[styles.children, styles.childrenTypo]}>Children</Text>
          </View>
          <Image
            style={styles.frameInner}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.frameChildShadowBox} />
          <Image
            style={[styles.frameItem, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-346243541.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Nova Amanda</Text>
            <Text style={styles.text}>Siblings</Text>
            <Text style={styles.childrenTypo}>Children</Text>
          </View>
          <Image
            style={styles.frameInner}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.frameChildShadowBox} />
          <Image
            style={[styles.frameItem, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-346243541.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Amelia Harper</Text>
            <Text style={styles.text}>0294 482 482</Text>
            <Text style={[styles.children, styles.childrenTypo]}>Children</Text>
          </View>
          <Image
            style={styles.frameInner}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={styles.frameChildShadowBox} />
          <Image
            style={[styles.frameItem, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-346243541.png")}
          />
          <View style={styles.mariBonesParent}>
            <Text style={styles.mariBones}>Noah Benjamin</Text>
            <Text style={styles.text}>0192 371 810</Text>
            <Text style={[styles.children, styles.childrenTypo]}>Aunty</Text>
          </View>
          <Image
            style={styles.frameInner}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
        </View>
      </Pressable>
      <View style={styles.header1}>
        <View style={styles.header1Child} />
        <View style={[styles.statusBarwhitebase, styles.text3Position]}>
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
            <Text style={[styles.text3, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text4, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleParent1, styles.childPosition]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.qunLM, styles.qunLMFlexBox]}>Connections</Text>
        </View>
        <Pressable
          style={styles.chat1}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-14.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.addFriend1}
        onPress={() => navigation.navigate("FriendRequest")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/addfriend-1.png")}
        />
      </Pressable>
      <Text style={styles.friendRequest}>Friend request</Text>
      <View style={styles.button2}>
        <View style={[styles.button2Child, styles.childPosition]} />
        <Text style={[styles.textField, styles.qunLMFlexBox]}>Add friend</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  childrenTypo: {
    fontFamily: FontFamily.newDescriptionLabelField,
    marginTop: 3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  rectangleLayout: {
    height: 70,
    width: 315,
    backgroundColor: Color.white,
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
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_xs,
    textAlign: "left",
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
  frameChildShadowBox: {
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
    borderRadius: Border.br_8xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  children: {
    color: Color.main1,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  mariBonesParent: {
    top: 10,
    left: 101,
    justifyContent: "center",
    position: "absolute",
  },
  frameInner: {
    top: 29,
    left: 289,
    borderRadius: Border.br_12xs_1,
    width: 7,
    height: 13,
    position: "absolute",
  },
  rectangleGroup: {
    marginTop: 12,
  },
  frameParent: {
    top: 121,
    left: 30,
    alignItems: "center",
    position: "absolute",
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
  text3: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
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
    width: 8,
    opacity: 0.45,
    height: 13,
  },
  text4: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    top: "15%",
    height: "70%",
    display: "flex",
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
    display: "flex",
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
    width: 16,
    height: 16,
    position: "absolute",
  },
  qunLM: {
    top: 11,
    left: 132,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
  },
  rectangleParent1: {
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
  addFriend1: {
    left: 335,
    top: 91,
    width: 20,
    height: 20,
    position: "absolute",
  },
  friendRequest: {
    top: 96,
    left: 242,
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
    color: Color.main1,
    position: "absolute",
  },
  button2Child: {
    borderRadius: Border.br_8xs,
    top: "0%",
    backgroundColor: Color.main1,
    height: "100%",
  },
  textField: {
    top: "32%",
    left: "35.64%",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  button2: {
    bottom: 20,
    left: 50,
    width: 275,
    height: 50,
    position: "absolute",
  },
  connections: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
  },
});

export default Connections;
