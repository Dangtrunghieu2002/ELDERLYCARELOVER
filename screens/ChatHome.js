import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ChatHome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatHome}>
      <View style={[styles.footer, styles.footerFlexBox]}>
        <Pressable
          style={styles.homeParent}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
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
          <Text style={[styles.index, styles.homeFlexBox]}>Index</Text>
          <Image
            style={[styles.icroundHealthAndSafetyIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/icroundhealthandsafety1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("Notification")}
        >
          <Text style={[styles.index, styles.homeFlexBox]}>Notification</Text>
          <Image
            style={[styles.icon24NavNotification, styles.icon24Position]}
            resizeMode="cover"
            source={require("../assets/icon-24-nav-notification1.png")}
          />
        </Pressable>
        <Pressable
          style={styles.indexParent}
          onPress={() => navigation.navigate("Setting")}
        >
          <Text style={[styles.index, styles.homeFlexBox]}>Account</Text>
          <Image
            style={styles.icon24Position}
            resizeMode="cover"
            source={require("../assets/icon-24-nav-account.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.header1Wrapper, styles.footerLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.header1Wrapper, styles.footerLayout]}>
          <View style={[styles.header1Child, styles.textPosition]} />
          <View style={[styles.statusBarwhitebase, styles.textPosition]}>
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
            <View
              style={[styles.instanceChild, styles.instanceChildPosition]}
            />
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
            <Text style={[styles.qunLM, styles.homeFlexBox]}>Chat</Text>
          </View>
          <Image
            style={[styles.chat1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chat-1.png")}
          />
        </View>
      </Pressable>
      <View style={styles.chatHomeChild} />
      <Image
        style={[styles.search1Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/search-1.png")}
      />
      <Text style={[styles.search, styles.searchTypo]}>Search</Text>
      <View style={styles.component10Parent}>
        <Pressable
          style={styles.componentLayout}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <View style={[styles.ellipseParent, styles.textPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1619.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.kaydenBlake, styles.youOkDealFlexBox]}>
                Kayden Blake
              </Text>
              <Text style={[styles.youOkDeal, styles.youOkDealFlexBox]}>
                You: OK, deal!
              </Text>
            </View>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={styles.textTypo}>16:24</Text>
              <Text style={[styles.text3, styles.textTypo]}>23/02/2023</Text>
            </View>
          </View>
          <View style={styles.component10Child} />
        </Pressable>
        <Pressable
          style={[styles.component12, styles.componentLayout]}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <View style={[styles.ellipseParent, styles.textPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16191.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.kaydenBlake, styles.youOkDealFlexBox]}>
                Marie Bones
              </Text>
              <Text style={[styles.youOkDeal, styles.youOkDealFlexBox]}>
                I will do it best to take care your...
              </Text>
            </View>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={styles.textTypo}>15:04</Text>
              <Text style={[styles.text3, styles.textTypo]}>23/02/2023</Text>
            </View>
          </View>
          <View style={styles.component10Child} />
        </Pressable>
        <Pressable
          style={[styles.component12, styles.componentLayout]}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <View style={[styles.ellipseParent, styles.textPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1619.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.kaydenBlake, styles.youOkDealFlexBox]}>
                Christina Han
              </Text>
              <Text style={[styles.youOkDeal, styles.youOkDealFlexBox]}>
                You: But I need 3 hours, you can...
              </Text>
            </View>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={styles.textTypo}>06:24</Text>
              <Text style={[styles.text3, styles.textTypo]}>20/02/2023</Text>
            </View>
          </View>
          <View style={styles.component10Child} />
        </Pressable>
        <Pressable
          style={[styles.component12, styles.componentLayout]}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <View style={[styles.ellipseParent, styles.textPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16191.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.kaydenBlake, styles.youOkDealFlexBox]}>
                Anna James
              </Text>
              <Text style={[styles.youOkDeal, styles.youOkDealFlexBox]}>
                This requirement is kind of hard...
              </Text>
            </View>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={styles.textTypo}>14:05</Text>
              <Text style={[styles.text3, styles.textTypo]}>04/02/2023</Text>
            </View>
          </View>
          <View style={styles.component10Child} />
        </Pressable>
        <Pressable
          style={[styles.component12, styles.componentLayout]}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <View style={[styles.ellipseParent, styles.textPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1619.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.kaydenBlake, styles.youOkDealFlexBox]}>
                River Molly
              </Text>
              <Text style={[styles.youOkDeal, styles.youOkDealFlexBox]}>
                Not at all
              </Text>
            </View>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={styles.textTypo}>10:24</Text>
              <Text style={[styles.text3, styles.textTypo]}>01/02/2023</Text>
            </View>
          </View>
          <View style={styles.component10Child} />
        </Pressable>
        <Pressable
          style={[styles.component12, styles.componentLayout]}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <View style={[styles.ellipseParent, styles.textPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16191.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.kaydenBlake, styles.youOkDealFlexBox]}>
                Kayden Blake
              </Text>
              <Text style={[styles.youOkDeal, styles.youOkDealFlexBox]}>
                It is not the same
              </Text>
            </View>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={styles.textTypo}>16:24</Text>
              <Text style={[styles.text3, styles.textTypo]}>23/01/2023</Text>
            </View>
          </View>
          <View style={styles.component10Child} />
        </Pressable>
        <Pressable
          style={[styles.component12, styles.componentLayout]}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <View style={[styles.ellipseParent, styles.textPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1619.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.kaydenBlake, styles.youOkDealFlexBox]}>
                Charlie Atlas
              </Text>
              <Text style={[styles.youOkDeal, styles.youOkDealFlexBox]}>
                You: Consider it more
              </Text>
            </View>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={styles.textTypo}>11:24</Text>
              <Text style={[styles.text3, styles.textTypo]}>23/01/2023</Text>
            </View>
          </View>
          <View style={styles.component10Child} />
        </Pressable>
        <Pressable
          style={[styles.component12, styles.componentLayout]}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <View style={[styles.ellipseParent, styles.textPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-16191.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.kaydenBlake, styles.youOkDealFlexBox]}>
                Kayden Blake
              </Text>
              <Text style={[styles.youOkDeal, styles.youOkDealFlexBox]}>
                You: OK, deal!
              </Text>
            </View>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={styles.textTypo}>16:24</Text>
              <Text style={[styles.text3, styles.textTypo]}>22/01/2023</Text>
            </View>
          </View>
          <View style={styles.component10Child} />
        </Pressable>
        <Pressable
          style={[styles.component12, styles.componentLayout]}
          onPress={() => navigation.navigate("ChatWithFriend")}
        >
          <View style={[styles.ellipseParent, styles.textPosition]}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../assets/ellipse-1619.png")}
            />
            <View style={styles.parentSpaceBlock}>
              <Text style={[styles.kaydenBlake, styles.youOkDealFlexBox]}>
                Bailey Simon
              </Text>
              <Text style={[styles.youOkDeal, styles.youOkDealFlexBox]}>
                I need you to prepare all the things
              </Text>
            </View>
            <View style={[styles.parent, styles.parentSpaceBlock]}>
              <Text style={styles.textTypo}>16:24</Text>
              <Text style={[styles.text3, styles.textTypo]}>04/01/2023</Text>
            </View>
          </View>
          <View style={styles.component10Child} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  homeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  icon24Position: {
    left: 34,
    height: 24,
    width: 24,
    top: 0,
    position: "absolute",
  },
  footerLayout: {
    width: 375,
    left: 0,
  },
  textPosition: {
    left: "0%",
    top: "0%",
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
    display: "flex",
    textAlign: "left",
    color: Color.black,
    alignItems: "flex-end",
    fontSize: FontSize.size_xs,
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
  searchTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  youOkDealFlexBox: {
    color: Color.main1,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
  },
  parentSpaceBlock: {
    marginLeft: 10,
    justifyContent: "center",
  },
  textTypo: {
    width: 60,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    display: "flex",
    color: Color.main2,
    fontFamily: FontFamily.newDescriptionLabelField,
    alignItems: "center",
  },
  componentLayout: {
    width: 335,
    height: 50,
  },
  home: {
    top: 23,
    lineHeight: 18,
    color: Color.main2,
    textAlign: "center",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.newDescriptionLabelField_size,
    width: 92,
    left: 0,
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
    textAlign: "center",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.newDescriptionLabelField_size,
    width: 92,
    left: 0,
  },
  icroundHealthAndSafetyIcon: {
    left: 37,
    top: 0,
  },
  indexParent: {
    height: 46,
    width: 92,
  },
  icon24NavNotification: {
    overflow: "hidden",
  },
  footer: {
    top: 748,
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 64,
    width: 375,
    left: 0,
    backgroundColor: Color.white,
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
    width: "100%",
    backgroundColor: Color.white,
    position: "absolute",
  },
  backgroundIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
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
    alignItems: "flex-end",
    fontFamily: FontFamily.sFUITextRegular,
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
    height: 12,
    opacity: 0.45,
  },
  text1: {
    width: "12.8%",
    left: "43.73%",
    fontFamily: FontFamily.sFUITextMedium,
    fontWeight: "500",
    alignItems: "flex-end",
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
    alignItems: "flex-end",
    fontFamily: FontFamily.sFUITextRegular,
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
    left: 166,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.newStatus,
    color: Color.main4,
  },
  rectangleParent: {
    height: "73.68%",
    top: "26.32%",
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
  header1Wrapper: {
    height: 70,
    top: 0,
    position: "absolute",
  },
  chatHomeChild: {
    width: "84%",
    top: 90,
    right: "8%",
    left: "8%",
    borderRadius: Border.br_8xs,
    height: 50,
    backgroundColor: Color.white,
    position: "absolute",
  },
  search1Icon: {
    top: 103,
    left: 45,
  },
  search: {
    top: 107,
    left: 84,
    textAlign: "center",
    position: "absolute",
    color: Color.main2,
  },
  frameChild: {
    width: 40,
    height: 40,
  },
  kaydenBlake: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    width: 180,
    height: 20,
    fontWeight: "500",
  },
  youOkDeal: {
    width: 215,
    height: 15,
    marginTop: 3,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  text3: {
    marginTop: 5,
  },
  parent: {
    alignItems: "flex-end",
  },
  ellipseParent: {
    height: "80%",
    bottom: "20%",
    right: "0%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  component10Child: {
    height: "2%",
    width: "94.33%",
    top: "99%",
    right: "2.84%",
    bottom: "-1%",
    left: "2.84%",
    borderStyle: "solid",
    borderColor: "#539165",
    borderTopWidth: 1,
    opacity: 0.6,
    position: "absolute",
  },
  component12: {
    marginTop: 15,
  },
  component10Parent: {
    top: 160,
    left: 20,
    alignItems: "center",
    position: "absolute",
  },
  chatHome: {
    backgroundColor: Color.main4,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ChatHome;
