import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ChatWithFriend = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatWithFriend}>
      <View style={[styles.chatWithFriendChild, styles.header1Position]} />
      <View style={styles.microphone1Parent}>
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/microphone-1.png")}
        />
        <Image
          style={[styles.attachFile1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/attachfile-1.png")}
        />
        <Image
          style={[styles.attachFile1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/smile-1.png")}
        />
        <View style={[styles.sentMail2Parent, styles.groupChildLayout2]}>
          <Image
            style={styles.sentMail2Icon}
            resizeMode="cover"
            source={require("../assets/sentmail-2.png")}
          />
          <View style={[styles.groupChild, styles.groupChildLayout2]} />
          <Text style={styles.typeHere}>Type here</Text>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.ellipseParent, styles.ellipseParentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1617.png")}
          />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.okDeal, styles.okDealPosition]}>Ok, deal!</Text>
        </View>
        <View style={styles.ellipseGroup}>
          <Image
            style={[styles.ellipseIcon, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1618.png")}
          />
          <View style={styles.rectangleView} />
          <View style={[styles.groupChild1, styles.groupChildPosition]} />
          <Text style={[styles.iSeeYour, styles.iSeeYourTypo]}>
            I see your uncle can’t move
          </Text>
          <Text style={[styles.itWillTake, styles.itWillTakePosition]}>
            It will take me more effort!
          </Text>
        </View>
        <View style={[styles.ellipseContainer, styles.ellipseParentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1617.png")}
          />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.okDeal, styles.okDealPosition]}>
            That ‘s much!
          </Text>
        </View>
        <View style={[styles.groupView, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild4, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1618.png")}
          />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Text style={[styles.iSeeYour, styles.iSeeYourTypo]}>
            But this will require lots of effort, so I offer 45 per hour!
          </Text>
        </View>
        <View style={[styles.ellipseParent1, styles.ellipseParentLayout]}>
          <Image
            style={[styles.groupItem, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1617.png")}
          />
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.okDeal, styles.okDealPosition]}>
            Ok, I will accept your request
          </Text>
        </View>
        <View style={[styles.ellipseParent2, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild4, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1618.png")}
          />
          <View style={[styles.groupChild5, styles.groupChildLayout]} />
          <Text style={[styles.iSeeYour, styles.iSeeYourTypo]}>
            Got it, I can do this! I have a nursing diploma.
          </Text>
        </View>
        <View style={[styles.ellipseParent3, styles.groupChildLayout]}>
          <Image
            style={[styles.groupChild10, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1617.png")}
          />
          <View style={[styles.groupChild11, styles.groupChildLayout]} />
          <Text style={[styles.iNeedSomeone, styles.okDealPosition]}>
            I need someone to take care my uncle in the hospital!
          </Text>
        </View>
        <View style={[styles.ellipseParent4, styles.groupChild13Position]}>
          <Image
            style={[styles.groupChild12, styles.groupChildLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1618.png")}
          />
          <View style={[styles.groupChild13, styles.groupChild13Position]} />
          <Text style={[styles.iSeeYour, styles.iSeeYourTypo]}>{`Hi,
Can you tell me more about your job’s requirement?`}</Text>
        </View>
      </View>
      <View style={[styles.header1, styles.header1Position]}>
        <View style={[styles.header1Child, styles.childPosition]} />
        <View style={styles.statusBarwhitebase}>
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
          <Text style={styles.qunLM}>Kayden Blake</Text>
        </View>
        <Image
          style={[styles.chat1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/chat-1.png")}
        />
      </View>
      <Image
        style={[styles.menuDots1Icon, styles.itWillTakePosition]}
        resizeMode="cover"
        source={require("../assets/menudots-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header1Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupChildLayout2: {
    height: 35,
    width: 240,
  },
  ellipseParentLayout: {
    height: 30,
    width: 250,
    left: 105,
    position: "absolute",
  },
  groupChildLayout1: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  groupLayout: {
    height: 25,
    position: "absolute",
  },
  okDealPosition: {
    width: 190,
    display: "flex",
    color: Color.main4,
    left: 10,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    position: "absolute",
  },
  groupChildPosition: {
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.gainsboro,
    left: 40,
    width: 210,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
  },
  iSeeYourTypo: {
    color: Color.main2,
    left: 50,
    width: 190,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  itWillTakePosition: {
    top: 31,
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    position: "absolute",
  },
  groupChild13Position: {
    height: 55,
    top: 0,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  gsPosition: {
    top: "15%",
    height: "70%",
  },
  textFlexBox: {
    alignItems: "flex-end",
    color: Color.black,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  chatWithFriendChild: {
    top: 734,
    height: 75,
    backgroundColor: Color.white,
  },
  attachFile1Icon: {
    marginLeft: 10,
  },
  sentMail2Icon: {
    top: 8,
    right: 10,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#797979",
    borderWidth: 1,
    top: 0,
    left: 0,
    position: "absolute",
  },
  typeHere: {
    left: 18,
    color: Color.gray,
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_xs,
    top: 10,
    position: "absolute",
  },
  sentMail2Parent: {
    marginLeft: 10,
  },
  microphone1Parent: {
    bottom: 20,
    left: 17,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  groupItem: {
    left: 220,
    width: 30,
    top: 0,
  },
  groupInner: {
    width: 210,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    backgroundColor: Color.main1,
    left: 0,
    top: 5,
  },
  okDeal: {
    textAlign: "right",
    top: 10,
  },
  ellipseParent: {
    top: 358,
  },
  ellipseIcon: {
    top: 21,
    left: 0,
  },
  rectangleView: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.gainsboro,
    left: 40,
    height: 25,
    width: 210,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    top: 26,
    height: 25,
    position: "absolute",
  },
  iSeeYour: {
    top: 5,
    position: "absolute",
  },
  itWillTake: {
    color: Color.main2,
    left: 50,
    width: 190,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_xs,
    alignItems: "center",
  },
  ellipseGroup: {
    top: 297,
    height: 51,
    width: 250,
    left: 0,
    position: "absolute",
  },
  ellipseContainer: {
    top: 255,
  },
  groupChild4: {
    top: 10,
    left: 0,
  },
  groupChild5: {
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.gainsboro,
    left: 40,
    width: 210,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    top: 0,
  },
  groupView: {
    top: 205,
    width: 250,
    left: 0,
  },
  ellipseParent1: {
    top: 164,
  },
  ellipseParent2: {
    top: 115,
    width: 250,
    left: 0,
  },
  groupChild10: {
    left: 220,
    width: 30,
    top: 10,
  },
  groupChild11: {
    width: 210,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
    backgroundColor: Color.main1,
    left: 0,
    top: 0,
  },
  iNeedSomeone: {
    top: 5,
    textAlign: "left",
  },
  ellipseParent3: {
    top: 65,
    width: 250,
    left: 105,
    height: 40,
  },
  groupChild12: {
    top: 25,
    left: 0,
  },
  groupChild13: {
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.gainsboro,
    left: 40,
    width: 210,
    borderTopRightRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_8xs,
  },
  ellipseParent4: {
    width: 250,
    left: 0,
  },
  groupParent: {
    top: 331,
    width: 355,
    height: 388,
    left: 10,
    position: "absolute",
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
    top: "0%",
    height: "100%",
    backgroundColor: Color.white,
    position: "absolute",
  },
  backgroundIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  batteryIcon: {
    height: "67.86%",
    width: "44.14%",
    top: "17.86%",
    bottom: "14.28%",
    left: "55.86%",
    right: "0%",
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
    height: 12,
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
    height: 8,
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
  instanceChild: {
    left: "0%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.main1,
    bottom: "0%",
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
    top: 11,
    left: 128,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    textAlign: "center",
    color: Color.main4,
    position: "absolute",
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    backgroundColor: Color.main1,
    bottom: "0%",
    position: "absolute",
  },
  chat1Icon: {
    height: "31.58%",
    width: "6.4%",
    top: "48.68%",
    right: "4%",
    bottom: "19.74%",
    left: "89.6%",
    display: "none",
  },
  header1: {
    height: 70,
    top: 0,
  },
  menuDots1Icon: {
    left: 331,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  chatWithFriend: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChatWithFriend;
