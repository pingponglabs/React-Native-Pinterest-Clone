import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import WelcomeScreen from './screens/WelcomeScreen';
import SearchScreen from './screens/SearchScreen';
import SignUp from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import Profile from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import EditProfile from './screens/EditProfile';
import ResetScreen from './screens/ResetScreen';
import AccountSettings from './screens/AccountSettings';
import BoardScreen from './screens/BoardScreen'

import Email from './components/email';
import Password from './components/password';
import Gender from './components/gender';
import LoginOptions from './components/LoginOptions';
import changeCountry from './components/changeCountry'
import ClaimedAccounts from './components/ClaimedAccounts'

import CreatePin from './components/CreatePin'
import EditPins from './components/EditPins'
import ChooseBoard from './components/ChooseBoard'
import CreateBoard from './components/CreateBoard'

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Sign Up" component={SignUp} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Reset" component={ResetScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="Edit Profile" component={EditProfile} />
            <Stack.Screen name="Account Settings" component={AccountSettings} />
            <Stack.Screen name="Change Email" component={Email} />
            <Stack.Screen name="Change Password" component={Password} />
            <Stack.Screen name="Change Gender" component={Gender} />
            <Stack.Screen name="Change Country" component={changeCountry} />
            <Stack.Screen name="Login options" component={LoginOptions} />
            <Stack.Screen name="Claimed accounts" component={ClaimedAccounts} />
            <Stack.Screen name="Create Pin" component={CreatePin}/>
            <Stack.Screen name="Edit Pin" component={EditPins}/>
            <Stack.Screen name="Choose Board" component={ChooseBoard}/>
            <Stack.Screen name="Create Board" component={CreateBoard}/>
            <Stack.Screen name="Board" component={BoardScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
