/* eslint-disable react/react-in-jsx-scope */

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  Box,
  Icon,
  Text,
  TouchableOpacityBox,
  TextProps,
  TouchableOpacityBoxProps,
  BoxProps,
} from '@components';
import {useAppSafeArea} from '@hooks';
import {BottomTabParamsList} from '@routes';
import {$shadowProps} from '@theme';

import {mapScreenToProps} from './mapScreenToProps';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();
  return (
    <Box {...$boxWrapper} style={[{paddingBottom: bottom}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

        const tabItem =
          mapScreenToProps[route.name as keyof BottomTabParamsList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.key}
            {...$itemWrapper}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Icon
              color={isFocused ? 'primary' : 'backgroundContrast'}
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unFocused}
            />
            <Text
              color={isFocused ? 'primary' : 'backgroundContrast'}
              {...$label}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
  semiBold: true,
  marginTop: 's4',
  preset: 'paragraphCaption',
};

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
  padding: 's12',
};

const $boxWrapper: BoxProps = {
  paddingTop: 's12',
  backgroundColor: 'background',
  flexDirection: 'row',
};
