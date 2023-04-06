import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PillReminder = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pillReminder}>
      <View style={styles.pillReminderChild} />
      <View style={styles.textField3Parent}>
        <View style={styles.textLayout}>
          <View style={[styles.textField3Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textFillTypo]}>Start date</Text>
          <Text style={[styles.textFill1, styles.textTypo]}>20/11/2022</Text>
        </View>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textFillTypo]}>End date</Text>
          <Text style={[styles.textFill3, styles.textTypo]}>23/12/2022</Text>
        </View>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textFillTypo]}>
            Total remind
          </Text>
          <Text style={[styles.textFill5, styles.textTypo]}>
            30 pills/ 10 days
          </Text>
        </View>
        <View style={styles.repeatOnParent}>
          <Text style={styles.textFillTypo}>Repeat on</Text>
          <View style={[styles.everydayParent, styles.parentFlexBox]}>
            <Text style={styles.everyday}>Everyday</Text>
            <View style={styles.rectangleParent}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/ellipse-1622.png")}
              />
            </View>
          </View>
          <View style={[styles.everydayParent, styles.parentFlexBox]}>
            <Text style={styles.everyday}>On specific days</Text>
            <View style={styles.rectangleParent}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <Image
                style={styles.groupItem}
                resizeMode="cover"
                source={require("../assets/ellipse-1622.png")}
              />
            </View>
          </View>
          <View style={[styles.instanceParent, styles.parentFlexBox]}>
            <View style={styles.component7Layout}>
              <Image
                style={[styles.instanceChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1599.png")}
              />
              <Text style={styles.text}>2</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1600.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>3</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1599.png")}
              />
              <Text style={styles.text}>4</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1599.png")}
              />
              <Text style={styles.text}>5</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1600.png")}
              />
              <Text style={[styles.text1, styles.text1Typo]}>6</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1599.png")}
              />
              <Text style={styles.text}>7</Text>
            </View>
            <View style={[styles.component7, styles.component7Layout]}>
              <Image
                style={[styles.instanceChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/ellipse-1599.png")}
              />
              <Text style={styles.text}>8</Text>
            </View>
          </View>
          <View style={[styles.textField6, styles.textLayout]}>
            <View style={[styles.textField3Child, styles.childBorder]} />
            <Text style={[styles.textFill, styles.textFillTypo]}>At time</Text>
            <Text style={[styles.textFill7, styles.textTypo]}>
              2 times/ days
            </Text>
          </View>
          <View style={[styles.everydayParent, styles.parentFlexBox]}>
            <View>
              <Text style={styles.text7Layout}>First time:</Text>
              <Text style={[styles.text7, styles.text7Layout]}>08:00</Text>
            </View>
            <View style={styles.doseParent}>
              <Text style={styles.doseLayout}>Dose:</Text>
              <Text style={[styles.text8, styles.doseLayout]}>1.00</Text>
            </View>
          </View>
          <View style={[styles.everydayParent, styles.parentFlexBox]}>
            <View>
              <Text style={styles.text7Layout}>Second time:</Text>
              <Text style={[styles.text7, styles.text7Layout]}>16:00</Text>
            </View>
            <View style={styles.doseParent}>
              <Text style={styles.doseLayout}>Dose:</Text>
              <Text style={[styles.text8, styles.doseLayout]}>1.50</Text>
            </View>
          </View>
        </View>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textFillTypo]}>
            Notification before
          </Text>
          <Text style={[styles.textFill9, styles.textTypo]}>05 minutes</Text>
        </View>
        <View style={[styles.textField4, styles.textLayout]}>
          <View style={[styles.textField3Child, styles.childBorder]} />
          <Text style={[styles.textFill, styles.textFillTypo]}>
            Delay notification
          </Text>
          <Text style={[styles.textFill11, styles.textTypo]}>
            03 times/05 minutes
          </Text>
        </View>
        <View style={styles.addImageParent}>
          <Text style={[styles.addImage, styles.header1Position]}>
            Add image
          </Text>
          <Image
            style={[styles.groupIcon, styles.header1Position]}
            resizeMode="cover"
            source={require("../assets/group-8430.png")}
          />
        </View>
      </View>
      <View style={styles.component8}>
        <View
          style={[styles.rectangleContainer, styles.groupPressablePosition]}
        >
          <View style={[styles.rectangleView, styles.rectanglePosition]} />
          <Text style={[styles.save, styles.saveTypo]}>Save</Text>
        </View>
        <Pressable
          style={[styles.groupPressable, styles.groupPressablePosition]}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.groupChild1} />
          <Text style={[styles.cancel, styles.saveTypo]}>Cancel</Text>
        </Pressable>
      </View>
      <Image
        style={styles.icroundFilterAltIcon}
        resizeMode="cover"
        source={require("../assets/icroundfilteralt.png")}
      />
      <View style={[styles.header1, styles.header1Position]}>
        <View style={[styles.header1Child, styles.childPosition]} />
        <View style={styles.statusBarwhitebase}>
          <Image
            style={[styles.instanceChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/battery-icon.png")}
            />
            <Text style={[styles.text11, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text12, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleParent1, styles.rectanglePosition]}>
          <View style={[styles.instanceChild3, styles.rectanglePosition]} />
          <Pressable
            style={[styles.chevronLeft, styles.groupChildLayout]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.qunLM, styles.text1Typo]}>Pill Reminder</Text>
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
  childBorder: {
    borderWidth: 1,
    borderColor: "#539165",
    borderStyle: "solid",
  },
  textFillTypo: {
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
    color: Color.main1,
  },
  textTypo: {
    textAlign: "right",
    color: Color.main1,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
    top: "27.5%",
    position: "absolute",
  },
  textLayout: {
    height: 40,
    width: 315,
  },
  parentFlexBox: {
    flexDirection: "row",
    marginTop: 8,
    alignItems: "center",
  },
  groupChildLayout: {
    height: 16,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  component7Layout: {
    height: 25,
    width: 25,
  },
  text1Typo: {
    color: Color.main4,
    textAlign: "center",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    position: "absolute",
  },
  text7Layout: {
    height: 15,
    width: 215,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.main1,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  doseLayout: {
    width: 100,
    height: 15,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: Color.main1,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  header1Position: {
    left: 0,
    position: "absolute",
  },
  groupPressablePosition: {
    width: "47.62%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.main1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  saveTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: "32%",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
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
  pillReminderChild: {
    top: 96,
    left: 15,
    width: 345,
    height: 709,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  textField3Child: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    borderRadius: Border.br_8xs,
  },
  textFill: {
    left: "6.35%",
    top: "27.5%",
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  textFill1: {
    left: "69.84%",
  },
  textFill3: {
    left: "68.89%",
  },
  textField4: {
    marginTop: 15,
  },
  textFill5: {
    left: "58.73%",
  },
  everyday: {
    width: 288,
    height: 18,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.main1,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
  },
  groupChild: {
    top: -1,
    left: -1,
    borderRadius: Border.br_6xs,
    width: 29,
    borderWidth: 1,
    borderColor: "#539165",
    borderStyle: "solid",
  },
  groupItem: {
    top: 1,
    left: 1,
    height: 12,
    width: 12,
    position: "absolute",
  },
  rectangleParent: {
    width: 27,
    height: 14,
  },
  everydayParent: {
    marginTop: 8,
    alignItems: "center",
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
  text: {
    height: "68.18%",
    width: "72.73%",
    top: "16%",
    left: "12%",
    textAlign: "center",
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: Color.main1,
    position: "absolute",
  },
  text1: {
    top: "20%",
    left: "32%",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    color: Color.main4,
  },
  component7: {
    marginLeft: 10,
  },
  instanceParent: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 315,
  },
  textFill7: {
    left: "64.76%",
  },
  textField6: {
    marginTop: 8,
  },
  text7: {
    marginTop: 2,
  },
  text8: {
    marginTop: 2,
  },
  doseParent: {
    alignItems: "center",
  },
  repeatOnParent: {
    justifyContent: "center",
    marginTop: 15,
  },
  textFill9: {
    left: "70.16%",
  },
  textFill11: {
    left: "48.89%",
  },
  addImage: {
    top: 0,
    left: 0,
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
    color: Color.main1,
  },
  groupIcon: {
    top: 23,
    height: 70,
    width: 130,
  },
  addImageParent: {
    height: 93,
    width: 130,
    marginTop: 15,
  },
  textField3Parent: {
    top: 111,
    left: 31,
    position: "absolute",
  },
  rectangleView: {
    top: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
  },
  save: {
    left: "38%",
    color: Color.white,
  },
  rectangleContainer: {
    left: "52.38%",
    right: "0%",
  },
  groupChild1: {
    borderWidth: 2,
    borderColor: "#539165",
    borderStyle: "solid",
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
  cancel: {
    left: "32%",
    color: Color.main1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    top: "32%",
  },
  groupPressable: {
    right: "52.38%",
    left: "0%",
  },
  component8: {
    bottom: 32,
    left: 30,
    height: 50,
    width: 315,
    position: "absolute",
  },
  icroundFilterAltIcon: {
    top: 91,
    left: 336,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
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
    left: "0%",
    backgroundColor: Color.white,
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
  text11: {
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
    bottom: "15%",
    left: "83.73%",
    position: "absolute",
  },
  bluetoothIcon: {
    width: 8,
    height: 13,
    opacity: 0.45,
  },
  text12: {
    width: "12.8%",
    left: "43.73%",
    fontWeight: "500",
    fontFamily: FontFamily.sFUITextMedium,
    top: "15%",
    height: "70%",
  },
  wifiIcon: {
    height: 9,
    width: 12,
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
    height: "26.32%",
    bottom: "73.68%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  instanceChild3: {
    top: "0%",
    height: "100%",
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
  },
  qunLM: {
    top: 11,
    left: 130,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
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
    width: 375,
    height: 76,
    top: 0,
    left: 0,
  },
  pillReminder: {
    flex: 1,
    height: 820,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.main4,
  },
});

export default PillReminder;
