import React from "react";
import {
  
createAppContainer,
} from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/index";
import ProfileScreen from "../screens/profile";
import SettingScreen from "../screens/settings";

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Settings: SettingScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "red",
      },
    },
  }
);
export default createAppContainer(AppNavigator);
