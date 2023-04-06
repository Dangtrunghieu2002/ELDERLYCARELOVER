import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Request2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.request, styles.iconLayout1]}>
      <View style={styles.header1}>
        <View style={[styles.header1Child, styles.childPosition]} />
        <View style={[styles.statusBarwhitebase, styles.childPosition]}>
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
        <View style={[styles.rectangleParent, styles.instanceChildPosition]}>
          <View style={[styles.instanceChild, styles.instanceChildPosition]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.navigate("Request")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/chevronleft1.png")}
            />
          </Pressable>
          <Text style={[styles.qunLM, styles.elderlyTypo1]}>
            Request Deetail
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
      <View style={[styles.requestChild, styles.childLayout]} />
      <View style={[styles.elderlyStatusParent, styles.elderlyParentLayout]}>
        <Text style={[styles.elderlyStatus, styles.elderlyTypo]}>
          Elderly Status
        </Text>
        <View style={[styles.elderlysNameParent, styles.parentPosition]}>
          <Text style={[styles.elderlysName, styles.sarahFlexBox]}>
            Elderly’s Name
          </Text>
          <Text style={[styles.age, styles.yearsFlexBox]}>Age</Text>
          <Text style={[styles.age, styles.yearsFlexBox]}>Diseases</Text>
          <Text style={[styles.age, styles.yearsFlexBox]}>Note</Text>
        </View>
        <View style={[styles.sarahKimParent, styles.parentPosition]}>
          <Text style={[styles.sarahKim, styles.sarahTypo]}>Sarah Kim</Text>
          <Text style={[styles.yearsOld, styles.sarahTypo]}>65 years old</Text>
          <Text style={[styles.yearsOld, styles.sarahTypo]}>Diseases</Text>
          <Text style={[styles.yearsOld, styles.sarahTypo]}>Note</Text>
        </View>
      </View>
      <View
        style={[
          styles.elderlySitterRequirementParent,
          styles.elderlyParentLayout,
        ]}
      >
        <Text style={[styles.elderlySitterRequirement, styles.elderlyTypo]}>
          Elderly Sitter Requirement
        </Text>
        <View style={[styles.sarahKimParent, styles.parentPosition]}>
          <Text style={[styles.sarahKim1, styles.sarahTypo]}>Sarah Kim</Text>
          <Text style={[styles.yearsOld1, styles.sarahTypo]}>65 years old</Text>
          <Text style={[styles.yearsOld1, styles.sarahTypo]}>Diseases</Text>
          <Text style={[styles.yearsOld, styles.sarahTypo]}>Cooking</Text>
        </View>
        <View style={[styles.elderlysNameParent, styles.parentPosition]}>
          <Text style={[styles.elderlysName, styles.sarahFlexBox]}>Age</Text>
          <Text style={[styles.age, styles.yearsFlexBox]}>Gender</Text>
          <Text style={[styles.age, styles.yearsFlexBox]}>
            Year of Experience
          </Text>
          <Text style={[styles.age, styles.yearsFlexBox]}>Skills</Text>
        </View>
      </View>
      <Text style={[styles.thereIs0, styles.elderlyTypo]}>
        There is 0 sitter apply.
      </Text>
      <View style={[styles.requestInner, styles.requestInnerLayout]}>
        <View style={[styles.jobDetailParent, styles.requestInnerLayout]}>
          <Text style={[styles.elderlySitterRequirement, styles.elderlyTypo]}>
            Job Detail
          </Text>
          <View style={[styles.sarahKimParent, styles.parentPosition]}>
            <Text style={[styles.sarahKim, styles.sarahTypo]}>11/03/2023</Text>
            <Text style={[styles.yearsOld, styles.sarahTypo]}>
              10:00 - 13:00
            </Text>
            <Text style={[styles.hoChiMinh, styles.addressFlexBox]}>
              Ho Chi Minh city, District 3, 279 Le Hong Phong
            </Text>
            <Text style={[styles.yearsOld, styles.sarahTypo]}>$115</Text>
            <Text style={[styles.yearsOld1, styles.sarahTypo]}>$115</Text>
          </View>
          <View style={[styles.elderlysNameParent, styles.parentPosition]}>
            <Text style={[styles.elderlysName, styles.sarahFlexBox]}>Date</Text>
            <Text style={[styles.age, styles.yearsFlexBox]}>Time</Text>
            <Text style={[styles.address, styles.addressFlexBox]}>Address</Text>
            <Text style={[styles.age, styles.yearsFlexBox]}>Offered Price</Text>
            <Text style={[styles.age, styles.yearsFlexBox]}>
              Job Description
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.button3}
        onPress={() => navigation.navigate("Request2")}
      >
        <View style={[styles.button31, styles.childPosition]}>
          <View style={[styles.button3Child, styles.childLayout]} />
          <Text style={[styles.textField, styles.elderlyTypo]}>
            Edit Detail
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  childPosition: {
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
  elderlyTypo1: {
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
  },
  childLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  elderlyParentLayout: {
    height: 133,
    width: 325,
    left: 25,
    position: "absolute",
  },
  elderlyTypo: {
    fontSize: FontSize.size_mini,
    color: Color.main1,
    position: "absolute",
  },
  parentPosition: {
    justifyContent: "center",
    top: 23,
    position: "absolute",
  },
  sarahFlexBox: {
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  yearsFlexBox: {
    marginTop: 10,
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  sarahTypo: {
    width: 210,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
  },
  requestInnerLayout: {
    height: 183,
    width: 325,
    position: "absolute",
  },
  addressFlexBox: {
    height: 40,
    marginTop: 10,
    alignItems: "center",
    color: Color.main1,
    display: "flex",
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
  text1: {
    width: "12.8%",
    left: "43.73%",
    fontWeight: "500",
    fontFamily: FontFamily.sFUITextMedium,
    display: "flex",
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
    width: 16,
    height: 16,
    position: "absolute",
  },
  qunLM: {
    top: 11,
    left: 118,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    color: Color.main4,
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
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
    left: 0,
    top: 0,
    position: "absolute",
  },
  requestChild: {
    top: 89,
    width: 345,
    height: 527,
    left: 15,
    backgroundColor: Color.white,
  },
  elderlyStatus: {
    left: 10,
    color: Color.main1,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    top: 0,
  },
  elderlysName: {
    width: 115,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.main1,
  },
  age: {
    width: 115,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    color: Color.main1,
  },
  elderlysNameParent: {
    left: 0,
  },
  sarahKim: {
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.main1,
  },
  yearsOld: {
    marginTop: 10,
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.main1,
  },
  sarahKimParent: {
    left: 115,
  },
  elderlyStatusParent: {
    top: 104,
  },
  elderlySitterRequirement: {
    color: Color.main1,
    left: 15,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    top: 0,
  },
  sarahKim1: {
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  yearsOld1: {
    marginTop: 10,
    height: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  elderlySitterRequirementParent: {
    top: 247,
  },
  thereIs0: {
    top: 583,
    left: 40,
    color: Color.main1,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  hoChiMinh: {
    width: 210,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
  },
  address: {
    width: 115,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
  },
  jobDetailParent: {
    left: 0,
    top: 0,
  },
  requestInner: {
    top: 390,
    left: 25,
    height: 183,
  },
  button3Child: {
    borderStyle: "solid",
    borderColor: "#539165",
    borderWidth: 1,
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  textField: {
    top: "32%",
    left: "36.36%",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.main1,
    textAlign: "center",
  },
  button31: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  button3: {
    top: 742,
    left: 53,
    width: 275,
    height: 50,
    position: "absolute",
  },
  request: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
  },
});

export default Request2;
