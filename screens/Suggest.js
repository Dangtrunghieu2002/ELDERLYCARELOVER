import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Suggest = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.suggest}>
      <View style={styles.suggestChild} />
      <Pressable
        style={[styles.rectangleParent, styles.groupPressableShadowBox]}
        onPress={() => navigation.navigate("ChatHome")}
      >
        <View style={[styles.instanceChild, styles.childPosition]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34624342.png")}
        />
        <View style={[styles.nameParent, styles.nameParentFlexBox]}>
          <Text style={styles.name}>Anna Helmano</Text>
          <Text style={styles.carer}>Carer</Text>
        </View>
        <View
          style={[
            styles.materialSymbolsstarParent,
            styles.materialParentPosition,
          ]}
        >
          <Image
            style={[styles.materialSymbolsstarIcon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar.png")}
          />
          <Text style={styles.text}>5.0/5</Text>
          <Text style={styles.text}>(2 jobs)</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.nameParent2Layout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.goMarketplace, styles.exercisingTypo]}>
            Go marketplace
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.exercising, styles.exercisingTypo]}>
            Exercising
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.healthChecking, styles.cookingTypo]}>
            Health checking
          </Text>
        </View>
        <Text style={[styles.hr, styles.hrTypo]}>$23/hr</Text>
        <View style={[styles.rectangleParent2, styles.groupChild1Layout]}>
          <View style={[styles.groupChild1, styles.childBg]} />
          <Text style={styles.seeMore}>See more</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.groupPressable, styles.groupPressableShadowBox]}
        onPress={() => navigation.navigate("ChatHome")}
      >
        <View style={[styles.instanceChild, styles.childPosition]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34624342.png")}
        />
        <View style={[styles.nameGroup, styles.nameParentFlexBox]}>
          <Text style={styles.name}>Karen Mia</Text>
          <Text style={styles.carer}>Carer</Text>
        </View>
        <View
          style={[
            styles.materialSymbolsstarGroup,
            styles.materialParentPosition,
          ]}
        >
          <Image
            style={[styles.materialSymbolsstarIcon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar1.png")}
          />
          <Text style={styles.text}>5.0/5</Text>
          <Text style={styles.text}>(9 jobs)</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.nameParent2Layout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.goMarketplace, styles.exercisingTypo]}>
            Go marketplace
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.exercising, styles.exercisingTypo]}>
            Exercising
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.healthChecking, styles.cookingTypo]}>
            Health checking
          </Text>
        </View>
        <Text style={[styles.hr1, styles.hrTypo]}>$21/hr</Text>
        <View style={[styles.rectangleParent2, styles.groupChild1Layout]}>
          <View style={[styles.groupChild1, styles.childBg]} />
          <Text style={styles.seeMore}>See more</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent8, styles.rectangleParentShadowBox1]}
        onPress={() => navigation.navigate("ChatHome")}
      >
        <View style={[styles.instanceChild, styles.childPosition]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34624342.png")}
        />
        <View style={[styles.nameParent, styles.nameParentFlexBox]}>
          <Text style={styles.name}>Anna Helmano</Text>
          <Text style={styles.carer}>Carer</Text>
        </View>
        <View
          style={[
            styles.materialSymbolsstarParent,
            styles.materialParentPosition,
          ]}
        >
          <Image
            style={[styles.materialSymbolsstarIcon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar.png")}
          />
          <Text style={styles.text}>5.0/5</Text>
          <Text style={styles.text}>(2 jobs)</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.nameParent2Layout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.goMarketplace, styles.exercisingTypo]}>
            Go marketplace
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.exercising, styles.exercisingTypo]}>
            Exercising
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.healthChecking, styles.cookingTypo]}>
            Health checking
          </Text>
        </View>
        <Text style={[styles.hr, styles.hrTypo]}>$23/hr</Text>
        <View style={[styles.rectangleParent2, styles.groupChild1Layout]}>
          <View style={[styles.groupChild1, styles.childBg]} />
          <Text style={styles.seeMore}>See more</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent14, styles.rectangleParentShadowBox1]}
        onPress={() => navigation.navigate("ChatHome")}
      >
        <View style={[styles.instanceChild, styles.childPosition]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34624342.png")}
        />
        <View style={[styles.nameGroup, styles.nameParentFlexBox]}>
          <Text style={styles.name}>Karen Mia</Text>
          <Text style={styles.carer}>Carer</Text>
        </View>
        <View
          style={[
            styles.materialSymbolsstarGroup,
            styles.materialParentPosition,
          ]}
        >
          <Image
            style={[styles.materialSymbolsstarIcon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar1.png")}
          />
          <Text style={styles.text}>5.0/5</Text>
          <Text style={styles.text}>(9 jobs)</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.nameParent2Layout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.goMarketplace, styles.exercisingTypo]}>
            Go marketplace
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.exercising, styles.exercisingTypo]}>
            Exercising
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.healthChecking, styles.cookingTypo]}>
            Health checking
          </Text>
        </View>
        <Text style={[styles.hr1, styles.hrTypo]}>$21/hr</Text>
        <View style={[styles.rectangleParent2, styles.groupChild1Layout]}>
          <View style={[styles.groupChild1, styles.childBg]} />
          <Text style={styles.seeMore}>See more</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent20, styles.rectangleParentShadowBox]}
        onPress={() => navigation.navigate("ChatHome")}
      >
        <View style={[styles.instanceChild, styles.childPosition]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34624342.png")}
        />
        <View style={[styles.nameParent1, styles.nameParentFlexBox]}>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.carer}>Carer</Text>
        </View>
        <View
          style={[
            styles.materialSymbolsstarParent2,
            styles.materialParentPosition,
          ]}
        >
          <Image
            style={[styles.materialSymbolsstarIcon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar1.png")}
          />
          <Text style={styles.text}>4.9/5</Text>
          <Text style={styles.text}>(13 jobs)</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.nameParent2Layout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.goMarketplace, styles.exercisingTypo]}>
            Go marketplace
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.exercising, styles.exercisingTypo]}>
            Exercising
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.healthChecking, styles.cookingTypo]}>
            Health checking
          </Text>
        </View>
        <Text style={[styles.hr1, styles.hrTypo]}>$15/hr</Text>
        <View style={[styles.rectangleParent2, styles.groupChild1Layout]}>
          <View style={[styles.groupChild1, styles.childBg]} />
          <Text style={styles.seeMore}>See more</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent26, styles.rectangleParentShadowBox]}
        onPress={() => navigation.navigate("ChatHome")}
      >
        <View style={[styles.instanceChild, styles.childPosition]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34624342.png")}
        />
        <View style={[styles.nameParent2, styles.nameParent2Layout]}>
          <Text style={styles.name}>Catherina</Text>
          <Text style={styles.carer}>Carer</Text>
        </View>
        <View
          style={[
            styles.materialSymbolsstarParent2,
            styles.materialParentPosition,
          ]}
        >
          <Image
            style={[styles.materialSymbolsstarIcon, styles.chevronLeftLayout]}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar1.png")}
          />
          <Text style={styles.text}>4.7/5</Text>
          <Text style={styles.text}>(13 jobs)</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.nameParent2Layout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.goMarketplace, styles.exercisingTypo]}>
            Go marketplace
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
        </View>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.exercising, styles.exercisingTypo]}>
            Exercising
          </Text>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.healthChecking, styles.cookingTypo]}>
            Health checking
          </Text>
        </View>
        <Text style={[styles.hr1, styles.hrTypo]}>$15/hr</Text>
        <View style={[styles.rectangleParent2, styles.groupChild1Layout]}>
          <View style={[styles.groupChild1, styles.childBg]} />
          <Text style={styles.seeMore}>See more</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.rectangleParent32, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Request4")}
      >
        <View style={[styles.groupChild27, styles.groupChildLayout]} />
        <Text style={[styles.request, styles.requestPosition]}>Request</Text>
      </Pressable>
      <View style={[styles.vectorParent, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild28, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-34624339.png")}
        />
        <Text style={styles.requestPosition}>Suggest</Text>
      </View>
      <Pressable
        style={styles.icroundFilterAlt}
        onPress={() => navigation.navigate("Filter")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icroundfilteralt.png")}
        />
      </Pressable>
      <View style={[styles.header1, styles.groupChildPosition]}>
        <View style={[styles.header1Child, styles.childPosition]} />
        <View style={styles.statusBarwhitebase}>
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
            <Text style={[styles.text6, styles.textFlexBox]}>58 %</Text>
          </View>
          <Image
            style={styles.bluetoothIcon}
            resizeMode="cover"
            source={require("../assets/bluetooth-icon.png")}
          />
          <Text style={[styles.text7, styles.textFlexBox]}>9:41 AM</Text>
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
        <View style={[styles.rectangleParent33, styles.childBg]}>
          <View style={[styles.instanceChild9, styles.childBg]} />
          <Pressable
            style={[styles.chevronLeft, styles.chevronLeftLayout]}
            onPress={() => navigation.navigate("Home")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={styles.qunLM}>Booking Elderly Sitter</Text>
        </View>
        <Image
          style={[styles.chat1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/chat-12.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupPressableShadowBox: {
    height: 213,
    width: 150,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 592,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
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
  nameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    bottom: "51.17%",
    top: "35.21%",
    height: "13.62%",
  },
  materialParentPosition: {
    flexDirection: "row",
    bottom: "41.78%",
    top: "51.17%",
    height: "7.04%",
    alignItems: "center",
    position: "absolute",
  },
  chevronLeftLayout: {
    height: 16,
    width: 16,
  },
  nameParent2Layout: {
    width: "47.33%",
    position: "absolute",
  },
  exercisingTypo: {
    display: "flex",
    color: Color.main2,
    fontSize: FontSize.size_5xs,
    top: "14.29%",
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  groupViewPosition: {
    bottom: "23.94%",
    top: "69.48%",
    height: "6.57%",
    position: "absolute",
  },
  cookingTypo: {
    color: Color.main2,
    fontSize: FontSize.size_5xs,
    top: "14.29%",
    fontFamily: FontFamily.newDescriptionLabelField,
    position: "absolute",
  },
  rectangleLayout: {
    height: "6.57%",
    left: "10%",
  },
  hrTypo: {
    textAlign: "right",
    top: 10,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_3xs,
    color: Color.main1,
    position: "absolute",
  },
  groupChild1Layout: {
    height: 20,
    width: 70,
  },
  childBg: {
    backgroundColor: Color.main1,
    position: "absolute",
  },
  rectangleParentShadowBox1: {
    top: 364,
    height: 213,
    width: 150,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  rectangleParentShadowBox: {
    top: 136,
    height: 213,
    width: 150,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupChildLayout: {
    height: 30,
    width: 100,
    position: "absolute",
  },
  requestPosition: {
    left: 21,
    top: 6,
    color: Color.white,
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
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
  suggestChild: {
    top: 111,
    left: 15,
    width: 345,
    height: 714,
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  instanceChild: {
    borderStyle: "solid",
    borderColor: "#3f497f",
    borderWidth: 1,
    left: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
    bottom: "0%",
    position: "absolute",
    backgroundColor: Color.main4,
  },
  instanceItem: {
    height: "28.17%",
    width: "40%",
    top: "4.69%",
    right: "30%",
    bottom: "67.14%",
    left: "30%",
    borderRadius: Border.br_11xl,
  },
  name: {
    fontFamily: FontFamily.interMedium,
    textAlign: "center",
    color: Color.main1,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  carer: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    color: Color.main1,
  },
  nameParent: {
    width: "70%",
    right: "15%",
    left: "15%",
    position: "absolute",
  },
  materialSymbolsstarIcon: {
    overflow: "hidden",
  },
  text: {
    marginLeft: 3,
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_3xs,
    color: Color.main1,
  },
  materialSymbolsstarParent: {
    width: "55.33%",
    right: "22.33%",
    left: "22.33%",
  },
  groupChild: {
    backgroundColor: Color.gainsboro,
    left: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_8xs,
    bottom: "0%",
    position: "absolute",
  },
  goMarketplace: {
    width: "89.55%",
    left: "5.63%",
  },
  rectangleGroup: {
    top: "60.56%",
    right: "42.67%",
    bottom: "32.86%",
    left: "10%",
    height: "6.57%",
  },
  cooking: {
    left: "13.33%",
    textAlign: "center",
  },
  rectangleContainer: {
    width: "30%",
    right: "60%",
    left: "10%",
  },
  exercising: {
    width: "78%",
    left: "10%",
  },
  groupView: {
    width: "33.33%",
    right: "23.33%",
    left: "43.33%",
  },
  healthChecking: {
    left: "8.22%",
    textAlign: "left",
  },
  rectangleParent1: {
    width: "48.67%",
    top: "78.4%",
    right: "41.33%",
    bottom: "15.02%",
    left: "10%",
    position: "absolute",
  },
  hr: {
    left: 111,
  },
  groupChild1: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 20,
    width: 70,
  },
  seeMore: {
    top: 4,
    left: 12,
    color: Color.white,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  rectangleParent2: {
    top: 186,
    left: 40,
    position: "absolute",
  },
  rectangleParent: {
    left: 195,
  },
  nameGroup: {
    width: "48%",
    right: "26%",
    left: "26%",
    position: "absolute",
  },
  materialSymbolsstarGroup: {
    width: "56%",
    right: "22%",
    left: "22%",
  },
  hr1: {
    left: 112,
  },
  groupPressable: {
    left: 30,
  },
  rectangleParent8: {
    left: 195,
  },
  rectangleParent14: {
    left: 30,
  },
  nameParent1: {
    width: "28%",
    right: "36%",
    left: "36%",
    position: "absolute",
  },
  materialSymbolsstarParent2: {
    width: "58.67%",
    right: "20.67%",
    left: "20.67%",
  },
  rectangleParent20: {
    left: 195,
  },
  nameParent2: {
    right: "26.33%",
    left: "26.33%",
    justifyContent: "center",
    alignItems: "center",
    bottom: "51.17%",
    top: "35.21%",
    height: "13.62%",
  },
  rectangleParent26: {
    left: 30,
  },
  groupChild27: {
    borderTopLeftRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.seagreen_100,
    left: 0,
    top: 0,
  },
  request: {
    opacity: 0.7,
  },
  rectangleParent32: {
    left: 190,
    top: 91,
    width: 100,
  },
  groupChild28: {
    left: 0,
    top: 0,
  },
  vectorParent: {
    left: 85,
    top: 91,
    width: 100,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  icroundFilterAlt: {
    left: 336,
    top: 87,
    width: 24,
    height: 24,
    position: "absolute",
  },
  header1Child: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowRadius: 10,
    elevation: 10,
    left: "0%",
    top: "0%",
    height: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    bottom: "0%",
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
    bottom: "14.29%",
    left: "55.86%",
    right: "0%",
  },
  text6: {
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
    height: 13,
    opacity: 0.45,
  },
  text7: {
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
    height: 9,
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
  instanceChild9: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  chevronLeft: {
    left: 16,
    top: 20,
    position: "absolute",
  },
  qunLM: {
    top: 11,
    left: 93,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    color: Color.main4,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent33: {
    height: "73.68%",
    top: "26.32%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  chat1Icon: {
    height: "31.58%",
    width: "6.4%",
    top: "48.68%",
    right: "4%",
    bottom: "19.74%",
    left: "89.6%",
  },
  header1: {
    width: 375,
    height: 76,
    position: "absolute",
  },
  suggest: {
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.main4,
  },
});

export default Suggest;
