import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamsList, AuthStackParamsList} from '@routes';

import {BottomTabParamsList} from './AppTabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamsList, AppStackParamsList {}
  }
}

export type AppScreenProps<AppRouteName extends keyof AppStackParamsList> =
  NativeStackScreenProps<AppStackParamsList, AppRouteName>;

export type AuthScreenProps<AuthRouteName extends keyof AuthStackParamsList> =
  NativeStackScreenProps<AuthStackParamsList, AuthRouteName>;

export type AppTabScreenProps<RouteNome extends keyof BottomTabParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamsList, RouteNome>,
    NativeStackScreenProps<AppStackParamsList, 'AppTabNavigator'>
  >;
