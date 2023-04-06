import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SettingHealthIndexView1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settingHealthIndexView}>
      <View style={[styles.component8, styles.button1Layout]}>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Text style={[styles.save, styles.saveTypo]}>Save</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.parentPosition1]}>
          <Pressable
            style={styles.groupItem}
            onPress={() => navigation.navigate("OverviewHealthIndex2")}
          />
          <Text style={[styles.cancel, styles.saveTypo]}>Cancel</Text>
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={styles.frameLayout}>
          <View style={[styles.vectorParent, styles.parentPosition1]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout1]}
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
          <View style={[styles.vectorParent, styles.parentPosition1]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout1]}
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
          <View style={[styles.vectorParent, styles.parentPosition1]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout1]}
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
            style={[styles.bloodPressureIcon, styles.bloodPressureIconLayout]}
            resizeMode="cover"
            source={require("../assets/bloodpressure.png")}
          />
          <View style={[styles.groupInner, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={styles.frameView}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout1]}
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
            style={styles.lungs1Icon}
            resizeMode="cover"
            source={require("../assets/lungs-1.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <Pressable
            style={styles.frameView}
            onPress={() => navigation.navigate("SettingHealthIndexView")}
          >
            <Image
              style={[styles.frameChild3, styles.frameChildLayout1]}
              resizeMode="cover"
              source={require("../assets/rectangle-1428411.png")}
            />
            <Text style={[styles.respiratoryRate, styles.rateLayout]}>
              Body Temperature
            </Text>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/group-83781.png")}
            />
          </Pressable>
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
          <View style={[styles.vectorParent, styles.parentPosition1]}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout1]}
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
            style={styles.lungs1Icon}
            resizeMode="cover"
            source={require("../assets/height-1.png")}
          />
          <View style={[styles.groupInner, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={[styles.vectorParent, styles.parentPosition1]}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout1]}
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
            style={styles.lungs1Icon}
            resizeMode="cover"
            source={require("../assets/dumbbell.png")}
          />
          <View style={[styles.groupInner, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={styles.frameView}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout1]}
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
            style={styles.lungs1Icon}
            resizeMode="cover"
            source={require("../assets/stress.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={styles.frameView}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout1]}
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
            style={styles.lungs1Icon}
            resizeMode="cover"
            source={require("../assets/moon.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={styles.frameView}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout1]}
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
            style={styles.lungs1Icon}
            resizeMode="cover"
            source={require("../assets/bloodtest.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={styles.frameView}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout1]}
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
            style={styles.lungs1Icon}
            resizeMode="cover"
            source={require("../assets/heartrate.png")}
          />
          <View style={[styles.groupChild2, styles.groupBorder]} />
        </View>
        <View style={[styles.frameGroup, styles.frameLayout]}>
          <View style={styles.frameView}>
            <Image
              style={[styles.frameChild3, styles.frameChildLayout1]}
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
            style={styles.lungs1Icon}
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
        <View style={[styles.rectangleView, styles.indexShadowBox]} />
        <Text style={[styles.settingWhichIndex, styles.settingWhichIndexTypo]}>
          Setting which index is show?
        </Text>
        <Text style={[styles.chooseAtLeast, styles.chooseAtLeastPosition]}>
          Choose at least 4 indexes to be measured and statisticized
        </Text>
      </View>
      <View style={[styles.header1, styles.headerLayout]}>
        <View style={[styles.header1Child, styles.childShadowBox]} />
        <View style={[styles.statusBarwhitebase, styles.parentPosition1]}>
          <Image
            style={[styles.backgroundIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.charge, styles.chargePosition]}>
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
            style={styles.chevronPosition}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/chevronleft.png")}
            />
          </Pressable>
          <Text style={[styles.qunLM, styles.qunTypo]}>Health Index</Text>
        </View>
        <Pressable
          style={[styles.chat1, styles.chatPosition]}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/chat-14.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.footer, styles.footerFlexBox]}>
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
            style={[styles.icroundHealthAndSafetyIcon, styles.iconLayout1]}
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
      <View style={[styles.button1, styles.button1Layout]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <Text style={[styles.textField, styles.saveTypo]}>Measure now</Text>
      </View>
      <View style={styles.hrIndex1Parent}>
        <Pressable
          style={[styles.hrIndex1, styles.indexLayout]}
          onPress={() => navigation.navigate("OverviewHealthIndex1")}
        >
          <View style={styles.heartRateParent}>
            <Text style={[styles.heartRate1, styles.spo2Typo]}>Heart Rate</Text>
            <Text style={[styles.bpm, styles.cFlexBox]}>(bpm)</Text>
          </View>
          <View style={[styles.minParent, styles.parentPosition]}>
            <Text style={[styles.min, styles.minLayout]}>Min</Text>
            <Text style={[styles.average, styles.text3Layout]}>Average</Text>
            <Text style={[styles.average, styles.text3Layout]}>Max</Text>
          </View>
          <Image
            style={[styles.hrIndex1Child, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
          <Image
            style={[styles.heartIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/heart.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text2, styles.minLayout]}>80</Text>
            <Text style={[styles.text3, styles.text3Layout]}>80</Text>
            <Text style={[styles.text3, styles.text3Layout]}>89</Text>
          </View>
        </Pressable>
        <View style={[styles.blIndex1, styles.indexLayout]}>
          <View style={styles.heartRateParent}>
            <Text style={[styles.bloodPressure1, styles.spo2Typo]}>
              Blood Pressure
            </Text>
            <Text style={[styles.bpm, styles.cFlexBox]}>(mmHg)</Text>
          </View>
          <View style={[styles.minParent, styles.parentPosition]}>
            <Text style={[styles.min, styles.minLayout]}>Min</Text>
            <Text style={[styles.average, styles.text3Layout]}>Average</Text>
            <Text style={[styles.average, styles.text3Layout]}>Max</Text>
          </View>
          <Image
            style={[styles.hrIndex1Child, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text2, styles.minLayout]}>80/120</Text>
            <Text style={[styles.text3, styles.text3Layout]}>80/126</Text>
            <Text style={[styles.text3, styles.text3Layout]}>90/137</Text>
          </View>
          <Image
            style={[styles.bloodPressureIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/blood-pressure.png")}
          />
        </View>
        <View style={[styles.spo2Index1, styles.indexLayout]}>
          <View style={styles.heartRateParent}>
            <Text style={[styles.spo2, styles.spo2Typo]}>SPO2</Text>
            <Text style={[styles.bpm, styles.cFlexBox]}>(%)</Text>
          </View>
          <View style={[styles.minParent, styles.parentPosition]}>
            <Text style={[styles.min, styles.minLayout]}>Min</Text>
            <Text style={[styles.average, styles.text3Layout]}>Average</Text>
            <Text style={[styles.average, styles.text3Layout]}>Max</Text>
          </View>
          <Image
            style={[styles.hrIndex1Child, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text2, styles.minLayout]}>96</Text>
            <Text style={[styles.text3, styles.text3Layout]}>98</Text>
            <Text style={[styles.text3, styles.text3Layout]}>99</Text>
          </View>
          <Image
            style={[styles.bloodPressureIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/spo2.png")}
          />
        </View>
        <View style={[styles.weightIndex1, styles.indexLayout]}>
          <View style={styles.heartRateParent}>
            <Text style={[styles.weight1, styles.spo2Typo]}>Weight</Text>
            <Text style={[styles.bpm, styles.cFlexBox]}>(Kg)</Text>
          </View>
          <View style={[styles.minParent, styles.parentPosition]}>
            <Text style={[styles.min, styles.minLayout]}>Min</Text>
            <Text style={[styles.average, styles.text3Layout]}>Average</Text>
            <Text style={[styles.average, styles.text3Layout]}>Max</Text>
          </View>
          <Image
            style={[styles.hrIndex1Child, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/vector-21.png")}
          />
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text2, styles.minLayout]}>45</Text>
            <Text style={[styles.text3, styles.text3Layout]}>45</Text>
            <Text style={[styles.text3, styles.text3Layout]}>46</Text>
          </View>
          <Image
            style={[styles.bloodPressureIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/weight.png")}
          />
        </View>
        <View style={[styles.weightIndex2Wrapper, styles.indexLayout]}>
          <View style={[styles.weightIndex2, styles.indexLayout]}>
            <View style={styles.heartRateParent}>
              <Text style={[styles.bodyTemperature1, styles.minLayout]}>
                Body Temperature
              </Text>
              <Text style={[styles.c, styles.cFlexBox]}>(C</Text>
              <Text style={[styles.c, styles.cFlexBox]}>0</Text>
              <Text style={[styles.c, styles.cFlexBox]}>)</Text>
            </View>
            <View style={[styles.minParent, styles.parentPosition]}>
              <Text style={[styles.min, styles.minLayout]}>Min</Text>
              <Text style={[styles.average, styles.text3Layout]}>Average</Text>
              <Text style={[styles.average, styles.text3Layout]}>Max</Text>
            </View>
            <Image
              style={[styles.hrIndex1Child, styles.frameChildLayout]}
              resizeMode="cover"
              source={require("../assets/vector-21.png")}
            />
            <View style={[styles.parent, styles.parentPosition]}>
              <Text style={[styles.text2, styles.minLayout]}>36.3</Text>
              <Text style={[styles.text3, styles.text3Layout]}>36.7</Text>
              <Text style={[styles.text3, styles.text3Layout]}>37.2</Text>
            </View>
            <Image
              style={[styles.bloodPressureIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/weight1.png")}
            />
            <Image
              style={[
                styles.celciusCelsiusDegreeForeIcon1,
                styles.iconGroupLayout,
              ]}
              resizeMode="cover"
              source={require("../assets/celciuscelsiusdegreeforecasttemperaturethermometerweathericon.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[
          styles.teenyiconsadjustHorizontalA,
          styles.bloodPressureIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/teenyiconsadjusthorizontalaltsolid.png")}
      />
      <Image
        style={[styles.uilcalendarAltIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/uilcalendaralt.png")}
      />
      <Text style={[styles.viewOtherDay, styles.youChose4Typo]}>
        View other day
      </Text>
      <View style={[styles.vectorParent8, styles.footerFlexBox]}>
        <Image
          style={styles.frameChildLayout}
          resizeMode="cover"
          source={require("../assets/vector-20.png")}
        />
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.backgroundIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text20, styles.footerFlexBox]}>3</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.backgroundIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text20, styles.footerFlexBox]}>4</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.backgroundIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text20, styles.footerFlexBox]}>5</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.backgroundIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1600.png")}
          />
          <Text style={[styles.text23, styles.qunTypo]}>6</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.backgroundIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text20, styles.footerFlexBox]}>7</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.backgroundIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text20, styles.footerFlexBox]}>8</Text>
        </View>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.backgroundIcon, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1599.png")}
          />
          <Text style={[styles.text20, styles.footerFlexBox]}>9</Text>
        </View>
        <Image
          style={[styles.frameChild22, styles.frameChildLayout]}
          resizeMode="cover"
          source={require("../assets/vector-211.png")}
        />
      </View>
      <View style={[styles.header2, styles.headerLayout]}>
        <View style={[styles.rectangleParent2, styles.parentPosition1]}>
          <View style={[styles.groupChild11, styles.childShadowBox]} />
          <View style={[styles.statusBarwhitebase1, styles.parentPosition1]}>
            <Image
              style={[styles.backgroundIcon, styles.iconGroupLayout]}
              resizeMode="cover"
              source={require("../assets/background.png")}
            />
            <View style={[styles.charge, styles.chargePosition]}>
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
          <View
            style={[styles.rectangleParent3, styles.instanceChild4Position]}
          >
            <View
              style={[styles.instanceChild4, styles.instanceChild4Position]}
            />
            <Image
              style={[styles.chevronLeftIcon, styles.chevronPosition]}
              resizeMode="cover"
              source={require("../assets/chevronleft2.png")}
            />
            <Text style={[styles.qunLM1, styles.qunTypo]}>Sign up</Text>
          </View>
        </View>
        <Pressable
          style={[styles.wrapper, styles.chargePosition]}
          onPress={() => navigation.navigate("Setting")}
        >
          <Image
            style={[styles.icon1, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-1595.png")}
          />
        </Pressable>
        <Text style={[styles.communityHealthcare, styles.goodMorningPosition]}>
          Community Healthcare
        </Text>
        <Text style={[styles.goodMorning, styles.goodMorningPosition]}>
          Good morning
        </Text>
        <Pressable
          style={[styles.chat2, styles.chatPosition]}
          onPress={() => navigation.navigate("ChatHome")}
        >
          <Image
            style={[styles.icon1, styles.iconGroupLayout]}
            resizeMode="cover"
            source={require("../assets/chat-13.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.footer1, styles.footerFlexBox]}>
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
            style={[styles.icroundHealthAndSafetyIcon, styles.iconLayout1]}
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
  button1Layout: {
    height: 50,
    position: "absolute",
  },
  rectangleParentPosition: {
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
  saveTypo: {
    textAlign: "center",
    top: "32%",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  parentPosition1: {
    left: "0%",
    top: "0%",
  },
  frameChildLayout1: {
    width: 30,
    height: 30,
  },
  rateLayout: {
    height: 19,
    width: 235,
    marginLeft: 20,
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.newDescriptionLabelField,
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
  bloodPressureIconLayout: {
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  youChose4Typo: {
    textAlign: "right",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
    position: "absolute",
  },
  rectangleLayout: {
    height: 80,
    width: 355,
    position: "absolute",
  },
  indexShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
  },
  settingWhichIndexTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
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
  headerLayout: {
    width: 375,
    position: "absolute",
  },
  childShadowBox: {
    elevation: 10,
    shadowRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  chargePosition: {
    bottom: "15%",
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "flex-end",
    color: Color.black,
    fontSize: FontSize.size_xs,
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  qunTypo: {
    color: Color.main4,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    textAlign: "center",
    position: "absolute",
  },
  chatPosition: {
    width: "6.4%",
    right: "4%",
    left: "89.6%",
    position: "absolute",
  },
  footerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  indexLayout: {
    height: 90,
    width: 355,
  },
  spo2Typo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
  },
  cFlexBox: {
    textAlign: "left",
    lineHeight: 15,
    color: Color.main1,
  },
  parentPosition: {
    left: 90,
    flexDirection: "row",
    position: "absolute",
  },
  minLayout: {
    height: 15,
    lineHeight: 15,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    color: Color.main1,
  },
  text3Layout: {
    marginLeft: 5,
    height: 15,
    width: 70,
    lineHeight: 15,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    color: Color.main1,
  },
  frameChildLayout: {
    height: 12,
    width: 6,
    borderRadius: Border.br_12xs_1,
  },
  iconLayout: {
    height: 45,
    width: 45,
    left: 15,
    position: "absolute",
  },
  instanceChild4Position: {
    borderBottomLeftRadius: Border.br_5xs,
    borderBottomRightRadius: Border.br_5xs,
    backgroundColor: Color.main1,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  chevronPosition: {
    height: 16,
    width: 16,
    top: 20,
    left: 16,
    position: "absolute",
  },
  goodMorningPosition: {
    left: "29.33%",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.main1,
    top: "0%",
    height: "100%",
  },
  save: {
    left: "38%",
    color: Color.white,
    textAlign: "center",
    top: "32%",
  },
  rectangleParent: {
    left: "52.38%",
    right: "0%",
    position: "absolute",
    top: "0%",
    width: "47.62%",
    bottom: "0%",
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
    color: Color.main1,
    left: "32%",
    textAlign: "center",
    top: "32%",
  },
  rectangleGroup: {
    right: "52.38%",
    bottom: "0%",
    height: "100%",
    width: "47.62%",
    position: "absolute",
  },
  component8: {
    top: 936,
    width: 315,
    left: 30,
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
    alignItems: "center",
    flexDirection: "row",
    right: "0%",
    position: "absolute",
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
    width: 20,
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
    alignItems: "center",
    flexDirection: "row",
    width: 315,
    position: "absolute",
  },
  lungs1Icon: {
    top: 5,
    left: 5,
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild2: {
    width: 316,
    height: 1,
    top: 40,
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
    top: 216,
    left: 30,
    position: "absolute",
  },
  youChose4: {
    top: 191,
    left: 215,
    color: Color.gray,
  },
  rectangleView: {
    height: 80,
    width: 355,
    position: "absolute",
    left: 0,
    top: 0,
  },
  settingWhichIndex: {
    left: 20,
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    color: Color.main1,
    width: 315,
    position: "absolute",
    top: 15,
    height: 20,
    lineHeight: 34,
    fontFamily: FontFamily.interMedium,
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
  },
  header1Child: {
    bottom: "0%",
    height: "100%",
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
    left: "83.73%",
    height: "70%",
    top: "15%",
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
  qunLM: {
    left: 132,
    fontSize: FontSize.size_lg,
    top: 11,
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
    top: "48.68%",
    bottom: "19.74%",
    height: "31.58%",
  },
  header1: {
    height: 76,
    left: 0,
    top: 0,
  },
  home: {
    lineHeight: 18,
    fontSize: FontSize.newDescriptionLabelField_size,
    color: Color.main2,
    top: 23,
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
    lineHeight: 20,
    top: 26,
  },
  icroundHealthAndSafetyIcon: {
    left: 37,
    top: 0,
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
    bottom: 194,
    height: 64,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    justifyContent: "center",
    width: 375,
    backgroundColor: Color.white,
    flexDirection: "row",
    left: 1558,
  },
  textField: {
    left: "32%",
    color: Color.white,
    textAlign: "center",
    top: "32%",
  },
  button1: {
    top: 742,
    left: 1608,
    width: 275,
  },
  heartRate1: {
    lineHeight: 15,
    textAlign: "left",
    color: Color.main1,
  },
  bpm: {
    marginLeft: 8,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  heartRateParent: {
    left: 75,
    top: 15,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  min: {
    width: 70,
    height: 15,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  average: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  minParent: {
    top: 40,
    alignItems: "center",
  },
  hrIndex1Child: {
    top: 39,
    left: 334,
    position: "absolute",
  },
  heartIcon: {
    top: 23,
    height: 45,
    width: 45,
    left: 15,
  },
  text2: {
    width: 70,
    height: 15,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  text3: {
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
  },
  parent: {
    top: 60,
  },
  hrIndex1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  bloodPressure1: {
    lineHeight: 15,
    textAlign: "left",
    color: Color.main1,
  },
  bloodPressureIcon1: {
    top: 22,
  },
  blIndex1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    marginTop: 20,
    overflow: "hidden",
  },
  spo2: {
    lineHeight: 15,
    textAlign: "left",
    color: Color.main1,
  },
  spo2Index1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    marginTop: 20,
    overflow: "hidden",
  },
  weight1: {
    lineHeight: 15,
    textAlign: "left",
    color: Color.main1,
  },
  weightIndex1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    marginTop: 20,
    overflow: "hidden",
  },
  bodyTemperature1: {
    width: 143,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.newDescriptionLabelField,
    fontSize: FontSize.size_mini,
  },
  c: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  celciusCelsiusDegreeForeIcon1: {
    height: "26.67%",
    width: "6.76%",
    top: "36.67%",
    right: "85.92%",
    bottom: "36.67%",
    left: "7.32%",
    position: "absolute",
  },
  weightIndex2: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.white,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  weightIndex2Wrapper: {
    marginTop: 20,
  },
  hrIndex1Parent: {
    top: 192,
    left: 1568,
    position: "absolute",
  },
  teenyiconsadjustHorizontalA: {
    top: 155,
    left: 1578,
    width: 22,
  },
  uilcalendarAltIcon: {
    top: 153,
    left: 1889,
  },
  viewOtherDay: {
    top: 161,
    left: 1798,
    lineHeight: 15,
    color: Color.main1,
  },
  text20: {
    height: "68.18%",
    width: "72.73%",
    top: "16%",
    left: "12%",
    lineHeight: 15,
    fontFamily: FontFamily.newStatus,
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    display: "flex",
    justifyContent: "center",
    color: Color.main1,
    textAlign: "center",
  },
  ellipseParent: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  text23: {
    top: "20%",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: "32%",
  },
  frameChild22: {
    marginLeft: 10,
  },
  vectorParent8: {
    top: 118,
    left: 1612,
    flexDirection: "row",
  },
  groupChild11: {
    height: "76%",
    bottom: "24%",
  },
  statusBarwhitebase1: {
    height: "20%",
    bottom: "80%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  instanceChild4: {
    top: "0%",
    height: "100%",
  },
  chevronLeftIcon: {
    overflow: "hidden",
  },
  qunLM1: {
    left: 154,
    display: "none",
    fontSize: FontSize.size_lg,
    top: 11,
    color: Color.main4,
    lineHeight: 34,
  },
  rectangleParent3: {
    height: "80%",
    top: "20%",
  },
  rectangleParent2: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  wrapper: {
    left: "10.67%",
    top: "35%",
    right: "76%",
    width: "13.33%",
    height: "50%",
  },
  communityHealthcare: {
    top: "62%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  goodMorning: {
    top: "47%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.newDescriptionLabelField,
  },
  chat2: {
    top: "56%",
    bottom: "20%",
    height: "24%",
  },
  header2: {
    top: -2,
    height: 100,
    left: 1558,
  },
  footer1: {
    bottom: 0,
    height: 64,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    justifyContent: "center",
    width: 375,
    backgroundColor: Color.white,
    flexDirection: "row",
    left: 0,
  },
  settingHealthIndexView: {
    flex: 1,
    height: 1070,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.main4,
  },
});

export default SettingHealthIndexView1;
