import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

export function NewPostScreen({
  navigation,
}: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text>NewPostScreen</Text>
      <Button onPress={() => navigation.goBack()} title="mock" />
    </Screen>
  );
}
