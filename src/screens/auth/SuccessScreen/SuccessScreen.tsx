import React from 'react';

import {Button, Icon, Screen, Text} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
  const {params} = route;
  function goBackToBegin() {
    navigation.goBack();
  }
  return (
    <Screen>
      <Icon {...params.icon} />
      <Text preset="headingLarge" mt="s24">
        {params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {params.description}
      </Text>
      <Button title="Voltar ao início" mt="s40" onPress={goBackToBegin} />
    </Screen>
  );
}
