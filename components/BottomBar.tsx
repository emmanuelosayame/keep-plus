import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BottomBar = ({navigation}: any) => {
  return (
    <>
      <View style={styles.container}>
        <Pressable style={{marginHorizontal: 10}}>
          <Icon name="microphone" size={25} />
        </Pressable>
        <Pressable style={{marginHorizontal: 10}}>
          <Icon name="image" size={25} />
        </Pressable>
      </View>
      <Pressable
        style={styles.addBtn}
        onPress={() => navigation.navigate('note', {id: 'new'})}>
        <Icon name="plus" size={30} />
      </Pressable>
    </>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4ead5',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    elevation: 3,
    shadowColor: 'black',
    borderTopColor: 'gainsboro',
    borderTopWidth: 1,
  },
  addBtn: {
    position: 'absolute',
    right: 25,
    bottom: 40,
    zIndex: 50,
    borderRadius: 23,
    width: 70,
    backgroundColor: 'rgb(220,122,50)',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 5,
    textShadowOffset: {width: 56, height: 13},
  },
});
