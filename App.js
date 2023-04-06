const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PillReminder1 from "./screens/PillReminder1";
import SignUp from "./screens/SignUp";
import SignUp1 from "./screens/SignUp1";
import LogIn from "./screens/LogIn";
import Request1 from "./screens/Request1";
import Request2 from "./screens/Request2";
import Request3 from "./screens/Request3";
import Request4 from "./screens/Request4";
import Request5 from "./screens/Request5";
import Suggest from "./screens/Suggest";
import Filter from "./screens/Filter";
import PillReminder from "./screens/PillReminder";
import FriendRequest from "./screens/FriendRequest";
import Connections from "./screens/Connections";
import RegisterElderlySitter from "./screens/RegisterElderlySitter";
import SignUp2 from "./screens/SignUp2";
import SignUp3 from "./screens/SignUp3";
import RegisterElderlySitter1 from "./screens/RegisterElderlySitter1";
import OverviewHealthIndex from "./screens/OverviewHealthIndex";
import SettingHealthIndexView from "./screens/SettingHealthIndexView";
import SettingHealthIndexView1 from "./screens/SettingHealthIndexView1";
import DangerNoti from "./screens/DangerNoti";
import OverviewHealthIndex1 from "./screens/OverviewHealthIndex1";
import OverviewHealthIndex2 from "./screens/OverviewHealthIndex2";
import ChatWithFriend from "./screens/ChatWithFriend";
import ChatHome from "./screens/ChatHome";
import Notification1 from "./screens/Notification1";
import Setting from "./screens/Setting";
import Home from "./screens/Home";
import LogIn1 from "./screens/LogIn1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_light: require("./assets/fonts/Inter_light.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PillReminder1"
              component={PillReminder1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={LogIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request"
              component={Request1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request1"
              component={Request2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request2"
              component={Request3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request3"
              component={Request4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Request4"
              component={Request5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Suggest"
              component={Suggest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PillReminder"
              component={PillReminder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FriendRequest"
              component={FriendRequest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Connections"
              component={Connections}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterElderlySitter"
              component={RegisterElderlySitter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp2"
              component={SignUp2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp3"
              component={SignUp3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterElderlySitter1"
              component={RegisterElderlySitter1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverviewHealthIndex"
              component={OverviewHealthIndex}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingHealthIndexView"
              component={SettingHealthIndexView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SettingHealthIndexView1"
              component={SettingHealthIndexView1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DangerNoti"
              component={DangerNoti}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverviewHealthIndex1"
              component={OverviewHealthIndex1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OverviewHealthIndex2"
              component={OverviewHealthIndex2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatWithFriend"
              component={ChatWithFriend}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatHome"
              component={ChatHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LogIn1"
              component={LogIn1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
