import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Welcome to home</Text>
      <Button
        title="Go to page NAV"
        onPress={() => navigation.navigate("nav")}
      />
    </View>
  );
};

const nav = ({ navigation }) => {
  return (
    <View>
      <Text>Ishara sandeepa</Text>
      <Button title="page2" onPress={() => navigation.navigate("page2")} />
    </View>
  );
};

const page2 = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.bodyText}>Welcome to page2</Text>
      <Button
        title="Go to page dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="page2" component={page2} />
        <Stack.Screen name="nav" component={nav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  bodyText: {
    fontSize: 50,
  },
});

export default Home;
