import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Request3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.request}>
      <View style={[styles.header1, styles.groupPosition]}>
        <View style={[styles.header1Child, styles.textChildPosition]} />
        <View style={[styles.statusBarwhitebase, styles.textChildPosition]}>
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
            <Text style={[styles.text, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon1.png")}
          />
          <Text style={[styles.text1, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleParent, styles.childPosition]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft1.png")}
            />
          </Pressable>
          <Text style={styles.qunLM}>Request to Book</Text>
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
      <View style={[styles.requestChild, styles.childLayout]} />
      <View style={styles.elderlyStatusParent}>
        <Text style={styles.elderlyTypo}>Elderly Status</Text>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>Sarah Kim</Text>
        </View>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>65 years old</Text>
          <Image
            style={[styles.textField3Item, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-16.png")}
          />
        </View>
        <View style={styles.textField1}>
          <Image
            style={[styles.textField3Item, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-16.png")}
          />
          <View style={[styles.textField1Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.frameViewFlexBox]}>
            <Text style={styles.textTypo}>High blood sugar</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Text style={[styles.kindOfHard, styles.kindOfHardPosition]}>
              Kind of hard
            </Text>
          </View>
        </View>
        <Text style={[styles.elderlySitterRequirement, styles.elderlyTypo]}>
          Elderly Sitter Requirement
        </Text>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>Age</Text>
          <Image
            style={[styles.textField3Item, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-16.png")}
          />
        </View>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>Gender</Text>
          <Image
            style={[styles.textField3Item, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-16.png")}
          />
        </View>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textTypo]}>
            Year of Experience
          </Text>
          <Image
            style={[styles.textField3Item, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-16.png")}
          />
        </View>
        <View style={styles.textField1}>
          <Image
            style={[styles.textField3Item, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-16.png")}
          />
          <View style={[styles.textField1Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.frameViewFlexBox]}>
            <Text style={styles.textTypo}>Cooking</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <Text style={[styles.elderlySitterRequirement, styles.elderlyTypo]}>
          Job Detail
        </Text>
        <View style={styles.textField1}>
          <Image
            style={[styles.textField3Item, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-16.png")}
          />
          <View style={[styles.textField1Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.frameViewFlexBox]}>
            <Text style={styles.textTypo}>11/03/2023</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <View style={[styles.textField13Inner, styles.kindOfHardPosition]}>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <Text style={styles.textTypo}>10:00 - 13:00</Text>
              <Image
                style={styles.mdirequiredIcon}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <View style={[styles.textField13Inner, styles.kindOfHardPosition]}>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <Text style={styles.textTypo}>Vietnam</Text>
              <Image
                style={styles.mdirequiredIcon}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <View style={[styles.textField13Inner, styles.kindOfHardPosition]}>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <Text style={styles.textTypo}>Ho Chi Minh city</Text>
              <Image
                style={styles.mdirequiredIcon}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <View style={[styles.textField13Inner, styles.kindOfHardPosition]}>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <Text style={styles.textTypo}>District 3</Text>
              <Image
                style={styles.mdirequiredIcon}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.textField1}>
          <View style={[styles.textField1Child, styles.childBorder]} />
          <View style={[styles.textField13Inner, styles.kindOfHardPosition]}>
            <View style={[styles.frameView, styles.frameViewFlexBox]}>
              <Text style={styles.textTypo}>279 Le Hong Phong</Text>
              <Image
                style={styles.mdirequiredIcon}
                resizeMode="cover"
                source={require("../assets/mdirequired.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.textField1}>
          <Image
            style={[styles.textField3Item, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/vector-16.png")}
          />
          <View style={[styles.textField1Child, styles.childBorder]} />
          <View style={[styles.textFillParent, styles.frameViewFlexBox]}>
            <Text style={styles.textTypo}>$35/hr</Text>
            <Image
              style={styles.mdirequiredIcon}
              resizeMode="cover"
              source={require("../assets/mdirequired.png")}
            />
          </View>
        </View>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupChild, styles.groupLayout]} />
            <Text style={[styles.kindOfHard, styles.kindOfHardPosition]}>
              Job Description
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.button1}
        onPress={() => navigation.navigate("Request1")}
      >
        <View style={[styles.button1Child, styles.childLayout]} />
        <Text style={styles.textField}>Continue</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
  },
  textChildPosition: {
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
    width: "100%",
  },
  childLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: "#539165",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.newDescriptionLabelField,
    color: Color.main1,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  frameViewFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  groupLayout: {
    height: 80,
    width: 315,
  },
  kindOfHardPosition: {
    left: 20,
    top: 11,
    position: "absolute",
  },
  elderlyTypo: {
    color: Color.main1,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "left",
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
    backgroundColor: Color.white,
    bottom: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  backgroundIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
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
  text: {
    width: "50.45%",
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
    textAlign: "left",
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
    height: 12,
    opacity: 0.45,
    width: 8,
  },
  text1: {
    width: "12.8%",
    left: "43.73%",
    fontWeight: "500",
    fontFamily: FontFamily.sFUITextMedium,
    display: "flex",
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_xs,
    top: "15%",
    height: "70%",
  },
  wifiIcon: {
    width: 12,
    height: 8,
  },
  gs: {
    width: "4.53%",
    left: "11.73%",
    fontFamily: FontFamily.sFUITextRegular,
    display: "flex",
    textAlign: "left",
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
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  chevronLeft: {
    left: 16,
    top: 20,
    width: 16,
    height: 16,
    position: "absolute",
  },
  qunLM: {
    left: 116,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    color: Color.main4,
    textAlign: "center",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    top: 11,
    position: "absolute",
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
    position: "absolute",
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
  requestChild: {
    top: 90,
    left: 15,
    width: 345,
    height: 990,
    backgroundColor: Color.white,
  },
  textField1Child: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  textFill: {
    top: "27.5%",
    left: "6.35%",
    position: "absolute",
  },
  textField1: {
    height: 40,
    marginTop: 10,
    width: 315,
  },
  textField3Item: {
    height: "17.4%",
    width: "4.13%",
    top: "41.25%",
    right: "6.19%",
    bottom: "41.35%",
    left: "89.68%",
    borderRadius: Border.br_12xs_1,
    position: "absolute",
  },
  mdirequiredIcon: {
    marginLeft: 3,
    height: 8,
    width: 8,
    overflow: "hidden",
  },
  textFillParent: {
    marginTop: -9,
    marginLeft: -137.5,
    top: "50%",
    left: "50%",
    width: 62,
  },
  groupChild: {
    borderWidth: 1,
    borderColor: "#539165",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
    left: 0,
    top: 0,
  },
  kindOfHard: {
    fontFamily: FontFamily.newDescriptionLabelField,
    color: Color.main1,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    marginTop: 10,
  },
  elderlySitterRequirement: {
    marginTop: 10,
  },
  frameView: {
    left: 0,
    top: 0,
  },
  textField13Inner: {
    height: 18,
    width: 62,
  },
  elderlyStatusParent: {
    top: 105,
    left: 30,
    justifyContent: "center",
    position: "absolute",
  },
  button1Child: {
    backgroundColor: Color.main1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  textField: {
    top: "32%",
    left: "37.45%",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.white,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  button1: {
    bottom: 20,
    left: 50,
    width: 275,
    height: 50,
    position: "absolute",
  },
  request: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 1165,
    overflow: "hidden",
    width: "100%",
  },
});

export default Request3;
