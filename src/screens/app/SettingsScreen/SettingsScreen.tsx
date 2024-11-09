import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text} from '@components';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen>
      <Text preset="headingLarge">Hello to settings</Text>
      <Button title="Settings" />
    </Screen>
  );
}
