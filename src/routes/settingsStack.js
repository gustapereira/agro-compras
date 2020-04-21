import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsMain from '~/pages/Settings/Main';

const Stack = createStackNavigator();
export default function Login() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SettingsMain" component={SettingsMain} />
    </Stack.Navigator>
  );
}
