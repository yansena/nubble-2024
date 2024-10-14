import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInput, TextInputProps} from '@components';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field, fieldState}) => (
        <TextInput
          {...textInputProps}
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
