import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function FavoriteScreen({
  navigation,
}: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text>FavoriteScreen</Text>
      <Button onPress={() => navigation.goBack()} title="mock" />
    </Screen>
  );
}
