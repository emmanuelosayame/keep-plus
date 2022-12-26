import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import BottomBar from './components/BottomBar';
import NoteList from './components/NoteList';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Note from './components/Note';
import {HomeScreenProps, RootStackParamList} from './types/shared';
import {MenuProvider} from 'react-native-popup-menu';
import DrawerComponent from './components/Drawer';

const Home = ({navigation}: HomeScreenProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NoteList />
      <BottomBar navigation={navigation} />
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator<RootStackParamList>();

const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={DrawerComponent}
          screenOptions={{headerShown: false}}
          initialRouteName="home">
          <Drawer.Screen
            name="home"
            component={Home}
            options={{drawerHideStatusBarOnOpen: true}}
          />
          <Drawer.Group>
            <Drawer.Screen name="note" component={Note} />
          </Drawer.Group>
        </Drawer.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4ead5',
    flex: 1,
    paddingHorizontal: 5,
    position: 'relative',
  },
});

export default App;
