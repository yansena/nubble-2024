import {RootStackParamsList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamsList {}
  }
}
