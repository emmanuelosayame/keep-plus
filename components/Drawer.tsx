import {ReactNode} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const DrawerComponent = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Keep Plus</Text>
      </View>
      <View
        style={{borderBottomWidth: 1, borderBottomColor: 'gray', flex: 1}}
      />
      <ScrollView style={{marginTop: 30}}>
        <NavItem
          active={true}
          label="Notes"
          navigation={navigation}
          screen="home">
          <Icon name="lightbulb" size={23} />
        </NavItem>
        <NavItem label="Archive" navigation={navigation} screen="home">
          <Icon name="archive" size={23} />
        </NavItem>
        <NavItem label="Trash" navigation={navigation} screen="home">
          <Icon name="trash" size={23} />
        </NavItem>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            flex: 1,
            marginHorizontal: 5,
            marginLeft: 15,
          }}
        />
        <NavItem label="Settings" navigation={navigation} screen="home">
          <Icon name="cog" size={23} />
        </NavItem>
        <NavItem label="Feedback" navigation={navigation} screen="home">
          <Icon name="comment-alt" size={23} />
        </NavItem>
      </ScrollView>
    </View>
  );
};

interface NavItemProps {
  screen: string;
  label: string;
  navigation: any;
  children: ReactNode;
  active?: boolean;
}

const NavItem = ({
  screen,
  label,
  navigation,
  children,
  active,
}: NavItemProps) => {
  return (
    <Pressable
      onPress={() => navigation.navigate(screen)}
      style={{
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: active ? 'rgba(255,102,0,0.2)' : '',
      }}>
      {children}
      <Text
        style={{
          marginLeft: 10,
          fontSize: 18,
          flex: 1,
          color: active ? 'orange' : '',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default DrawerComponent;

const styles = StyleSheet.create({
  header: {paddingVertical: 10, paddingHorizontal: 20},
  headerText: {fontSize: 23},
});
