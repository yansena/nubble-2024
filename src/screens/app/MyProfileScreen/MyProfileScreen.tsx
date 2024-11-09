import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function MyProfileScreen({
  navigation,
}: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text>MyProfileScreen</Text>
      <Button onPress={() => navigation.goBack()} title="mock" />
    </Screen>
  );
}
