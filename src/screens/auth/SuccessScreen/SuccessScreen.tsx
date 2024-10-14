import React from 'react';
import {Button, Icon, Screen, Text} from '@components';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'SuccessScreen'>;
export function SuccessScreen({route, navigation}: ScreenProps) {
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
