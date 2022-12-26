import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {data} from '../data';
import Header from './Header';
import {useNavigation} from '@react-navigation/native';
import {NoteNavigationProps} from '../types/shared';
import {limitText} from '../lib/helpers';

const EmptyFooter = () => {
  return <View style={{height: 70}}></View>;
};

const NoteList = () => {
  const navigation = useNavigation<NoteNavigationProps>();
  const [notes, setNotes] = useState(data);
  return (
    <FlatList
      ListHeaderComponent={<Header />}
      ListFooterComponent={<EmptyFooter />}
      data={notes}
      style={styles.container}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      renderItem={({item, index}) => (
        <Pressable
          style={styles.item}
          onPress={() => {
            navigation.navigate('note', {id: item.key});
          }}>
          <View>
            <Text
              style={{
                lineHeight: 23,
                fontSize: 17,
                textAlign: 'center',
                fontWeight: '600',
              }}>
              {item.heading}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'gray',
                textAlign: 'center',
                marginTop: 4,
              }}>
              {limitText(item.body, 50)}
            </Text>
          </View>
        </Pressable>
      )}
    />
  );
};

export default NoteList;

const styles = StyleSheet.create({
  container: {zIndex: 10},
  item: {
    backgroundColor: '#fffbe9',
    margin: 5,
    flex: 0.5,
    borderRadius: 20,
    height: 130,
    padding: 15,
  },
});
