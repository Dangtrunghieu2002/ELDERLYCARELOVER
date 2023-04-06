import * as React from "react";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const PillReminder1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pillReminder}>
      <View
        style={[styles.pillReminderChild, styles.icroundFilterAltPosition]}
      />
      <Image
        style={styles.outOfStock1Icon}
        resizeMode="cover"
        source={require("../assets/outofstock-11.png")}
      />
      <Pressable
        style={[styles.icroundFilterAlt, styles.icroundFilterAltPosition]}
        onPress={() => navigation.navigate("Filter")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icroundfilteralt.png")}
        />
      </Pressable>
      <Text style={[styles.thereIsNo, styles.qunLMFlexBox]}>
        There is no pill reminder yet
      </Text>
      <View style={styles.header1}>
        <View style={[styles.header1Child, styles.textPosition]} />
        <View style={[styles.statusBarwhitebase, styles.textPosition]}>
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
        <View style={[styles.rectangleParent, styles.childPosition]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.qunLM, styles.qunLMFlexBox]}>Pill Reminder</Text>
        </View>
        <Pressable
          style={styles.chat1}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-13.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={styles.button3}
        onPress={() => navigation.navigate("PillReminder")}
      >
        <View style={[styles.button3Child, styles.childPosition]} />
        <Text style={[styles.textField, styles.qunLMFlexBox]}>
          Add reminder
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icroundFilterAltPosition: {
    top: 96,
    position: "absolute",
  },
  qunLMFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textPosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
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
  pillReminderChild: {
    left: 15,
    width: 345,
    height: 696,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
  },
  outOfStock1Icon: {
    top: 371,
    left: 143,
    width: 90,
    height: 90,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  icroundFilterAlt: {
    left: 336,
    width: 24,
    height: 24,
  },
  thereIsNo: {
    top: 473,
    left: 108,
    fontFamily: FontFamily.newDescriptionLabelField,
    color: Color.main1,
    lineHeight: 34,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  header1Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    bottom: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.white,
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
    display: "flex",
    textAlign: "left",
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
    height: 13,
    opacity: 0.45,
  },
  text1: {
    width: "12.8%",
    left: "43.73%",
    fontWeight: "500",
    fontFamily: FontFamily.sFUITextMedium,
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
    display: "flex",
    textAlign: "left",
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
  chevronLeft: {
    left: 16,
    top: 20,
    width: 16,
    height: 16,
    position: "absolute",
  },
  qunLM: {
    top: 11,
    left: 130,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
    lineHeight: 34,
    textAlign: "center",
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
  },
  icon2: {
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
  button3Child: {
    top: "0%",
    backgroundColor: Color.main1,
    height: "100%",
    borderRadius: Border.br_8xs,
  },
  textField: {
    top: "32%",
    left: "31.64%",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
  },
  button3: {
    bottom: 35,
    left: 50,
    width: 275,
    height: 50,
    position: "absolute",
  },
  pillReminder: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PillReminder1;
