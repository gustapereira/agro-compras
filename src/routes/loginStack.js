import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '~/pages/Login/Main';
import TypeRegister from '~/pages/Login/TypeRegister';
import RuralRegister from '~/pages/Login/RuralRegister';

const Stack = createStackNavigator();
export default function Login() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="TypeRegister" component={TypeRegister} />
      <Stack.Screen name="RuralRegister" component={RuralRegister} />
    </Stack.Navigator>
  );
}
