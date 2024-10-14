import React, {useMemo} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  Box,
  Icon,
  Text,
  ScrollViewContainer,
  ViewContainer,
  TouchableOpacityBox,
} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoBack = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const Container = useMemo(
    () => (scrollable ? ScrollViewContainer : ViewContainer),
    [scrollable],
  );
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          paddingBottom="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={navigation.goBack}
              marginBottom="s24"
              flexDirection="row"
              alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}

          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
