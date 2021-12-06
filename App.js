// import React from "react";
// import { View, Text, Button } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// //import { createBottomTabNavigator } from "react-navigation-tabs";
 
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: "Home",
//     headerStyle: {
//       backgroundColor: "#f4511e",
//     },
//     //headerTintColor: '#0ff',
//     headerTitleStyle: {
//       fontWeight: "bold",
//     },
//   };
  

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Profile"
//           onPress={() => this.props.navigation.push("Profile")}
//         />
//       </View>
//     );
//   }
// }
// class ProfileScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: navigation.getParam("otherParam", "A Param Header"),
//     };
//   };

//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Profile Screen</Text>
//         <Button
//           title="Go back"
//           onPress={() => this.props.navigation.goBack()}
//         />
//         <Button
//           title="Update the title"
//           onPress={() =>
//             this.props.navigation.setParams({ otherParam: "Header Updated!" })
//           }
//         />
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Profile: ProfileScreen,
//   },
//   {
//     initialRouteName: "Home",
//   }
// );

// const AppContainer = createAppContainer(AppNavigator);
// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// // const TabNavigator = createBottomTabNavigator(
// //   {
// //     Home: HomeScreen,
// //     Profile: ProfileScreen,
// //   },
// //   {
// //     initialRouteName: "Profile",
// //   }
// // );
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// // });

///////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import { createStackNavigator } from "react-navigation-stack";
// import {  createAppContainer } from "react-navigation";
// import HomeScreen from "./HomeScreen";
// import ProfileScreen from "./ProfileScreen";

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Profile: ProfileScreen,
//   },
//   {
//     initialRouteName: "Home",
//   }
// );
// export default createAppContainer(AppNavigator);  


///////////////////////////////////////////////////////////////////////////////////

import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import AppNavigator from "./src/lib/router";
const AppIndex = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <View style={styles.header}>
          <Icon name="ios-camera" size={28} color="white" />
          <Icon name="ios-menu" size={28} color="white" />
        </View>
        <AppIndex />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "red",
    paddingHorizontal: 18,
    paddingTop: 5,
  },
});
