import React, {useState} from 'react';

import {TextInput, TextInputProps, Icon} from '@components';
// import {Pressable} from 'react-native';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecurity, setIsSecurity] = useState(true);
  const handleSecurityText = () => {
    setIsSecurity(oldVl => !oldVl);
  };
  return (
    <TextInput
      {...props}
      secureTextEntry={isSecurity}
      RightComponent={
        <Icon
          onPress={handleSecurityText}
          color="gray2"
          name={isSecurity ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}
