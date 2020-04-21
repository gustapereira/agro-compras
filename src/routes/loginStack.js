import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from '~/pages/Login/Main';
import TypeRegister from '~/pages/Login/TypeRegister';
import RuralRegister from '~/pages/Login/RuralRegister';
import ProviderRegister from '~/pages/Login/ProviderRegister';
import ProviderRegisterAdditional from '~/pages/Login/ProviderRegisterAdditional';

const Stack = createStackNavigator();
export default function Login() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="TypeRegister" component={TypeRegister} />
      <Stack.Screen name="RuralRegister" component={RuralRegister} />
      <Stack.Screen name="ProviderRegister" component={ProviderRegister} />
      <Stack.Screen name="ProviderRegisterAdditional" component={ProviderRegisterAdditional} />
    </Stack.Navigator>
  );
}
