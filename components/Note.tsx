import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {NoteScreenProps} from '../types/shared';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {data as notes} from '../data';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';

const Note = ({route, navigation}: NoteScreenProps) => {
  const {id} = route.params;
  const data = notes.find(note => id === note.key);

  const [pinned, setPinned] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.menusContainer}>
        <Pressable onPress={() => navigation.goBack()} style={{flex: 1}}>
          <Icon name="chevron-left" size={30} />
        </Pressable>
        <Pressable
          style={{marginRight: 13}}
          onPress={() => setPinned(state => !state)}>
          <Icon
            name="thumbtack"
            size={24}
            style={{color: pinned ? 'black' : 'gray'}}
          />
        </Pressable>
        <Pressable>
          <Icon name="archive" size={26} />
        </Pressable>
      </View>
      <TextInput
        style={styles.inputHeader}
        placeholder="Title"
        defaultValue={data?.heading}
        maxLength={35}
      />
      <TextInput
        style={styles.inputBody}
        placeholder="Note"
        defaultValue={data?.body}
        multiline
      />
      {/* modals */}

      <View style={styles.footer}>
        <Menu renderer={renderers.SlideInMenu}>
          <MenuTrigger>
            <Icon name="plus-circle" size={30} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption style={styles.optionContainer}>
              <Icon name="camera" size={22} />
              <Text style={styles.optionText}>Take Photo</Text>
            </MenuOption>
            <MenuOption style={styles.optionContainer}>
              <Icon name="image" size={22} />
              <Text style={styles.optionText}>Choose image</Text>
            </MenuOption>
            <MenuOption style={styles.optionContainer}>
              <Icon name="microphone" style={{marginRight: 5}} size={24} />
              <Text style={styles.optionText}>Recording</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
        <Text style={styles.lastEdited}>Edited 2:07 PM</Text>
        <Menu renderer={renderers.SlideInMenu}>
          <MenuTrigger>
            <Icon name="ellipsis-v" size={30} />
          </MenuTrigger>
          <MenuOptions>
            <MenuOption style={styles.optionContainer}>
              <Icon name="trash" size={22} />
              <Text style={styles.optionText}>Delete</Text>
            </MenuOption>
            <MenuOption style={styles.optionContainer}>
              <Icon name="copy" size={22} />
              <Text style={styles.optionText}>Make a copy</Text>
            </MenuOption>
            <MenuOption style={styles.optionContainer}>
              <Icon name="share-alt" size={22} />
              <Text style={styles.optionText}>Share</Text>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4ead5',
  },
  menusContainer: {height: 60, flexDirection: 'row', alignItems: 'center'},
  inputHeader: {fontSize: 25},
  inputBody: {fontSize: 18},
  footer: {
    position: 'absolute',
    marginHorizontal: 15,
    bottom: 0,
    right: 0,
    left: 0,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  lastEdited: {flex: 1, textAlign: 'center'},
  menuModal: {backgroundColor: 'white', height: 300},
  optionContainer: {flexDirection: 'row', flex: 1, padding: 12},
  optionText: {fontSize: 17, flex: 1, marginLeft: 10},
});
