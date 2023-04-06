import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SettingHealthIndexView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingHealthIndexView}>
      <View style={[styles.component8, styles.component8Position]}>
        <Pressable
          style={[styles.rectangleParent, styles.rectanglePosition]}
          onPress={() => navigation.navigate("OverviewHealthIndex")}
        >
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.save, styles.saveFlexBox]}>Save</Text>
        </Pressable>
        <Pressable
          style={[styles.rectangleGroup, styles.textPosition]}
          onPress={() => navigation.navigate("OverviewHealthIndex2")}
        >
          <View style={styles.groupItem} />
          <Text style={[styles.cancel, styles.indexTypo]}>Cancel</Text>
        </Pressable>
      </View>
      <View style={[styles.groupParent, styles.component8Position]}>
        <View style={styles.frameLayout}>
          <View style={[styles.vectorParent, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-142841.png")}
            />
            <Text style={[styles.heartRate, styles.rateLayout]}>
              Heart Rate
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-8378.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupBorder]} />
          <Image
            style={[styles.groupIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.vectorParent, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-142841.png")}
            />
            <Text style={[styles.heartRate, styles.rateLayout]}>
              Oxygen Saturation - SPO2
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-8378.png")}
            />
          </View>
          <Image
            style={[styles.groupIcon1, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <View style={[styles.groupInner, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.vectorParent, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-142841.png")}
            />
            <Text style={[styles.heartRate, styles.rateLayout]}>
              Blood Pressure
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-8378.png")}
            />
          </View>
          <Image
            style={[styles.bloodPressureIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bloodpressure.png")}
          />
          <View style={[styles.groupInner, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1428411.png")}
            />
            <Text style={[styles.respiratoryRate, styles.rateLayout]}>
              Respiratory Rate
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-83781.png")}
            />
          </View>
          <Image
            style={[styles.lungs1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/lungs-1.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-142841.png")}
            />
            <Text style={[styles.heartRate, styles.rateLayout]}>
              Body Temperature
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-8378.png")}
            />
          </View>
          <Image
            style={[
              styles.celciusCelsiusDegreeForeIcon,
              styles.iconGroupLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/celciuscelsiusdegreeforecasttemperaturethermometerweathericon1.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.vectorParent, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1428411.png")}
            />
            <Text style={[styles.respiratoryRate, styles.rateLayout]}>
              Height
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-83781.png")}
            />
          </View>
          <Image
            style={[styles.lungs1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/height-1.png")}
          />
          <View style={[styles.groupInner, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.vectorParent, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-142841.png")}
            />
            <Text style={[styles.heartRate, styles.rateLayout]}>Weight</Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-8378.png")}
            />
          </View>
          <Image
            style={[styles.lungs1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/dumbbell.png")}
          />
          <View style={[styles.groupInner, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1428411.png")}
            />
            <Text style={[styles.respiratoryRate, styles.rateLayout]}>
              Stress Monitoring
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-83781.png")}
            />
          </View>
          <Image
            style={[styles.lungs1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/stress.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1428411.png")}
            />
            <Text style={[styles.respiratoryRate, styles.rateLayout]}>
              Sleep Monitoring
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-83781.png")}
            />
          </View>
          <Image
            style={[styles.lungs1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/moon.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1428411.png")}
            />
            <Text style={[styles.respiratoryRate, styles.rateLayout]}>
              Blood Sugar
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-83781.png")}
            />
          </View>
          <Image
            style={[styles.lungs1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/bloodtest.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1428411.png")}
            />
            <Text style={[styles.respiratoryRate, styles.rateLayout]}>
              Electrocardiogram
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-83781.png")}
            />
          </View>
          <Image
            style={[styles.lungs1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heartrate.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.frameView, styles.frameViewFlexBox]}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1428411.png")}
            />
            <Text style={[styles.respiratoryRate, styles.rateLayout]}>
              Steps
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-83781.png")}
            />
          </View>
          <Image
            style={[styles.lungs1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/footsteps.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
      </View>
      <Text style={[styles.youChose4, styles.youChose4Typo]}>
        You chose 4 indicators
      </Text>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.header1ChildShadowBox]} />
        <Text style={[styles.settingWhichIndex, styles.chooseAtLeastPosition]}>
          Setting which index is show?
        </Text>
        <Text style={[styles.chooseAtLeast, styles.chooseAtLeastPosition]}>
          Choose at least 4 indexes to be measured and statisticized
        </Text>
      </View>
      <View style={[styles.header1, styles.footerPosition]}>
        <View style={[styles.header1Child, styles.header1ChildShadowBox]} />
        <View style={[styles.statusBarwhitebase, styles.textPosition]}>
          <Image
            style={[styles.backgroundIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsLayout]}>
            <Image
              style={[styles.batteryIcon, styles.iconGroupLayout]}
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
            style={[styles.signalIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleParent1, styles.childPosition]}>
          <View style={[styles.instanceChild, styles.childPosition]} />
          <Pressable
            style={styles.chevronLeft}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.qunLM, styles.saveFlexBox]}>Health Index</Text>
        </View>
        <Pressable
          style={styles.chat1}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconGroupLayout]}
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
  component8Position: {
    left: 30,
    position: "absolute",
  },
  rectanglePosition: {
    bottom: "0%",
    height: "100%",
  },
  childPosition: {
    backgroundColor: Color.main1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  saveFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  textPosition: {
    left: "0%",
    top: "0%",
  },
  indexTypo: {
    color: Color.main1,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  frameViewFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  frameChildLayout: {
    width: 30,
    height: 30,
  },
  rateLayout: {
    height: 19,
    width: 235,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    marginLeft: 20,
    lineHeight: 34,
    alignItems: "center",
    color: Color.main1,
    fontSize: FontSize.size_mini,
  },
  groupBorder: {
    borderTopWidth: 1,
    borderColor: "rgba(83, 145, 101, 0.5)",
    borderStyle: "solid",
    position: "absolute",
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  frameLayout: {
    height: 40,
    width: 315,
  },
  iconLayout: {
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  youChose4Typo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  rectangleLayout: {
    height: 80,
    width: 355,
  },
  header1ChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    position: "absolute",
  },
  chooseAtLeastPosition: {
    left: 20,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    color: Color.main1,
    width: 315,
    position: "absolute",
  },
  footerPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  gsLayout: {
    height: "70%",
    top: "15%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    color: Color.black,
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
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
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    top: "0%",
    height: "100%",
  },
  save: {
    left: "38%",
    color: Color.white,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_mini,
    top: "32%",
  },
  rectangleParent: {
    left: "52.38%",
    right: "0%",
    top: "0%",
    width: "47.62%",
    bottom: "0%",
    position: "absolute",
  },
  groupItem: {
    borderColor: "#539165",
    borderWidth: 2,
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
  cancel: {
    left: "32%",
    textAlign: "center",
    position: "absolute",
    fontSize: FontSize.size_mini,
    top: "32%",
    color: Color.main1,
  },
  rectangleGroup: {
    right: "52.38%",
    bottom: "0%",
    height: "100%",
    width: "47.62%",
    position: "absolute",
  },
  component8: {
    top: 931,
    height: 50,
    width: 315,
  },
  frameChild: {
    height: 30,
  },
  heartRate: {
    marginLeft: 20,
  },
  frameItem: {
    width: 10,
    height: 10,
    marginLeft: 20,
  },
  vectorParent: {
    height: "75%",
    bottom: "25%",
    left: "0%",
    top: "0%",
    right: "0%",
    width: "100%",
  },
  groupInner: {
    height: "2.5%",
    width: "100.32%",
    top: "98.75%",
    right: "-0.16%",
    bottom: "-1.25%",
    left: "-0.16%",
  },
  groupIcon: {
    height: "46.88%",
    bottom: "38.12%",
    left: "1.59%",
    right: "92.06%",
    width: "6.35%",
    maxWidth: "100%",
    position: "absolute",
    top: "15%",
  },
  groupIcon1: {
    height: "39.59%",
    top: "17.5%",
    bottom: "42.91%",
    left: "1.59%",
    right: "92.06%",
    width: "6.35%",
    maxWidth: "100%",
    position: "absolute",
  },
  frameGroup: {
    marginTop: 20,
  },
  bloodPressureIcon: {
    top: 4,
    left: 4,
    height: 22,
  },
  frameChild3: {
    opacity: 0.5,
    height: 30,
  },
  respiratoryRate: {
    opacity: 0.7,
    marginLeft: 20,
  },
  frameView: {
    left: 0,
    top: 0,
    height: 30,
    width: 315,
  },
  lungs1Icon: {
    top: 5,
    left: 5,
    height: 20,
  },
  groupChild2: {
    top: 40,
    width: 316,
    height: 1,
    left: 0,
  },
  celciusCelsiusDegreeForeIcon: {
    height: "47.5%",
    width: "5.87%",
    top: "12.5%",
    right: "91.9%",
    bottom: "40%",
    left: "2.22%",
    position: "absolute",
  },
  groupParent: {
    top: 211,
  },
  youChose4: {
    top: 191,
    left: 215,
    color: Color.gray,
    textAlign: "right",
    position: "absolute",
  },
  rectangleView: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    height: 80,
    width: 355,
    left: 0,
    top: 0,
    borderRadius: Border.br_8xs,
  },
  settingWhichIndex: {
    top: 15,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    height: 20,
    lineHeight: 34,
    fontSize: FontSize.size_mini,
  },
  chooseAtLeast: {
    top: 35,
    height: 35,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  rectangleContainer: {
    top: 96,
    left: 10,
    position: "absolute",
  },
  header1Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  backgroundIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
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
    fontFamily: FontFamily.sFUITextMedium,
    height: "70%",
    top: "15%",
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
    height: "70%",
    top: "15%",
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
    height: 16,
    position: "absolute",
  },
  qunLM: {
    top: 11,
    left: 132,
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
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
    height: 76,
    top: 0,
  },
  home: {
    top: 23,
    lineHeight: 18,
    fontSize: FontSize.newDescriptionLabelField_size,
    color: Color.main2,
    width: 92,
    left: 0,
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
  notification: {
    color: Color.main2,
    fontFamily: FontFamily.newDescriptionLabelField,
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
    backgroundColor: Color.white,
    width: 375,
    alignItems: "center",
    flexDirection: "row",
  },
  settingHealthIndexView: {
    flex: 1,
    height: 1065,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.main4,
  },
});

export default SettingHealthIndexView;
