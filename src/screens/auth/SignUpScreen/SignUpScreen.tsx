import React from 'react';
import {Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  Box,
  Button,
  Screen,
  Text,
  FormPasswordInput,
  FormTextInput,
} from '@components';
import {RootStackParamsList} from '../../../routes/Routes';
import {signUpSchema, SignUpSchema} from './signUpSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'SignUpScreen'>;
export function SignUpScreen({}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    defaultValues: {
      fullName: '',
      username: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });
  //TODO: Implement submit
  // const {reset} = useResetNavigationSuccess();

  function submitForm({fullName, username, email, password}: SignUpSchema) {
    Alert.alert(
      `login com asdas sucesso ${username}, ${fullName}, ${email}, ${password}`,
    );
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb={'s32'}>
        Criar uma conta
      </Text>

      <Box gap="s20">
        <FormTextInput
          control={control}
          name={'username'}
          label="Seu username"
          placeholder="@"
        />

        <FormTextInput
          control={control}
          name={'fullName'}
          label="Nome Completo"
          placeholder="Digite seu nome completo"
        />

        <FormTextInput
          control={control}
          name={'email'}
          label="E-mail"
          placeholder="Digite seu e-mail"
        />

        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          boxProps={{mb: 's10'}}
          placeholder="Digite sua senha"
        />
      </Box>

      <Button
        disabled={!formState.isValid}
        title="Criar Conta"
        mt={'s48'}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
