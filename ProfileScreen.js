 import React from "react";
 import { StyleSheet, View, Text, Button } from "react-native";

 export default class ProfileScreen extends React.Component {
   static navigationOptions = {
     title: "Profile",
     headerStyle: {
       backgroundColor: "#f4511e",
     },
     //headerTintColor: '#0ff',
     headerTitleStyle: {
       fontWeight: "bold",
     },
   };
   render() {
     {
       /*Using the navigation prop we can get the 
              value passed from the previous screen*/
     }
     const { navigation } = this.props;
     const user_name = navigation.getParam("userName", "NO-User");
     const other_param = navigation.getParam(
       "otherParam",
       "some default value"
     );
     return (
       <View
         style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
       >
         <Text style={{ marginTop: 16, fontSize: 20 }}>
           This is Profile Screen and we receive value from Home Screen
         </Text>

             <Text style={styles.textStyle}>  
        {this.props.navigation.state.params.JSON_ListView_Clicked_Item}  
    </Text>  
<Text style={{ marginTop: 16,fontSize: 20, }}>With Check</Text>  
    {/*If you want to check the value is passed or not, 
            you can use conditional operator.*/}  
<Text style={styles.textStyle}>  
    {this.props.navigation.state.params.JSON_ListView_Clicked_Item  
        ? this.props.navigation.state.params.JSON_ListView_Clicked_Item  
        : 'No Value Passed'}  
</Text>
         <View style={styles.buttonStyle}>
           <Button
             title="Go back"
             onPress={() => this.props.navigation.goBack()}
           />
         </View>
       </View>
     );
   }
 }
 const styles = StyleSheet.create({
   textStyle: {
     fontSize: 23,
     textAlign: "center",
     color: "#f00",
   },

   buttonStyle: {
     width: "93%",
     marginTop: 50,
     backgroundColor: "red",
   },
 });  