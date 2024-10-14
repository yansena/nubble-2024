import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {PasswordInput, PasswordInputProps} from '@components';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field, fieldState}) => (
        <PasswordInput
          {...passwordInputProps}
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
