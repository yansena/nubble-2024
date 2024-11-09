import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AuthScreenProps} from 'src/routes/navigationType';

import {Button, Screen, Text, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';

// type ScreenProps = NativeStackScreenProps<
//   AuthStackParamsList,
//   'ForgotPasswordScreen'
// >;
export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
    resolver: zodResolver(forgotPasswordSchema),
  });

  function submitForm({email}: ForgotPasswordSchema) {
    console.log(email);
    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Esqueci minha senha</Text>
      <Text preset="paragraphLarge" mt="s16">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        name="email"
        label="E-mail"
        control={control}
        boxProps={{mt: 's40'}}
        placeholder="Digite seu email"
      />
      <Button
        mt="s48"
        title="Recuperar Senha"
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
