import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import profile from '../assets/profile.jpg';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

const Header = () => {
  const navigate = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate.openDrawer()}>
        <Icon name="bars" size={27} />
      </Pressable>
      <Pressable style={styles.searchText}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          search your notes
        </Text>
      </Pressable>
      <Menu>
        <MenuTrigger>
          <Image
            style={{width: 37, height: 37, borderRadius: 30}}
            source={profile}
          />
        </MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              borderRadius: 15,
              padding: 13,
              marginTop: 50,
              // position: 'relative',
              // flex: 1,
              width: '92%',
              marginHorizontal: 10,
              height: 220,
            },
          }}>
          <View style={{flexDirection: 'row'}}>
            <Pressable style={{}}>
              <Icon name="times" size={25} />
            </Pressable>
            <View style={{flex: 1, marginRight: 10}}>
              <Text
                style={{textAlign: 'center', fontWeight: '600', fontSize: 27}}>
                Google
              </Text>
            </View>
          </View>
          <MenuOption>
            <View style={{flexDirection: 'row', marginVertical: 20}}>
              <Image
                style={{width: 37, height: 37, borderRadius: 30}}
                source={profile}
              />
              <View style={{flex: 1, marginLeft: 10}}>
                <Text style={{fontSize: 17}}>Emmanuel Osayame</Text>
                <Text style={{fontSize: 13}}>emmanuelosayame@gmail.com</Text>
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'gainsboro',
                flex: 1,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: 'gray',
                  width: 170,
                  padding: 5,
                }}>
                <Text style={{textAlign: 'center'}}>Manage your account</Text>
              </TouchableOpacity>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: 'rgba(255,102,0,0.2)',
    height: 50,
    margin: 10,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    borderColor: '#dae2c6',
    borderWidth: 1,
  },
  searchText: {flex: 1},
});
