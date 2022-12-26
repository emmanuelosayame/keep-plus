import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {home: undefined; note: {id: string}};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'home'
>;

export type NoteScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'note'
>;

export type NoteNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  'note',
  undefined
>;
