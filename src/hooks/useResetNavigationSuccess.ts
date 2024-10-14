import {useNavigation} from '@react-navigation/native';

import {RootStackParamsList} from '@routes';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: RootStackParamsList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params: params,
        },
      ],
    });
  }

  return {reset};
}
