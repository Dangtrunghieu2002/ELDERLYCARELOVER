import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Filter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.filter}>
      <Image
        style={styles.icroundFilterAltIcon}
        resizeMode="cover"
        source={require("../assets/icroundfilteralt.png")}
      />
      <View style={[styles.filterChild, styles.filterBg]} />
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <View style={[styles.instanceChild, styles.filterItemBorder]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout1]}
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
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>5.0/5</Text>
          <Text style={[styles.text, styles.textTypo]}>(2 jobs)</Text>
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
          <Text style={[styles.seeMore, styles.qunLMTypo]}>See more</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent3, styles.rectangleParentPosition]}>
        <View style={[styles.instanceChild, styles.filterItemBorder]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout1]}
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
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar1.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>5.0/5</Text>
          <Text style={[styles.text, styles.textTypo]}>(9 jobs)</Text>
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
          <Text style={[styles.seeMore, styles.qunLMTypo]}>See more</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent9, styles.rectangleParentShadowBox1]}>
        <View style={[styles.instanceChild, styles.filterItemBorder]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout1]}
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
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>5.0/5</Text>
          <Text style={[styles.text, styles.textTypo]}>(2 jobs)</Text>
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
          <Text style={[styles.seeMore, styles.qunLMTypo]}>See more</Text>
        </View>
      </View>
      <View
        style={[styles.rectangleParent15, styles.rectangleParentShadowBox1]}
      >
        <View style={[styles.instanceChild, styles.filterItemBorder]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout1]}
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
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar1.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>5.0/5</Text>
          <Text style={[styles.text, styles.textTypo]}>(9 jobs)</Text>
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
          <Text style={[styles.seeMore, styles.qunLMTypo]}>See more</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent21, styles.rectangleParentShadowBox]}>
        <View style={[styles.instanceChild, styles.filterItemBorder]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout1]}
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
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar1.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>4.9/5</Text>
          <Text style={[styles.text, styles.textTypo]}>(13 jobs)</Text>
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
          <Text style={[styles.seeMore, styles.qunLMTypo]}>See more</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent27, styles.rectangleParentShadowBox]}>
        <View style={[styles.instanceChild, styles.filterItemBorder]} />
        <Image
          style={[styles.instanceItem, styles.iconLayout1]}
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
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/materialsymbolsstar1.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>4.7/5</Text>
          <Text style={[styles.text, styles.textTypo]}>(13 jobs)</Text>
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
          <Text style={[styles.seeMore, styles.qunLMTypo]}>See more</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent33, styles.groupChildLayout1]}>
        <View style={[styles.groupChild27, styles.groupChildLayout1]} />
        <Text style={[styles.request, styles.requestPosition]}>Request</Text>
      </View>
      <View style={[styles.vectorParent, styles.groupChildLayout1]}>
        <Image
          style={[styles.groupChild28, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-34624339.png")}
        />
        <Text style={styles.requestPosition}>Suggest</Text>
      </View>
      <View style={[styles.header1, styles.groupChildPosition]}>
        <View style={[styles.header1Child, styles.childPosition]} />
        <View style={styles.statusBarwhitebase}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.gsPosition]}>
            <Image
              style={[styles.batteryIcon, styles.iconLayout1]}
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
            style={[styles.signalIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/signal.png")}
          />
        </View>
        <View style={[styles.rectangleParent34, styles.childBg]}>
          <View style={[styles.instanceChild9, styles.childBg]} />
          <Image
            style={[styles.chevronLeftIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/chevronleft.png")}
          />
          <Text style={[styles.qunLM, styles.qunLMTypo]}>
            Booking Elderly Sitter
          </Text>
        </View>
        <Image
          style={[styles.chat1Icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/chat-12.png")}
        />
      </View>
      <View style={[styles.filterItem, styles.filterItemBorder]} />
      <View style={styles.filterParent}>
        <Text style={styles.filter1}>Filter</Text>
        <Text style={styles.review}>Review</Text>
        <View style={[styles.groupParent, styles.groupParentSpaceBlock]}>
          <View style={styles.vectorGroupLayout}>
            <Image
              style={[styles.groupChild29, styles.vectorGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-34624346.png")}
            />
            <Text style={styles.text8}>5.0</Text>
          </View>
          <View style={[styles.vectorContainer, styles.vectorGroupLayout]}>
            <Image
              style={[styles.groupChild29, styles.vectorGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-34624346.png")}
            />
            <Text style={styles.text8}>4.0</Text>
          </View>
          <View style={[styles.vectorContainer, styles.vectorGroupLayout]}>
            <Image
              style={[styles.groupChild29, styles.vectorGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-34624346.png")}
            />
            <Text style={styles.text8}>3.0</Text>
          </View>
          <View style={[styles.vectorContainer, styles.vectorGroupLayout]}>
            <Image
              style={[styles.groupChild29, styles.vectorGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-34624346.png")}
            />
            <Text style={styles.text8}>2.0</Text>
          </View>
          <View style={[styles.vectorContainer, styles.vectorGroupLayout]}>
            <Image
              style={[styles.groupChild29, styles.vectorGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-34624346.png")}
            />
            <Text style={styles.text8}>1.0</Text>
          </View>
        </View>
        <Text style={styles.review}>Price</Text>
        <View style={[styles.groupParent, styles.groupParentSpaceBlock]}>
          <View style={styles.groupChild34Layout}>
            <Image
              style={[styles.groupChild34, styles.groupChild34Layout]}
              resizeMode="cover"
              source={require("../assets/rectangle-346243461.png")}
            />
            <Text style={styles.text8}>High to Low</Text>
          </View>
          <View style={[styles.vectorParent5, styles.groupChild35Layout]}>
            <Image
              style={[styles.groupChild35, styles.groupChild35Layout]}
              resizeMode="cover"
              source={require("../assets/rectangle-346243462.png")}
            />
            <Text style={styles.text8}>Low to High</Text>
          </View>
        </View>
        <View style={[styles.rectangleParent35, styles.groupParentSpaceBlock]}>
          <View style={[styles.frameChild, styles.childBorder]} />
          <Text style={[styles.under20, styles.textTypo]}>Under 20</Text>
        </View>
        <View style={[styles.rectangleParent35, styles.groupParentSpaceBlock]}>
          <View style={[styles.frameChild, styles.childBorder]} />
          <Text style={[styles.under20, styles.textTypo]}>From 20 to 50</Text>
        </View>
        <View style={[styles.rectangleParent35, styles.groupParentSpaceBlock]}>
          <View style={[styles.frameChild, styles.childBorder]} />
          <Text style={[styles.under20, styles.textTypo]}>From 51 to 100</Text>
        </View>
        <View style={[styles.rectangleParent35, styles.groupParentSpaceBlock]}>
          <View style={[styles.frameChild, styles.childBorder]} />
          <Text style={[styles.under20, styles.textTypo]}>From 101 to 200</Text>
        </View>
        <View style={[styles.rectangleParent35, styles.groupParentSpaceBlock]}>
          <View style={[styles.frameChild, styles.childBorder]} />
          <Text style={[styles.under20, styles.textTypo]}>More than 201</Text>
        </View>
        <Text style={styles.review}>Skills</Text>
        <View style={[styles.groupParent, styles.groupParentSpaceBlock]}>
          <View style={styles.rectangleParent40}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <Text style={[styles.goMarketplace, styles.exercisingTypo]}>
              Go marketplace
            </Text>
          </View>
          <View style={styles.rectangleParent41}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <Text style={[styles.cooking, styles.cookingTypo]}>Cooking</Text>
          </View>
        </View>
        <View style={[styles.groupParent2, styles.groupParentSpaceBlock]}>
          <View style={styles.rectangleParent42}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <Text style={[styles.exercising, styles.exercisingTypo]}>
              Exercising
            </Text>
          </View>
          <View style={styles.rectangleParent43}>
            <View style={[styles.groupChild, styles.childPosition]} />
            <Text style={[styles.healthChecking, styles.cookingTypo]}>
              Health checking
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Suggest")}
      >
        <View style={[styles.groupChild40, styles.groupChildLayout]} />
        <Text style={[styles.apply, styles.applyPosition]}>Apply</Text>
      </Pressable>
      <View style={[styles.rectangleParent44, styles.groupChildLayout]}>
        <View style={[styles.groupChild41, styles.groupChildLayout]} />
        <Text style={[styles.reset, styles.applyPosition]}>Reset</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterBg: {
    backgroundColor: Color.white,
    top: 111,
  },
  rectangleParentPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  filterItemBorder: {
    borderWidth: 1,
    borderColor: "#3f497f",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nameParentFlexBox: {
    justifyContent: "center",
    bottom: "51.17%",
    top: "35.21%",
    height: "13.62%",
    alignItems: "center",
  },
  materialParentPosition: {
    flexDirection: "row",
    bottom: "41.78%",
    top: "51.17%",
    height: "7.04%",
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.newDescriptionLabelField,
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  nameParent2Layout: {
    width: "47.33%",
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
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
    fontSize: FontSize.size_5xs,
    top: "14.29%",
    color: Color.main2,
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
  qunLMTypo: {
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    position: "absolute",
  },
  rectangleParentShadowBox1: {
    top: 364,
    opacity: 0.4,
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
    opacity: 0.4,
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
  groupChildLayout1: {
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
  iconLayout: {
    height: 16,
    width: 16,
    overflow: "hidden",
  },
  groupParentSpaceBlock: {
    paddingVertical: 0,
    marginTop: 3,
    flexDirection: "row",
  },
  vectorGroupLayout: {
    height: 12,
    width: 24,
  },
  groupChild34Layout: {
    width: 65,
    height: 12,
  },
  groupChild35Layout: {
    width: 66,
    height: 12,
  },
  childBorder: {
    borderWidth: 0.5,
    borderColor: "#3f497f",
    borderStyle: "solid",
  },
  groupChildLayout: {
    width: 80,
    height: 20,
    position: "absolute",
  },
  applyPosition: {
    left: 27,
    top: 4,
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    position: "absolute",
  },
  icroundFilterAltIcon: {
    top: 87,
    left: 336,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  filterChild: {
    left: 15,
    width: 345,
    height: 714,
    opacity: 0.6,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  instanceChild: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
    backgroundColor: Color.main4,
    borderColor: "#3f497f",
    borderStyle: "solid",
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
  text: {
    marginLeft: 3,
    textAlign: "left",
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
    color: Color.main2,
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
    color: Color.main2,
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
    left: 12,
    color: Color.white,
    top: 4,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.size_3xs,
  },
  rectangleParent2: {
    top: 186,
    left: 40,
    position: "absolute",
  },
  rectangleParent: {
    height: 213,
    width: 150,
    top: 592,
    opacity: 0.4,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
  rectangleParent3: {
    left: 30,
    height: 213,
    width: 150,
    top: 592,
    opacity: 0.4,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  rectangleParent9: {
    left: 195,
  },
  rectangleParent15: {
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
  rectangleParent21: {
    left: 195,
  },
  nameParent2: {
    right: "26.33%",
    left: "26.33%",
    justifyContent: "center",
    bottom: "51.17%",
    top: "35.21%",
    height: "13.62%",
    alignItems: "center",
  },
  rectangleParent27: {
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
  rectangleParent33: {
    left: 190,
    top: 91,
    width: 100,
    opacity: 0.4,
  },
  groupChild28: {
    left: 0,
    top: 0,
  },
  vectorParent: {
    left: 85,
    top: 91,
    width: 100,
    opacity: 0.4,
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
  chevronLeftIcon: {
    top: 20,
    left: 16,
    position: "absolute",
  },
  qunLM: {
    top: 11,
    left: 93,
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    color: Color.main4,
    textAlign: "center",
  },
  rectangleParent34: {
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
    opacity: 0.4,
    position: "absolute",
  },
  filterItem: {
    left: 160,
    width: 200,
    height: 244,
    backgroundColor: Color.white,
    top: 111,
  },
  filter1: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    color: Color.main2,
    textAlign: "left",
  },
  review: {
    marginTop: 3,
    color: Color.main2,
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_3xs,
  },
  groupChild29: {
    left: 0,
    top: 0,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  text8: {
    left: 5,
    top: 0,
    color: Color.main2,
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  vectorContainer: {
    marginLeft: 10,
  },
  groupParent: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
  },
  groupChild34: {
    left: 0,
    top: 0,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  groupChild35: {
    left: 0,
    top: 0,
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  vectorParent5: {
    marginLeft: 10,
  },
  frameChild: {
    borderRadius: Border.br_12xs,
    width: 10,
    height: 10,
  },
  under20: {
    marginLeft: 10,
    color: Color.main2,
    textAlign: "left",
  },
  rectangleParent35: {
    paddingHorizontal: Padding.p_mini,
    alignItems: "center",
  },
  rectangleParent40: {
    width: 71,
    height: 14,
  },
  rectangleParent41: {
    width: 45,
    height: 14,
    marginLeft: 10,
  },
  rectangleParent42: {
    width: 50,
    height: 14,
  },
  rectangleParent43: {
    width: 73,
    height: 14,
    marginLeft: 10,
  },
  groupParent2: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    alignItems: "center",
  },
  filterParent: {
    top: 121,
    left: 175,
    position: "absolute",
  },
  groupChild40: {
    backgroundColor: Color.main2,
    left: 0,
    top: 0,
    borderRadius: Border.br_8xs,
  },
  apply: {
    color: Color.white,
  },
  groupPressable: {
    left: 265,
    top: 325,
    width: 80,
  },
  groupChild41: {
    borderWidth: 0.5,
    borderColor: "#3f497f",
    borderStyle: "solid",
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 80,
    borderRadius: Border.br_8xs,
  },
  reset: {
    color: Color.main2,
  },
  rectangleParent44: {
    top: 325,
    width: 80,
    left: 175,
  },
  filter: {
    flex: 1,
    height: 845,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.main4,
  },
});

export default Filter;
